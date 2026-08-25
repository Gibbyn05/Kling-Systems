import { NextResponse } from "next/server";
import { z } from "zod";
const schema=z.object({status:z.enum(["acknowledged","snoozed","resolved"]),reason:z.string().min(2),snoozedUntil:z.iso.datetime({offset:true}).optional()});
export async function PATCH(request:Request,context:{params:Promise<{id:string}>}){const {id}=await context.params;const parsed=schema.safeParse(await request.json());return parsed.success?NextResponse.json({mode:"demo",row:{id,...parsed.data},audit:{action:"alert.updated"}}):NextResponse.json({error:{code:"INVALID_REQUEST",message:"Varseloppdateringen er ugyldig."}},{status:400});}
