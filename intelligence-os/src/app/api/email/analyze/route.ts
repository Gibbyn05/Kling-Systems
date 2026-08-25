import { NextResponse } from "next/server";
export async function POST() { return NextResponse.json({ mode: "demo", finding: "Tydelige problemformuleringer har høyere klikkrate enn generelle tilbud. Utvalget er lite, så funnet bør testes i et nytt utkast.", confidence: 0.72, evidence: ["email-1", "email-4"] }); }
