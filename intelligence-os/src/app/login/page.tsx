import { LoginForm } from "@/components/login-form";
import Image from "next/image";

export default function LoginPage(){return <main className="dialog-backdrop"><section className="modal" aria-labelledby="login-title"><div className="brand" style={{background:"var(--navy)",borderRadius:10,padding:14}}><Image src="/OS/brand/kling-logo.png" width={32} height={32} alt=""/><div><strong>Kling Intelligence OS</strong><span>Sikker innlogging</span></div></div><h1 id="login-title" style={{marginTop:24}}>Logg inn</h1><p className="analysis-copy">Bruk Supabase Auth-kontoen som er medlem av Kling Systems-organisasjonen.</p><LoginForm/></section></main>;}
