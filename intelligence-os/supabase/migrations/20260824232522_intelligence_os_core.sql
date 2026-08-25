create extension if not exists pgcrypto;
create schema if not exists private;
revoke all on schema private from public, anon, authenticated;

create table public.organizations (
  id uuid primary key default gen_random_uuid(), name text not null, slug text not null unique,
  timezone text not null default 'Europe/Oslo', currency char(3) not null default 'NOK', locale text not null default 'nb-NO',
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.organization_members (
  organization_id uuid not null references public.organizations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('owner','admin','member','viewer')),
  created_at timestamptz not null default now(), primary key (organization_id,user_id)
);
create index organization_members_user_id_idx on public.organization_members(user_id);
create table public.business_preferences (
  organization_id uuid primary key references public.organizations(id) on delete cascade,
  delegate_targets jsonb not null default '[]', automation_targets jsonb not null default '[]',
  single_view_metrics jsonb not null default '[]', decision_support_topics jsonb not null default '[]',
  configured_at timestamptz, updated_at timestamptz not null default now()
);
create table public.integrations (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  category text not null, provider_key text not null, display_name text not null,
  status text not null check (status in ('connected','disconnected','error','demo')),
  public_config jsonb not null default '{}', secret_ciphertext text, secret_last_four text,
  last_successful_sync_at timestamptz, last_attempted_sync_at timestamptz, last_error text,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), unique(organization_id,provider_key)
);
create table public.sync_runs (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  integration_id uuid not null references public.integrations(id) on delete cascade,
  status text not null check (status in ('running','succeeded','partial','failed')),
  inserted_count integer not null default 0, updated_count integer not null default 0, skipped_count integer not null default 0, failed_count integer not null default 0,
  cursor text, error_summary jsonb not null default '[]', started_at timestamptz not null default now(), completed_at timestamptz
);
create table public.team_members (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null, email text, role_title text not null, team_type text not null check(team_type in ('core','project','inactive')),
  description text, primary_contribution text, active boolean not null default true, started_on date,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.contacts (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  first_name text, last_name text, company_name text, email text, phone text,
  preferred_channel text check(preferred_channel in ('email','phone','whatsapp','imessage','instagram','unknown')),
  consent_status text not null default 'unknown' check(consent_status in ('confirmed','unknown','opted_out')),
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.content_items (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  platform text not null check(platform in ('youtube','instagram','facebook','linkedin','email','other')),
  external_id text, content_type text, title text not null, url text, thumbnail_url text, published_at timestamptz,
  utm_source text, utm_medium text, utm_campaign text, utm_content text, promoted boolean not null default false,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), unique(organization_id,platform,external_id)
);
create table public.leads (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  contact_id uuid not null references public.contacts(id) on delete cascade, owner_id uuid references public.team_members(id) on delete set null,
  status text not null check(status in ('new','contacted','qualified','booked','proposal','closed_won','closed_lost','nurture','disqualified')),
  quality_score integer check(quality_score between 0 and 100), quality_label text check(quality_label in ('high','medium','low','unscored')),
  source text, utm_source text, utm_medium text, utm_campaign text, utm_content text,
  source_content_id uuid references public.content_items(id) on delete set null,
  last_followup_at timestamptz, next_followup_at timestamptz, booked_call_at timestamptz, customer_at timestamptz, closed_at timestamptz,
  current_client boolean not null default false, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.clients (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  contact_id uuid not null references public.contacts(id) on delete restrict, originating_lead_id uuid references public.leads(id) on delete set null,
  owner_id uuid references public.team_members(id) on delete set null, service text,
  lifecycle_status text not null check(lifecycle_status in ('active','paused','completed','churned')),
  contracted_value numeric(14,2) not null default 0, health_score integer check(health_score between 0 and 100), grace_note text,
  started_on date, ended_on date, last_meaningful_contact_at timestamptz, last_upsell_at timestamptz,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.deals (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  lead_id uuid references public.leads(id) on delete set null, client_id uuid references public.clients(id) on delete set null,
  owner_id uuid references public.team_members(id) on delete set null, name text not null, service text,
  value numeric(14,2) not null, currency char(3) not null default 'NOK',
  stage text not null check(stage in ('new','qualified','booked','proposal','negotiation','closed_won','closed_lost')),
  opened_at timestamptz not null, closed_at timestamptz, lost_reason text,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.booked_calls (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  lead_id uuid references public.leads(id) on delete set null, owner_id uuid references public.team_members(id) on delete set null,
  external_id text, provider_key text, source text, scheduled_at timestamptz not null, completed_at timestamptz,
  status text not null check(status in ('booked','completed','cancelled','no_show','rescheduled')),
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.invoices (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade, invoice_number text not null, external_id text,
  amount numeric(14,2) not null, currency char(3) not null default 'NOK', issued_on date not null, due_on date not null,
  status text not null check(status in ('draft','sent','partially_paid','paid','overdue','void')),
  grace_until date, grace_note text, last_reminder_at timestamptz, resolved_reason text,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), unique(organization_id,invoice_number)
);
create table public.payment_installments (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  invoice_id uuid not null references public.invoices(id) on delete cascade, installment_number integer not null, amount numeric(14,2) not null,
  due_on date not null, paid_at timestamptz, status text not null check(status in ('scheduled','paid','overdue','waived')),
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), unique(invoice_id,installment_number)
);
create table public.payments (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  client_id uuid references public.clients(id) on delete set null, deal_id uuid references public.deals(id) on delete set null,
  invoice_id uuid references public.invoices(id) on delete set null, provider_key text not null, external_id text, payer_name text, payer_email text,
  amount_gross numeric(14,2) not null, fee_amount numeric(14,2) not null default 0, refund_amount numeric(14,2) not null default 0,
  currency char(3) not null default 'NOK', converted_amount_nok numeric(14,2), conversion_rate numeric(18,8),
  status text not null check(status in ('pending','succeeded','failed','refunded','partially_refunded')), paid_at timestamptz,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), unique(organization_id,provider_key,external_id)
);
create table public.payer_aliases (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade, alias_name text, alias_email text,
  confirmed_at timestamptz not null default now(), created_at timestamptz not null default now()
);
create table public.expenses (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  team_member_id uuid references public.team_members(id) on delete set null, vendor text not null, category text not null, description text,
  amount numeric(14,2) not null, currency char(3) not null default 'NOK', status text not null check(status in ('pending','approved','paid','rejected')),
  incurred_on date not null, recognized_on date, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.commissions (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  team_member_id uuid not null references public.team_members(id) on delete cascade, deal_id uuid references public.deals(id) on delete set null,
  amount numeric(14,2) not null, currency char(3) not null default 'NOK', status text not null check(status in ('pending','recognized','paid','cancelled')),
  recognized_on date, paid_at timestamptz, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.subscriptions (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  vendor text not null, purpose text, owner_id uuid references public.team_members(id) on delete set null, amount numeric(14,2) not null,
  currency char(3) not null default 'NOK', billing_cycle text not null check(billing_cycle in ('weekly','monthly','quarterly','annual')),
  normalized_monthly_amount numeric(14,2) not null, status text not null check(status in ('active','trial','cancelled','paused')),
  next_billing_on date, payment_method_label text, last_reviewed_at timestamptz, review_note text,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.tasks (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  assignee_id uuid references public.team_members(id) on delete set null, title text not null, description text,
  status text not null check(status in ('open','in_progress','completed','cancelled')), priority text not null check(priority in ('critical','high','medium','low')),
  due_at timestamptz, related_entity_type text, related_entity_id uuid, source_type text, completed_at timestamptz,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.sops (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null, category text not null, purpose text, body_markdown text not null, input_schema jsonb not null default '{}',
  expected_output text, version integer not null default 1, active boolean not null default true, linked_issue_type text, last_run_at timestamptz,
  created_by uuid references auth.users(id) on delete set null, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.context_sources (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  provider_key text not null, display_name text not null, root_path text, selected_paths jsonb not null default '[]',
  status text not null check(status in ('connected','importing','ready','error','disconnected')), last_imported_at timestamptz,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.context_documents (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  source_id uuid not null references public.context_sources(id) on delete cascade, path text not null, title text, content_hash text not null,
  body_text text not null, metadata jsonb not null default '{}', imported_at timestamptz not null default now(), updated_at timestamptz not null default now(), unique(source_id,path)
);
create table public.content_metrics_daily (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  content_item_id uuid not null references public.content_items(id) on delete cascade, metric_date date not null,
  impressions bigint not null default 0, thumbnail_clicks bigint not null default 0, views bigint not null default 0, avg_view_seconds numeric(12,2),
  subscribers_gained bigint not null default 0, endscreen_clicks bigint not null default 0, new_viewers bigint not null default 0, returning_viewers bigint not null default 0,
  retention_at_cta numeric(7,6), reach bigint not null default 0, likes bigint not null default 0, comments bigint not null default 0,
  saves bigint not null default 0, shares bigint not null default 0, profile_visits bigint not null default 0, link_clicks bigint not null default 0,
  dms_started bigint not null default 0, platform_revenue numeric(14,2) not null default 0, attributed_revenue numeric(14,2) not null default 0,
  attributed_bookings integer not null default 0, attributed_closes integer not null default 0,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), unique(content_item_id,metric_date)
);
create table public.social_threads (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  platform text not null check(platform='instagram'), external_id text, contact_id uuid references public.contacts(id) on delete set null,
  lead_id uuid references public.leads(id) on delete set null, owner_id uuid references public.team_members(id) on delete set null,
  quality_score integer check(quality_score between 0 and 100), quality_label text check(quality_label in ('high','medium','low','unscored')),
  score_confidence numeric(7,6), buying_signals jsonb not null default '[]', objections jsonb not null default '[]', recommended_next_action text,
  last_message_at timestamptz, created_at timestamptz not null default now(), updated_at timestamptz not null default now(), unique(organization_id,platform,external_id)
);
create table public.social_messages (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  thread_id uuid not null references public.social_threads(id) on delete cascade, external_id text,
  direction text not null check(direction in ('inbound','outbound')), body text not null, sent_at timestamptz not null,
  created_at timestamptz not null default now(), unique(thread_id,external_id)
);
create table public.tracking_links (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null, slug text not null, destination_url text not null, utm_source text, utm_medium text, utm_campaign text, utm_content text,
  content_item_id uuid references public.content_items(id) on delete set null, active boolean not null default true,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), unique(organization_id,slug)
);
create table public.touchpoints (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  lead_id uuid references public.leads(id) on delete cascade, contact_id uuid references public.contacts(id) on delete cascade,
  tracking_link_id uuid references public.tracking_links(id) on delete set null, content_item_id uuid references public.content_items(id) on delete set null,
  channel text, source text, medium text, campaign text, content text,
  event_type text not null check(event_type in ('visit','optin','lead','booking','close','purchase')),
  event_value numeric(14,2), occurred_at timestamptz not null, metadata jsonb not null default '{}', created_at timestamptz not null default now()
);
create table public.email_campaigns (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  provider_key text not null, external_id text, subject text not null, body_html text, body_text text,
  status text not null check(status in ('draft','scheduled','sent','cancelled')), sent_at timestamptz,
  delivered integer not null default 0, unique_opens integer not null default 0, unique_clicks integer not null default 0, unsubscribes integer not null default 0,
  attributed_revenue numeric(14,2) not null default 0, created_at timestamptz not null default now(), updated_at timestamptz not null default now(), unique(organization_id,provider_key,external_id)
);
create table public.followup_sequences (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null, audience_type text not null check(audience_type in ('lead','client','both')),
  channel text not null check(channel in ('email','whatsapp','imessage','instagram','sms','demo')),
  active boolean not null default true, automatic_mode boolean not null default false, min_gap_days integer not null default 3, max_daily_sends integer not null default 50,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.followup_steps (
  id uuid primary key default gen_random_uuid(), sequence_id uuid not null references public.followup_sequences(id) on delete cascade,
  step_order integer not null, delay_days integer not null default 0, template_body text not null,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), unique(sequence_id,step_order)
);
create table public.followup_enrollments (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  sequence_id uuid not null references public.followup_sequences(id) on delete cascade,
  lead_id uuid references public.leads(id) on delete cascade, client_id uuid references public.clients(id) on delete cascade,
  status text not null check(status in ('active','paused','completed','stopped','failed')), current_step integer not null default 1,
  next_due_at timestamptz, stop_reason text, created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
  check((lead_id is not null and client_id is null) or (lead_id is null and client_id is not null))
);
create table public.message_logs (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  sequence_id uuid references public.followup_sequences(id) on delete set null, lead_id uuid references public.leads(id) on delete set null,
  client_id uuid references public.clients(id) on delete set null, provider_key text not null, channel text not null, recipient_label text, body text not null,
  provider_message_id text, idempotency_key text not null, status text not null check(status in ('draft','demo_sent','queued','sent','failed')),
  error_code text, error_message text, sent_at timestamptz, created_at timestamptz not null default now(), unique(organization_id,idempotency_key)
);
create table public.alerts (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  type text not null, severity text not null check(severity in ('critical','high','medium','low')), title text not null, explanation text not null,
  related_entity_type text, related_entity_id uuid, recommended_action text,
  status text not null default 'open' check(status in ('open','acknowledged','snoozed','resolved')),
  assigned_to uuid references public.team_members(id) on delete set null, snoozed_until timestamptz, resolved_at timestamptz, resolution_reason text,
  deduplication_key text not null, detected_at timestamptz not null default now(), created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create unique index alerts_open_dedup_idx on public.alerts(organization_id,deduplication_key) where status <> 'resolved';
create table public.data_quality_issues (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  area text not null, issue_type text not null, severity text not null check(severity in ('critical','high','medium','low')),
  affected_count integer not null default 0, details jsonb not null default '{}', status text not null check(status in ('open','acknowledged','resolved')),
  detected_at timestamptz not null default now(), resolved_at timestamptz, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.ai_insights (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  category text not null, prompt text not null, answer text not null, confidence numeric(7,6), findings jsonb not null default '[]', evidence jsonb not null default '[]',
  data_quality_warnings jsonb not null default '[]', recommended_actions jsonb not null default '[]', created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);
create table public.ai_actions (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  insight_id uuid references public.ai_insights(id) on delete cascade, action_type text not null, payload jsonb not null,
  status text not null check(status in ('proposed','confirmed','rejected','executed','failed')),
  confirmed_by uuid references auth.users(id) on delete set null, confirmed_at timestamptz, executed_at timestamptz, result jsonb,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.audit_logs (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  actor_user_id uuid references auth.users(id) on delete set null, action text not null, entity_type text, entity_id uuid,
  before_state jsonb, after_state jsonb, metadata jsonb not null default '{}', created_at timestamptz not null default now()
);

create or replace function private.is_org_member(target_organization_id uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select (select auth.uid()) is not null and exists(
    select 1 from public.organization_members om
    where om.organization_id = target_organization_id and om.user_id = (select auth.uid())
  );
$$;
revoke all on function private.is_org_member(uuid) from public, anon;
grant usage on schema private to authenticated;
grant execute on function private.is_org_member(uuid) to authenticated;

create or replace function private.set_updated_at()
returns trigger language plpgsql security invoker set search_path = '' as $$
begin new.updated_at = now(); return new; end; $$;
revoke all on function private.set_updated_at() from public, anon, authenticated;

do $$
declare table_name text;
begin
  foreach table_name in array array['organization_members','business_preferences','integrations','sync_runs','team_members','contacts','content_items','leads','clients','deals','booked_calls','invoices','payment_installments','payments','payer_aliases','expenses','commissions','subscriptions','tasks','sops','context_sources','context_documents','content_metrics_daily','social_threads','social_messages','tracking_links','touchpoints','email_campaigns','followup_sequences','followup_enrollments','message_logs','alerts','data_quality_issues','ai_insights','ai_actions','audit_logs']
  loop execute format('create index if not exists %I on public.%I(organization_id)', table_name || '_organization_id_idx', table_name); end loop;
end $$;
create index leads_status_idx on public.leads(status); create index leads_quality_idx on public.leads(quality_label);
create index leads_last_followup_idx on public.leads(last_followup_at); create index leads_created_idx on public.leads(created_at);
create index booked_calls_scheduled_idx on public.booked_calls(scheduled_at); create index deals_closed_stage_idx on public.deals(closed_at,stage);
create index payments_paid_status_provider_idx on public.payments(paid_at,status,provider_key); create index invoices_due_status_idx on public.invoices(due_on,status);
create index touchpoints_occurred_idx on public.touchpoints(occurred_at); create index touchpoints_lead_idx on public.touchpoints(lead_id);
create index touchpoints_source_campaign_idx on public.touchpoints(source,campaign); create index content_metrics_item_date_idx on public.content_metrics_daily(content_item_id,metric_date);
create index social_threads_quality_last_idx on public.social_threads(quality_label,last_message_at); create index email_campaigns_sent_idx on public.email_campaigns(sent_at);
create index tasks_status_due_assignee_idx on public.tasks(status,due_at,assignee_id); create index alerts_status_severity_idx on public.alerts(status,severity);

alter table public.organizations enable row level security;
create policy organizations_select on public.organizations for select to authenticated using(private.is_org_member(id));
create policy organizations_update on public.organizations for update to authenticated using(private.is_org_member(id)) with check(private.is_org_member(id));
alter table public.organization_members enable row level security;
create policy organization_members_select on public.organization_members for select to authenticated using(user_id=(select auth.uid()) or private.is_org_member(organization_id));
create policy organization_members_insert on public.organization_members for insert to authenticated with check(private.is_org_member(organization_id));
create policy organization_members_update on public.organization_members for update to authenticated using(private.is_org_member(organization_id)) with check(private.is_org_member(organization_id));
create policy organization_members_delete on public.organization_members for delete to authenticated using(private.is_org_member(organization_id));

do $$
declare table_name text;
begin
  foreach table_name in array array['business_preferences','integrations','sync_runs','team_members','contacts','content_items','leads','clients','deals','booked_calls','invoices','payment_installments','payments','payer_aliases','expenses','commissions','subscriptions','tasks','sops','context_sources','context_documents','content_metrics_daily','social_threads','social_messages','tracking_links','touchpoints','email_campaigns','followup_sequences','followup_enrollments','message_logs','alerts','data_quality_issues','ai_insights','ai_actions','audit_logs']
  loop
    execute format('alter table public.%I enable row level security',table_name);
    execute format('create policy %I on public.%I for select to authenticated using(private.is_org_member(organization_id))',table_name||'_select',table_name);
    execute format('create policy %I on public.%I for insert to authenticated with check(private.is_org_member(organization_id))',table_name||'_insert',table_name);
    execute format('create policy %I on public.%I for update to authenticated using(private.is_org_member(organization_id)) with check(private.is_org_member(organization_id))',table_name||'_update',table_name);
    execute format('create policy %I on public.%I for delete to authenticated using(private.is_org_member(organization_id))',table_name||'_delete',table_name);
  end loop;
end $$;
alter table public.followup_steps enable row level security;
create policy followup_steps_select on public.followup_steps for select to authenticated using(exists(select 1 from public.followup_sequences s where s.id=sequence_id and private.is_org_member(s.organization_id)));
create policy followup_steps_insert on public.followup_steps for insert to authenticated with check(exists(select 1 from public.followup_sequences s where s.id=sequence_id and private.is_org_member(s.organization_id)));
create policy followup_steps_update on public.followup_steps for update to authenticated using(exists(select 1 from public.followup_sequences s where s.id=sequence_id and private.is_org_member(s.organization_id))) with check(exists(select 1 from public.followup_sequences s where s.id=sequence_id and private.is_org_member(s.organization_id)));
create policy followup_steps_delete on public.followup_steps for delete to authenticated using(exists(select 1 from public.followup_sequences s where s.id=sequence_id and private.is_org_member(s.organization_id)));

revoke all on all tables in schema public from anon, authenticated;
grant select,insert,update,delete on all tables in schema public to authenticated;

create view public.dashboard_summary with (security_invoker=true) as
select o.id organization_id,
  (select count(*) from public.booked_calls b where b.organization_id=o.id and b.status<>'cancelled') booked_calls,
  (select count(*) from public.payments p where p.organization_id=o.id and p.status='succeeded') successful_payments,
  (select coalesce(sum(p.amount_gross-p.refund_amount),0) from public.payments p where p.organization_id=o.id and p.status='succeeded') cash_collected,
  (select count(*) from public.deals d where d.organization_id=o.id and d.stage='closed_won') closes
from public.organizations o;
create view public.income_summary with (security_invoker=true) as
select o.id organization_id,
  coalesce(sum(p.amount_gross),0) gross_revenue, coalesce(sum(p.refund_amount),0) refunds, coalesce(sum(p.fee_amount),0) processor_fees,
  coalesce((select sum(e.amount) from public.expenses e where e.organization_id=o.id and e.status='paid'),0) expenses,
  coalesce((select sum(c.amount) from public.commissions c where c.organization_id=o.id and c.status in ('recognized','paid')),0) commissions
from public.organizations o left join public.payments p on p.organization_id=o.id and p.status='succeeded' group by o.id;
create view public.overdue_invoices with (security_invoker=true) as select *,greatest(0,current_date-due_on) days_overdue from public.invoices where status='overdue';
create view public.funnel_by_source with (security_invoker=true) as select organization_id,coalesce(source,'unknown') source,count(*) filter(where event_type='visit') visits,count(*) filter(where event_type='optin') optins,count(*) filter(where event_type='booking') bookings,count(*) filter(where event_type='close') closes,coalesce(sum(event_value) filter(where event_type='purchase'),0) revenue from public.touchpoints group by organization_id,coalesce(source,'unknown');
create view public.closer_leaderboard with (security_invoker=true) as select tm.organization_id,tm.id team_member_id,tm.name,count(d.id) closes,coalesce(sum(d.value),0) closed_revenue from public.team_members tm left join public.deals d on d.owner_id=tm.id and d.stage='closed_won' group by tm.organization_id,tm.id,tm.name;
create view public.lead_attribution with (security_invoker=true) as select l.organization_id,l.id lead_id,min(t.occurred_at) first_touch_at,(array_agg(t.source order by t.occurred_at))[1] first_source,(array_agg(t.source order by t.occurred_at desc))[1] last_source from public.leads l left join public.touchpoints t on t.lead_id=l.id group by l.organization_id,l.id;
create view public.content_performance with (security_invoker=true) as select ci.organization_id,ci.id content_item_id,ci.platform,ci.title,sum(cm.views) views,sum(cm.reach) reach,sum(cm.attributed_revenue) attributed_revenue,sum(cm.attributed_bookings) attributed_bookings,sum(cm.attributed_closes) attributed_closes from public.content_items ci left join public.content_metrics_daily cm on cm.content_item_id=ci.id group by ci.organization_id,ci.id,ci.platform,ci.title;
create view public.followup_candidates with (security_invoker=true) as select l.organization_id,l.id,'lead' audience_type,l.last_followup_at,c.consent_status,c.email,c.phone from public.leads l join public.contacts c on c.id=l.contact_id where c.consent_status<>'opted_out';
create view public.attribution_coverage with (security_invoker=true) as select organization_id,count(*) total_leads,count(*) filter(where source is not null and (utm_campaign is not null or source='direct')) fully_attributed,case when count(*)=0 then null else count(*) filter(where source is not null and (utm_campaign is not null or source='direct'))::numeric/count(*) end coverage from public.leads group by organization_id;
create view public.subscription_summary with (security_invoker=true) as select organization_id,count(*) filter(where status='active') active_subscriptions,coalesce(sum(normalized_monthly_amount) filter(where status='active'),0) monthly_cost,coalesce(sum(normalized_monthly_amount*12) filter(where status='active'),0) annualized_cost,count(*) filter(where status='active' and (last_reviewed_at is null or last_reviewed_at<now()-interval '90 days')) overdue_reviews from public.subscriptions group by organization_id;
grant select on public.dashboard_summary,public.income_summary,public.overdue_invoices,public.funnel_by_source,public.closer_leaderboard,public.lead_attribution,public.content_performance,public.followup_candidates,public.attribution_coverage,public.subscription_summary to authenticated;
