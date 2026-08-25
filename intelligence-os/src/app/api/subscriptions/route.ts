import { NextResponse } from "next/server";
import { demoSubscriptions } from "@/server/repositories/demo-data";
export async function GET() { const monthly = demoSubscriptions.reduce((sum, item) => sum + item.normalizedMonthlyAmount, 0); return NextResponse.json({ mode: "demo", summary: { active: demoSubscriptions.length, monthlyCost: monthly, annualizedCost: monthly * 12, overdueReviews: demoSubscriptions.filter((item) => item.lastReviewedAt < "2026-05-27").length }, rows: demoSubscriptions }); }
