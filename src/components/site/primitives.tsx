import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

/* ---------------- Reveal ---------------- */

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li" | "p";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className ?? ""}
      variants={revealVariants}
      initial={reduce ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: reduce ? 0 : 0.9,
        delay: reduce ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}

/* ---------------- Buttons ---------------- */

type BtnProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "inverse";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-[14px] px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] transition-all duration-500 will-change-transform disabled:opacity-40";

const variants = {
  primary:
    "bg-cobalt text-primary-foreground hover:-translate-y-0.5 hover:shadow-[var(--shadow-cobalt)]",
  ghost:
    "border border-border bg-background text-ink hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-[var(--shadow-soft)]",
  inverse:
    "border border-background/25 bg-transparent text-background hover:-translate-y-0.5 hover:border-background/60",
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  disabled,
}: BtnProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (rect.left + rect.width / 2)) * 0.18,
      y: (e.clientY - (rect.top + rect.height / 2)) * 0.3,
    });
  };

  const style = { transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` };
  const inner = (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className="translate-x-0 transition-transform duration-500 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  const shared = {
    className: cn(base, variants[variant], className),
    style,
    onMouseMove: handleMove,
    onMouseLeave: () => setOffset({ x: 0, y: 0 }),
  };

  if (href) {
    return (
      <a
        {...shared}
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      {...shared}
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {inner}
    </button>
  );
}

/* ---------------- Section heading ---------------- */

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <Reveal className="flex items-center justify-center gap-3">
      <span className="h-px w-8 bg-silver" />
      <span className="eyebrow">{children}</span>
      <span className="h-px w-8 bg-silver" />
    </Reveal>
  );
}
