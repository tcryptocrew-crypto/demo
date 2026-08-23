import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CASE_STUDIES, type CaseStudy } from "@/lib/site-data";
import { MagneticButton, Reveal, SectionLabel } from "./primitives";

export function CaseStudies() {
  const [open, setOpen] = useState<CaseStudy | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="work" className="border-t border-border px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-[1180px]">
        <div className="text-center">
          <SectionLabel>Selected demo work</SectionLabel>
          <Reveal delay={0.05}>
            <h2 className="display mt-8 text-[clamp(2.6rem,8vw,5.5rem)] text-ink">
              Work that moves.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-[52ch] text-sm text-muted-foreground sm:text-base">
              Sample case-study concepts created for this prototype. No client names, figures or
              performance claims are shown — the structure is here, the real stories go in later.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {CASE_STUDIES.map((c, i) => (
            <motion.button
              key={c.id}
              type="button"
              onClick={() => setOpen(c)}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lift group w-[82vw] shrink-0 snap-center overflow-hidden rounded-[22px] border border-border bg-card text-center shadow-[var(--shadow-soft)] hover:-translate-y-1.5 hover:border-cobalt/30 hover:shadow-[var(--shadow-lift)] md:w-auto"
            >
              <div className="relative aspect-[7/5] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.alt}
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Demo
                </span>
              </div>
              <div className="px-6 py-7">
                <p className="eyebrow">{c.category}</p>
                <h3 className="display mt-3 text-2xl text-ink">{c.title}</h3>
                <p className="mx-auto mt-3 max-w-[34ch] text-sm leading-relaxed text-muted-foreground">
                  {c.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cobalt">
                  Open case study
                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && <CaseModal study={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  );
}

function CaseModal({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  const chapters = [
    { num: "01", title: "The problem", copy: study.problem },
    { num: "02", title: "The strategy", copy: study.strategy },
    { num: "03", title: "The execution", copy: study.execution },
    { num: "04", title: "The lesson", copy: study.lesson },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[90] overflow-y-auto bg-background"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      role="dialog"
      aria-modal="true"
      aria-label={`${study.category} — ${study.title}`}
    >
      <button
        type="button"
        onClick={onClose}
        className="fixed right-5 top-5 z-10 h-11 w-11 rounded-[14px] border border-border bg-background/90 text-lg text-ink backdrop-blur"
        aria-label="Close case study"
      >
        ✕
      </button>

      <div className="mx-auto max-w-[820px] px-6 py-24 text-center">
        <p className="eyebrow">{study.category} · Sample case study</p>
        <h2 className="display mt-6 text-[clamp(2.2rem,6vw,4rem)] text-ink">{study.title}</h2>
        <p className="mx-auto mt-6 max-w-[52ch] text-base leading-relaxed text-muted-foreground">
          {study.summary}
        </p>

        <img
          src={study.image}
          alt={study.alt}
          width={1400}
          height={1000}
          loading="lazy"
          className="mt-12 w-full rounded-[22px] border border-border object-cover"
        />

        <div className="mt-16 flex flex-col gap-14">
          {chapters.map((ch) => (
            <div key={ch.num}>
              <span className="text-[0.7rem] font-semibold tracking-[0.24em] text-cobalt">
                {ch.num}
              </span>
              <h3 className="display mt-2 text-3xl text-ink">{ch.title}</h3>
              <p className="mx-auto mt-4 max-w-[54ch] text-base leading-relaxed text-muted-foreground">
                {ch.copy}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-3">
          <MagneticButton href="#audit" onClick={onClose}>
            Start your own project
          </MagneticButton>
          <MagneticButton variant="ghost" onClick={onClose}>
            Back to work
          </MagneticButton>
        </div>
      </div>
    </motion.div>
  );
}
