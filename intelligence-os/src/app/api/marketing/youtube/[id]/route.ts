import { NextResponse } from "next/server";
import { getYouTubeAnalysis } from "@/server/analytics/demo-analytics";
export async function GET(_request:Request,context:{params:Promise<{id:string}>}){const {id}=await context.params;const row=getYouTubeAnalysis().videos.find((item)=>item.id===id);return row?NextResponse.json({mode:"demo",row,analysis:{sampleSufficient:true,evidence:[id]}}):NextResponse.json({error:{code:"NOT_FOUND",message:"Videoen finnes ikke."}},{status:404});}
