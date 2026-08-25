"use client";

import { useEffect, useRef, type ReactNode, type RefObject } from "react";
import { ArrowUpRight, CheckCircle, X } from "@phosphor-icons/react";
import type { MetricComparison, QualityLabel } from "@/lib/contracts";

export function PageHeading({ title, description, actions }: { title: string; description: string; actions?: ReactNode }) {
  return <div className="page-heading"><div><h1>{title}</h1><p>{description}</p></div>{actions ? <div className="page-actions">{actions}</div> : null}</div>;
}

export function KpiCard({ title, value, metric, freshness = "Oppdatert kl. 12:00", onOpen }: { title: string; value: string; metric?: MetricComparison; freshness?: string; onOpen?: () => void }) {
  const content = <><span className="kpi-label">{title}<ArrowUpRight size={15} /></span><strong className="kpi-value">{value}</strong><span className="kpi-meta"><span className={metric?.percentageChange == null ? "delta delta--neutral" : "delta"}>{metric?.percentageChange == null ? "—" : `${metric.percentageChange > 0 ? "+" : ""}${(metric.percentageChange * 100).toFixed(1)} %`}</span>{freshness}</span></>;
  return onOpen ? <button className="kpi" type="button" onClick={onOpen}>{content}</button> : <div className="kpi">{content}</div>;
}

export function QualityBadge({ value }: { value: QualityLabel | string }) { return <span className={`quality quality--${value}`}>{value === "high" ? "Høy" : value === "medium" ? "Middels" : value === "low" ? "Lav" : "Ikke vurdert"}</span>; }

function useDialogFocus(open: boolean, containerRef: RefObject<HTMLElement | null>, initialRef: RefObject<HTMLElement | null>, onClose: () => void) {
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    initialRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;
      const focusableElements = Array.from(containerRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])",
      ) ?? []).filter((element) => !element.hidden && element.getAttribute("aria-hidden") !== "true");
      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      if (previousFocusRef.current?.isConnected) previousFocusRef.current.focus();
    };
  }, [containerRef, initialRef, onClose, open]);
}

export function Drawer({ open, title, subtitle, onClose, children }: { open: boolean; title: string; subtitle?: string; onClose: () => void; children: ReactNode }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  useDialogFocus(open, drawerRef, closeRef, onClose);
  if (!open) return null;
  return <div className="drawer-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><section ref={drawerRef} className="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title"><div className="drawer-header"><div><h2 id="drawer-title">{title}</h2>{subtitle ? <p>{subtitle}</p> : null}</div><button ref={closeRef} className="drawer-close" type="button" onClick={onClose} aria-label="Lukk"><X /></button></div>{children}</section></div>;
}

export function ConfirmModal({ open, title, description, confirmLabel, onConfirm, onClose, children }: { open: boolean; title: string; description: string; confirmLabel: string; onConfirm: () => void; onClose: () => void; children?: ReactNode }) {
  const cancelRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLElement>(null);
  useDialogFocus(open, modalRef, cancelRef, onClose);
  if (!open) return null;
  return <div className="dialog-backdrop"><section ref={modalRef} className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description"><div className="drawer-header"><div><h2 id="modal-title">{title}</h2><p id="modal-description">{description}</p></div><button className="drawer-close" type="button" onClick={onClose} aria-label="Lukk"><X /></button></div>{children}<div className="page-actions" style={{ justifyContent: "flex-end", marginTop: 20 }}><button ref={cancelRef} className="button" type="button" onClick={onClose}>Avbryt</button><button className="button button--primary" type="button" onClick={onConfirm}>{confirmLabel}</button></div></section></div>;
}

export function Toast({ message }: { message: string | null }) { return message ? <div className="toast" role="status"><CheckCircle size={17} weight="fill" />{message}</div> : null; }
