import { Suspense } from "react";
import { OverviewPage } from "@/components/operating-pages";
export default function Page(){return <Suspense fallback={<div className="page"><div className="kpi animate-pulse"/></div>}><OverviewPage/></Suspense>;}
