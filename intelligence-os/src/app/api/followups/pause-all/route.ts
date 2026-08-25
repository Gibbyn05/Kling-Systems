import { NextResponse } from "next/server";
import { z } from "zod";
const schema=z.object({organizationId:z.string().uuid(),confirmed:z.literal(true),reason:z.string().min(3)});
export async function POST(request:Request){const parsed=schema.safeParse(await request.json());return parsed.success?NextResponse.json({mode:"demo",paused:true,audit:{action:"followup.emergency_paused",reason:parsed.data.reason}}):NextResponse.json({error:{code:"CONFIRMATION_REQUIRED",message:"Global pause krever bekreftelse og begrunnelse."}},{status:400});}
