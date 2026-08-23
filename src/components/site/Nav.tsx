import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { NAV_LINKS } from "@/lib/site-data";
import { MagneticButton } from "./primitives";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-cobalt"
        style={{ scaleX: progress }}
      />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[60] transition-all duration-500",
          scrolled ? "py-2" : "py-4",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1240px] items-center justify-between gap-6 rounded-[16px] px-5 transition-all duration-500 sm:px-6",
            scrolled
              ? "mx-3 h-14 border border-border bg-background/80 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:mx-auto"
              : "h-16 border border-transparent",
          )}
        >
          <a
            href="#top"
            className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-ink"
          >
            Hancel Villatoro
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <MagneticButton href="#audit" className="px-5 py-2.5 text-[0.68rem]">
              Free Marketing Audit
            </MagneticButton>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-[12px] border border-border lg:hidden"
          >
            <span
              className={cn(
                "h-px w-4 bg-ink transition-transform duration-300",
                open && "translate-y-[3px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-4 bg-ink transition-transform duration-300",
                open && "-translate-y-[3px] -rotate-45",
              )}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[65] flex flex-col justify-center bg-background px-8 lg:hidden"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex flex-col items-center gap-6" aria-label="Mobile">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="display text-4xl text-ink"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.15, duration: 0.6 }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-12 flex justify-center">
              <MagneticButton href="#audit" onClick={() => setOpen(false)}>
                Free Marketing Audit
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[55] flex gap-2 border-t border-border bg-background/90 p-3 backdrop-blur-xl lg:hidden">
      <a
        href="#audit"
        className="flex-1 rounded-[13px] bg-cobalt px-4 py-3 text-center text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground"
      >
        Free Audit
      </a>
      <a
        href="#contact"
        className="flex-1 rounded-[13px] border border-border px-4 py-3 text-center text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink"
      >
        Contact
      </a>
    </div>
  );
}
