import "server-only";

import { demoOrganization } from "@/server/repositories/demo-data";
import { createSupabaseServerClient, hasSupabaseConfiguration } from "@/lib/supabase/server";

export async function requireOrganizationAccess(organizationId: string) {
  if (!hasSupabaseConfiguration()) {
    if (organizationId !== demoOrganization.id) throw new Error("Organisasjonen finnes ikke i demo-modus.");
    return { organizationId, userId: "demo-user", organization: demoOrganization, role: "owner" as const, mode: "demo" as const };
  }
  const supabase = await createSupabaseServerClient();
  const { data: auth, error: authError } = await supabase.auth.getUser();
  if (authError || !auth.user) throw new Error("AUTH_REQUIRED");
  const { data: membership, error } = await supabase.from("organization_members").select("role, organizations(id,name,slug,timezone,currency,locale)").eq("organization_id", organizationId).eq("user_id", auth.user.id).single();
  if (error || !membership) throw new Error("ORGANIZATION_ACCESS_DENIED");
  const organizationValue = membership.organizations;
  const organization = Array.isArray(organizationValue) ? organizationValue[0] : organizationValue;
  if (!organization) throw new Error("ORGANIZATION_ACCESS_DENIED");
  return { organizationId, userId: auth.user.id, organization, role: membership.role, mode: "live" as const };
}
