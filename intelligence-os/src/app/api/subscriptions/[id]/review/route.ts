import { NextResponse } from "next/server";
import { z } from "zod";
import { writeAudit } from "@/server/repositories/demo-store";
const schema=z.object({reviewNote:z.string().min(2).max(2000),confirmed:z.literal(true)});
export async function PATCH(request:Request,context:{params:Promise<{id:string}>}){const {id}=await context.params;const parsed=schema.safeParse(await request.json());if(!parsed.success)return NextResponse.json({error:{code:"CONFIRMATION_REQUIRED",message:"Gjennomgangen må bekreftes."}},{status:400});writeAudit("subscription.reviewed","subscription",id,{reviewNote:parsed.data.reviewNote});return NextResponse.json({mode:"demo",row:{id,lastReviewedAt:new Date().toISOString(),reviewNote:parsed.data.reviewNote}});}
