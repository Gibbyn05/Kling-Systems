import { NextResponse } from "next/server";
import { demoSops } from "@/server/repositories/demo-data";
export async function GET(_request:Request,context:{params:Promise<{id:string}>}){const {id}=await context.params;const row=demoSops.find((item)=>item.id===id);return row?NextResponse.json({mode:"demo",row}):NextResponse.json({error:{code:"NOT_FOUND",message:"SOP-en finnes ikke."}},{status:404});}
export async function PATCH(request:Request,context:{params:Promise<{id:string}>}){const {id}=await context.params;return NextResponse.json({mode:"demo",row:{id,...(await request.json() as Record<string,unknown>)},audit:{action:"sop.versioned"}});}
