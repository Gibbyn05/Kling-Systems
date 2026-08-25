"use client";

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import type { Icon } from "@phosphor-icons/react";
import {
  Bell, Brain, Briefcase, Buildings, CalendarCheck, CaretDown, ChartLineUp, CheckSquare,
  ClockCounterClockwise, Coins, Envelope, FileText, Gear, House,
  InstagramLogo, LinkSimple, List, MagnifyingGlass, Repeat, Sparkle,
  SquaresFour, UsersThree, X, YoutubeLogo,
} from "@phosphor-icons/react";

const navigation: Array<{ href: Route; label: string; icon: Icon; group?: string }> = [
  { href: "/overview", label: "Oversikt", icon: House },
  { href: "/analytics", label: "Analyse", icon: ChartLineUp },
  { href: "/tasks", label: "Oppgaver", icon: CheckSquare },
  { href: "/income", label: "Inntekt", icon: Coins },
  { href: "/crm", label: "CRM", icon: SquaresFour },
  { href: "/clients", label: "Kunder", icon: Briefcase },
  { href: "/subscriptions", label: "Abonnementer", icon: Repeat },
  { href: "/team", label: "Team", icon: UsersThree },
  { href: "/sops", label: "SOP-bibliotek", icon: FileText },
  { href: "/context", label: "Kontekst", icon: MagnifyingGlass },
  { href: "/marketing/youtube", label: "YouTube", icon: YoutubeLogo, group: "Markedsføring" },
  { href: "/marketing/instagram", label: "Instagram", icon: InstagramLogo },
  { href: "/marketing/attribution", label: "Attribusjon", icon: LinkSimple },
  { href: "/marketing/email", label: "E-post", icon: Envelope },
  { href: "/followups", label: "Oppfølging", icon: CalendarCheck, group: "Operasjon" },
  { href: "/ai-ceo", label: "AI CEO", icon: Brain },
  { href: "/settings", label: "Innstillinger", icon: Gear },
];

function Topbar({ openMenu, menuTriggerRef }: { openMenu: () => void; menuTriggerRef: RefObject<HTMLButtonElement | null> }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const allowAll = ["/analytics", "/income", "/marketing/attribution"].includes(pathname);
  const value = searchParams.get("range") ?? "30d";
  const [refreshing, setRefreshing] = useState(false);
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => { window.removeEventListener("online", goOnline); window.removeEventListener("offline", goOffline); };
  }, []);

  const changeRange = (range: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("range", range);
    router.replace(`${pathname}?${params.toString()}` as Route);
  };

  return (
    <header className="topbar">
      <button ref={menuTriggerRef} className="mobile-trigger" type="button" onClick={openMenu} aria-label="Åpne navigasjon"><List size={22} /></button>
      <button className="workspace-select" type="button"><Buildings size={16} aria-hidden="true" />Kling Systems<CaretDown size={12} aria-hidden="true" /></button>
      <div className="topbar-scroll">
        <div className="range-control" role="group" aria-label="Datointervall">
          {[{ key: "today", label: "I dag" }, { key: "7d", label: "7 dager" }, { key: "30d", label: "30 dager" }, ...(allowAll ? [{ key: "all", label: "All tid" }] : [])].map((option) => (
            <button key={option.key} className="range-button" type="button" aria-pressed={value === option.key} onClick={() => changeRange(option.key)}>{option.label}</button>
          ))}
        </div>
        <span className="demo-badge"><Sparkle size={12} weight="fill" /> Demo</span>
        {!online ? <span className="offline-badge">Frakoblet data</span> : null}
      </div>
      <div className="topbar-end">
        <button className="icon-action" type="button" aria-label="Oppdater visning" onClick={() => { setRefreshing(true); router.refresh(); window.setTimeout(() => setRefreshing(false), 500); }}><ClockCounterClockwise className={refreshing ? "animate-spin" : ""} size={17} /></button>
        <div className="sync-meta"><span>Sist generert</span><strong>25.08.2026 kl. 12:00</strong></div>
        <span className="health-pill"><span className="status-dot" /> 4 demo · 5 frakoblet</span>
        <Link className="icon-action alert-button" href="/tasks" aria-label="3 uløste varsler"><Bell size={17} /><span className="alert-count">3</span></Link>
        <button className="avatar" type="button" aria-label="Brukermeny">FS</button>
      </div>
    </header>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const menuCloseRef = useRef<HTMLButtonElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const menuTrigger = menuTriggerRef.current;
    menuCloseRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab") return;

      const focusableElements = Array.from(menuRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])",
      ) ?? []);
      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      menuTrigger?.focus();
    };
  }, [menuOpen]);

  return (
    <div className="app-frame">
      <a className="skip-link" href="#main-content">Hopp til innhold</a>
      <aside ref={menuRef} className="sidebar" data-open={menuOpen} aria-label="Navigasjonsskuff">
        <div className="brand">
          <Image src="/OS/brand/kling-logo.png" width={32} height={32} alt="Kling Systems" priority />
          <div><strong>Intelligence OS</strong><span>Kling Systems</span></div>
          {menuOpen ? <button ref={menuCloseRef} className="drawer-close" style={{ marginLeft: "auto" }} type="button" onClick={() => setMenuOpen(false)} aria-label="Lukk navigasjon"><X /></button> : null}
        </div>
        <nav className="nav" aria-label="Hovednavigasjon">
          {navigation.map((item) => {
            const active = pathname === item.href;
            const IconComponent = item.icon;
            return (
              <div key={item.href}>
                {item.group ? <div className="nav-group">{item.group}</div> : null}
                <Link className="nav-link" href={item.href} data-active={active} aria-current={active ? "page" : undefined} onClick={() => setMenuOpen(false)}>
                  <IconComponent size={18} weight={active ? "fill" : "regular"} aria-hidden="true" /><span>{item.label}</span>
                </Link>
              </div>
            );
          })}
        </nav>
        <div className="sidebar-foot"><strong><span className="status-dot" /> Demo-integrasjoner</strong><p>Ingen eksterne meldinger, betalinger eller synkroniseringer utføres.</p></div>
      </aside>
      <div className="workspace">
        <Suspense fallback={<div className="topbar" />}><Topbar openMenu={() => setMenuOpen(true)} menuTriggerRef={menuTriggerRef} /></Suspense>
        <main id="main-content">{children}</main>
      </div>
    </div>
  );
}
