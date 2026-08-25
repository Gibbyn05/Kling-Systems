import { NextResponse } from "next/server";
import { enforceRateLimit } from "@/server/repositories/http";
export async function POST(_request:Request,context:{params:Promise<{provider:string}>}){const {provider}=await context.params;enforceRateLimit(`integration-sync:${provider}`,3);return NextResponse.json({mode:"demo",providerKey:provider,status:"succeeded",inserted:0,updated:0,skipped:1,failed:0,errors:[]});}
