import { NextResponse } from "next/server";
import { z } from "zod";
const schema=z.object({confirmed:z.literal(true),payload:z.record(z.string(),z.unknown())});
export async function POST(request:Request,context:{params:Promise<{id:string}>}){const {id}=await context.params;const parsed=schema.safeParse(await request.json());return parsed.success?NextResponse.json({mode:"demo",actionId:id,status:"executed",result:{payload:parsed.data.payload},audit:{action:"ai_action.confirmed"}}):NextResponse.json({error:{code:"CONFIRMATION_REQUIRED",message:"AI-handlingen krever eksplisitt bekreftelse."}},{status:400});}
