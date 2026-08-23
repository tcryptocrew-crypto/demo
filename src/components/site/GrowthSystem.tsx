import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { GROWTH_STAGES } from "@/lib/site-data";
import { Reveal, SectionLabel } from "./primitives";
import { cn } from "@/lib/utils";

export function GrowthSystem() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.min(GROWTH_STAGES.length - 1, Math.floor(v * GROWTH_STAGES.length));
      setActive(idx < 0 ? 0 : idx);
    });
  }, [scrollYProgress]);

  return (
    <section id="system" className="border-t border-border px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-[1080px] text-center">
        <SectionLabel>The framework</SectionLabel>
        <Reveal delay={0.05}>
          <h2 className="display mt-8 text-[clamp(2.4rem,7vw,5rem)] text-ink">The Growth System</h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-[48ch] text-base text-muted-foreground sm:text-lg">
            Five stages that take a brand from how it is perceived to how it grows — in order, and
            without skipping the part that makes the rest work.
          </p>
        </Reveal>
      </div>

      <div ref={ref} className="relative mx-auto mt-20 max-w-[1080px]" style={{ height: "320vh" }}>
        <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden">
          {/* Horizontal progress bar at the top — no vertical line */}
          <div className="absolute inset-x-0 top-24 mx-auto h-px max-w-[1080px] bg-border">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-px origin-left bg-cobalt"
            />
          </div>

          <div className="mx-auto grid w-full max-w-[1080px] gap-10 px-1 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Step list */}
            <div className="flex flex-col justify-center gap-2">
              {GROWTH_STAGES.map((stage, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={stage.num}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className={cn(
                      "group flex items-center gap-4 rounded-[16px] px-4 py-4 text-left transition-all duration-500",
                      isActive ? "bg-soft" : "hover:bg-soft/50",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-[0.62rem] font-semibold tracking-[0.16em] transition-all duration-500",
                        isActive
                          ? "border-cobalt bg-cobalt text-primary-foreground"
                          : "border-border bg-background text-silver",
                      )}
                    >
                      {stage.num}
                    </span>
                    <span
                      className={cn(
                        "display text-2xl transition-all duration-500 sm:text-3xl",
                        isActive ? "text-ink" : "text-ink/30",
                      )}
                    >
                      {stage.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active step detail */}
            <div className="relative flex min-h-[320px] items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="surface-card w-full px-10 py-14 text-center sm:px-16 sm:py-20"
                >
                  <span className="display block text-[clamp(4rem,12vw,8rem)] leading-none text-cobalt/15">
                    {GROWTH_STAGES[active]!.num}
                  </span>
                  <h3 className="display mt-2 text-[clamp(2.5rem,6vw,4.5rem)] text-ink">
                    {GROWTH_STAGES[active]!.title}
                  </h3>
                  <p className="mx-auto mt-6 max-w-[44ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {GROWTH_STAGES[active]!.copy}
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-2">
                    {GROWTH_STAGES.map((_, i) => (
                      <span
                        key={i}
                        className={cn(
                          "h-1.5 rounded-full transition-all duration-500",
                          i === active ? "w-8 bg-cobalt" : "w-1.5 bg-border",
                        )}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
