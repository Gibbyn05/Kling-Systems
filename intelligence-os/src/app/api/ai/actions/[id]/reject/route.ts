import { NextResponse } from "next/server";
export async function POST(request:Request,context:{params:Promise<{id:string}>}){const {id}=await context.params;const input=await request.json() as {reason?:string};return NextResponse.json({mode:"demo",actionId:id,status:"rejected",reason:input.reason??"Avvist av bruker",audit:{action:"ai_action.rejected"}});}
