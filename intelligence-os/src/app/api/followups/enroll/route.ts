import { NextResponse } from "next/server";
import { z } from "zod";
const schema=z.object({organizationId:z.string().uuid(),sequenceId:z.string(),recipientIds:z.array(z.string()).min(1),confirmed:z.literal(true)});
export async function POST(request:Request){const parsed=schema.safeParse(await request.json());return parsed.success?NextResponse.json({mode:"demo",enrolled:parsed.data.recipientIds.length,status:"active",audit:{action:"followup.enrolled"}}):NextResponse.json({error:{code:"CONFIRMATION_REQUIRED",message:"Påmelding krever bekreftelse."}},{status:400});}
