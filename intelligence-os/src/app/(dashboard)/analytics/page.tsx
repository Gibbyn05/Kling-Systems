import { Suspense } from "react";
import { AnalyticsPage } from "@/components/operating-pages";
export default function Page(){return <Suspense fallback={<div className="page">Laster analyse…</div>}><AnalyticsPage/></Suspense>;}
