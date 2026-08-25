import { NextResponse } from "next/server";
import { demoEmailCampaigns } from "@/server/repositories/demo-data";
export async function GET(_request:Request,context:{params:Promise<{id:string}>}){const {id}=await context.params;const row=demoEmailCampaigns.find((item)=>item.id===id);return row?NextResponse.json({mode:"demo",row,browserPreview:`<article><h1>${row.subject}</h1><p>${row.body}</p></article>`}):NextResponse.json({error:{code:"NOT_FOUND",message:"E-posten finnes ikke."}},{status:404});}
