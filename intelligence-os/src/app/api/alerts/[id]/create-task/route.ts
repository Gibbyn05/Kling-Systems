import { NextResponse } from "next/server";
import { createTask } from "@/server/repositories/demo-store";
export async function POST(request:Request,context:{params:Promise<{id:string}>}){const {id}=await context.params;const input=await request.json() as {title?:string};const row=createTask({title:input.title??`Følg opp varsel ${id}`,description:"Opprettet fra uløst varsel.",status:"open",priority:"high",dueAt:null,sourceType:"alert",assignee:"Fredrik",related:id});return NextResponse.json({mode:"demo",row},{status:201});}
