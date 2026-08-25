import { NextResponse, type NextRequest } from "next/server";
import { analyticsQuerySchema } from "@/lib/validation/api";
import { getAnalyticsOverview } from "@/server/analytics/demo-analytics";
import { requireOrganizationAccess } from "@/server/repositories/access";
import { invalidRequest, routeError } from "@/server/repositories/http";

export async function GET(request: NextRequest) {
  const parsed = analyticsQuerySchema.safeParse(Object.fromEntries(request.nextUrl.searchParams));
  if (!parsed.success) return invalidRequest(parsed.error);
  try {
    await requireOrganizationAccess(parsed.data.organizationId);
    return NextResponse.json(getAnalyticsOverview(parsed.data.range, parsed.data.utmSource, parsed.data.utmCampaign));
  } catch (error) { return routeError(error); }
}
