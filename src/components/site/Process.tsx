import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { PROCESS, TESTIMONIALS } from "@/lib/site-data";
import { Reveal, SectionLabel } from "./primitives";
import { cn } from "@/lib/utils";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.min(PROCESS.length - 1, Math.floor(v * PROCESS.length));
      setActive(idx < 0 ? 0 : idx);
    });
  }, [scrollYProgress]);

  return (
    <section id="process" className="border-t border-border px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-[900px] text-center">
        <SectionLabel>Process</SectionLabel>
        <Reveal delay={0.05}>
          <h2 className="display mt-8 text-[clamp(2.4rem,7vw,5rem)] text-ink">How it runs</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-[46ch] text-sm text-muted-foreground sm:text-base">
            Five steps, in sequence. Nothing gets scaled before it is understood.
          </p>
        </Reveal>
      </div>

      <div ref={ref} className="relative mx-auto mt-20 max-w-[1080px]" style={{ height: "320vh" }}>
        <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden">
          <div className="mx-auto grid w-full max-w-[1080px] gap-10 px-1 lg:grid-cols-[1fr_1fr] lg:gap-16">
            {/* Step list — expanding accordion style */}
            <div className="flex flex-col justify-center">
              {PROCESS.map((p, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={p.num}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className={cn(
                      "group border-b border-border py-6 text-left transition-all duration-500",
                      isActive ? "pl-4" : "pl-0 opacity-40 hover:opacity-70",
                    )}
                  >
                    <div className="flex items-baseline gap-4">
                      <span
                        className={cn(
                          "text-[0.7rem] font-semibold tracking-[0.24em] transition-colors duration-500",
                          isActive ? "text-cobalt" : "text-silver",
                        )}
                      >
                        {p.num}
                      </span>
                      <span
                        className={cn(
                          "display transition-all duration-500",
                          isActive ? "text-4xl text-ink sm:text-5xl" : "text-2xl text-ink/50 sm:text-3xl",
                        )}
                      >
                        {p.title}
                      </span>
                    </div>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden text-sm leading-relaxed text-muted-foreground sm:text-base"
                        >
                          <span className="mt-3 block max-w-[40ch] pl-10">{p.copy}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>

            {/* Active step large display */}
            <div className="relative hidden items-center lg:flex">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.04, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center"
                >
                  <span className="display block text-[clamp(7rem,18vw,14rem)] leading-[0.8] text-soft">
                    {PROCESS[active]!.num}
                  </span>
                  <h3 className="display mt-4 text-[clamp(2.5rem,5vw,4rem)] text-ink">
                    {PROCESS[active]!.title}
                  </h3>
                  <p className="mx-auto mt-5 max-w-[36ch] text-base leading-relaxed text-muted-foreground">
                    {PROCESS[active]!.copy}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-soft px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-[1180px] text-center">
        <SectionLabel>Sample testimonials</SectionLabel>
        <Reveal delay={0.05}>
          <h2 className="display mt-8 text-[clamp(2.2rem,6.5vw,4.5rem)] text-ink">
            What working together sounds like.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-[50ch] text-sm text-muted-foreground sm:text-base">
            Placeholder quotes written for this prototype. Real client, business and outcome details
            replace them once they are supplied.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={t.quote}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="surface-card flex flex-col items-center gap-6 px-7 py-10"
            >
              <span className="display text-4xl text-silver">”</span>
              <p className="text-base leading-relaxed text-ink">{t.quote}</p>
              <footer className="mt-auto">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink">
                  {t.client}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{t.business}</p>
                <p className="mt-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-cobalt">
                  {t.outcome} · Demo
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
