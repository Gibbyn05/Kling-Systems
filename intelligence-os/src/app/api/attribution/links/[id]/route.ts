import { NextResponse } from "next/server";
import { z } from "zod";
const schema=z.object({active:z.boolean().optional(),name:z.string().min(2).max(200).optional(),destinationUrl:z.url().optional()});
export async function PATCH(request:Request,context:{params:Promise<{id:string}>}){const {id}=await context.params;const parsed=schema.safeParse(await request.json());return parsed.success?NextResponse.json({mode:"demo",row:{id,...parsed.data},audit:{action:"tracking_link.updated"}}):NextResponse.json({error:{code:"INVALID_REQUEST",message:"Sporingslenken er ugyldig."}},{status:400});}
