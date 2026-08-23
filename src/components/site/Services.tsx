import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SERVICES } from "@/lib/site-data";
import { MagneticButton, Reveal } from "./primitives";
import { cn } from "@/lib/utils";

export function Services() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active]!;

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-ink px-6 py-28 text-background sm:py-40"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-background/25" />
            <span className="eyebrow text-background/50">Capabilities</span>
            <span className="h-px w-8 bg-background/25" />
          </div>
          <Reveal delay={0.05}>
            <h2 className="display mt-8 text-[clamp(2.4rem,7vw,5rem)]">What I work on</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-[46ch] text-sm text-background/60 sm:text-base">
              Demo service categories for this prototype — the architecture stays editable as the
              real offer is confirmed.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Visual */}
          <div className="relative aspect-[7/5] overflow-hidden rounded-[24px] border border-background/10">
            <AnimatePresence mode="sync">
              <motion.img
                key={current.image}
                src={current.image}
                alt={current.alt}
                width={1400}
                height={1000}
                loading="lazy"
                initial={{ opacity: 0, scale: 1.08, filter: "blur(12px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <AnimatePresence mode="wait">
              <motion.span
                key={current.num}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5 }}
                className="display absolute bottom-5 left-6 text-6xl text-background/85"
              >
                {current.num}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* List */}
          <div className="text-center lg:text-left">
            <div className="flex flex-col divide-y divide-background/10 border-y border-background/10">
              {SERVICES.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group flex flex-col items-center gap-1 py-5 text-center transition-colors lg:flex-row lg:items-baseline lg:justify-between lg:gap-6 lg:text-left"
                >
                  <span
                    className={cn(
                      "display text-3xl transition-all duration-500 sm:text-4xl",
                      i === active ? "text-background" : "text-background/35",
                    )}
                  >
                    {s.title}
                  </span>
                  <span
                    className={cn(
                      "text-[0.65rem] font-semibold uppercase tracking-[0.22em] transition-colors",
                      i === active ? "text-cobalt-soft" : "text-background/25",
                    )}
                  >
                    {s.num}
                  </span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={current.description}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45 }}
                className="mx-auto mt-8 max-w-[44ch] text-base leading-relaxed text-background/70 lg:mx-0"
              >
                {current.description}
              </motion.p>
            </AnimatePresence>

            <div className="mt-8 flex justify-center lg:justify-start">
              <MagneticButton href="#audit" variant="inverse">
                Explore service
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
