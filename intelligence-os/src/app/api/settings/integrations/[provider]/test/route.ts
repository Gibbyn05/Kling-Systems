import { NextResponse } from "next/server";
import { enforceRateLimit } from "@/server/repositories/http";
export async function POST(_request:Request,context:{params:Promise<{provider:string}>}){const {provider}=await context.params;enforceRateLimit(`integration-test:${provider}`,5);return NextResponse.json({mode:"demo",ok:true,message:"Demo-adapteren er klar. Ingen ekstern API ble kalt."});}
