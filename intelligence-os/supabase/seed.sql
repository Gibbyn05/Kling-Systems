insert into public.organizations(id,name,slug,timezone,currency,locale) values
('00000000-0000-4000-8000-000000000001','Kling Systems','kling-systems','Europe/Oslo','NOK','nb-NO')
on conflict(id) do update set name=excluded.name;

insert into public.business_preferences(organization_id,delegate_targets,automation_targets,single_view_metrics,decision_support_topics,configured_at) values
('00000000-0000-4000-8000-000000000001',
 '["leadoppfølging","fakturaoppfølging","innholdsanalyse","attribusjonsovervåking","abonnementsgjennomgang"]',
 '["leadreaktivering","kundeinnsjekk","integrasjonssynkronisering","innholdsmulighetsvarsler","datakvalitetsovervåking"]',
 '["bookede samtaler","betalinger","innbetalt","salg","nettoinntekt","forfalte fakturaer","ufulgte leads","attribuert inntekt"]',
 '["inntektslekkasje","funnelhelse","salgsattribusjon","innholdsretning","kundemuligheter"]',now())
on conflict(organization_id) do nothing;

insert into public.team_members(id,organization_id,name,role_title,team_type,primary_contribution) values
('10000000-0000-4000-8000-000000000001','00000000-0000-4000-8000-000000000001','Fredrik','Grunnlegger og systemansvarlig','core','Salg, systemarkitektur og leveranse'),
('10000000-0000-4000-8000-000000000002','00000000-0000-4000-8000-000000000001','Marius','Salg og kundevekst','core','Leadkvalifisering og kundetilfang'),
('10000000-0000-4000-8000-000000000003','00000000-0000-4000-8000-000000000001','Demo Designer','Designer','core','Web- og merkevaredesign')
on conflict(id) do nothing;

insert into public.subscriptions(organization_id,vendor,purpose,amount,billing_cycle,normalized_monthly_amount,status) values
('00000000-0000-4000-8000-000000000001','Vercel','Hosting og utrulling',220,'monthly',220,'active'),
('00000000-0000-4000-8000-000000000001','Supabase','Database og autentisering',275,'monthly',275,'active'),
('00000000-0000-4000-8000-000000000001','OpenAI','AI-bruk',700,'monthly',700,'active'),
('00000000-0000-4000-8000-000000000001','Anthropic','AI-bruk',600,'monthly',600,'active'),
('00000000-0000-4000-8000-000000000001','Fiken','Regnskap og faktura',199,'monthly',199,'active'),
('00000000-0000-4000-8000-000000000001','Resend','Transaksjons-e-post',200,'monthly',200,'active'),
('00000000-0000-4000-8000-000000000001','Canva','Design',149,'monthly',149,'active'),
('00000000-0000-4000-8000-000000000001','Adobe','Kreativ produksjon',299,'monthly',299,'active'),
('00000000-0000-4000-8000-000000000001','Google Workspace','E-post og samarbeid',180,'monthly',180,'active'),
('00000000-0000-4000-8000-000000000001','GitHub','Versjonskontroll',120,'monthly',120,'active'),
('00000000-0000-4000-8000-000000000001','Notion','Dokumentasjon',100,'monthly',100,'active'),
('00000000-0000-4000-8000-000000000001','Cal.com','Booking',150,'monthly',150,'active'),
('00000000-0000-4000-8000-000000000001','Analytics platform','Trafikkanalyse',250,'monthly',250,'active'),
('00000000-0000-4000-8000-000000000001','Domain services','Domener og DNS',80,'monthly',80,'active'),
('00000000-0000-4000-8000-000000000001','Automation platform','Arbeidsflyt',350,'monthly',350,'active');
