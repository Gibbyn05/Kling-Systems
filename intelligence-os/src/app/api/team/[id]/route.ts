import { NextResponse } from "next/server";
export async function PATCH(request:Request,context:{params:Promise<{id:string}>}){const {id}=await context.params;return NextResponse.json({mode:"demo",row:{id,...(await request.json() as Record<string,unknown>)},audit:{action:"team.updated"}});}
