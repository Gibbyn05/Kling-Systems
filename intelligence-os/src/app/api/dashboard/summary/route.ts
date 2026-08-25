import { NextResponse, type NextRequest } from "next/server";
import { dashboardQuerySchema } from "@/lib/validation/api";
import { getDashboardSummary } from "@/server/analytics/demo-analytics";
import { requireOrganizationAccess } from "@/server/repositories/access";
import { invalidRequest, routeError } from "@/server/repositories/http";

export async function GET(request: NextRequest) {
  const parsed = dashboardQuerySchema.safeParse(Object.fromEntries(request.nextUrl.searchParams));
  if (!parsed.success) return invalidRequest(parsed.error);
  try {
    await requireOrganizationAccess(parsed.data.organizationId);
    return NextResponse.json(getDashboardSummary(parsed.data.range));
  } catch (error) {
    return routeError(error);
  }
}
