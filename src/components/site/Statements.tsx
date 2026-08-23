import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FACTS, images } from "@/lib/site-data";
import { Reveal, SectionLabel } from "./primitives";

/* ------- "Attention isn't the goal. Growth is." ------- */
export function SignatureUsp() {
  return (
    <section className="relative border-t border-border px-6 py-32 sm:py-44">
      <div className="mx-auto max-w-[900px] text-center">
        <SectionLabel>The premise</SectionLabel>
        <Reveal delay={0.05}>
          <h2 className="display mt-10 text-[clamp(2.4rem,7.5vw,5.5rem)] text-ink">
            Attention isn&apos;t the goal.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="display mt-2 text-[clamp(2.4rem,7.5vw,5.5rem)] text-cobalt">Growth is.</p>
        </Reveal>
        <Reveal delay={0.28}>
          <p className="mx-auto mt-10 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
            Marketing that looks good is easy. Marketing that moves the business forward is
            different.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------- 450+ proof moment ------- */
const CHAIN = ["Strategy", "Positioning", "Content", "Acquisition", "Growth"];

export function ProofMoment() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "center center"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="results"
      ref={ref}
      className="relative overflow-hidden bg-soft px-6 py-32 sm:py-44"
    >
      <div className="mx-auto max-w-[1080px] text-center">
        <SectionLabel>Experience</SectionLabel>
        <Reveal delay={0.05}>
          <div className="display mt-10 text-[clamp(5rem,22vw,16rem)] leading-[0.8] text-ink">
            {FACTS.completions}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="eyebrow mt-6">Client completions</p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="display mt-10 text-[clamp(1.6rem,4vw,2.75rem)] text-ink">
            Experience compounds.
          </p>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-[9px] h-px bg-silver/60 sm:top-1/2" />
          <motion.div
            style={{ scaleX: lineScale }}
            className="absolute left-0 right-0 top-[9px] h-px origin-left bg-cobalt sm:top-1/2"
          />
          <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-5 sm:gap-2">
            {CHAIN.map((step, i) => (
              <motion.div
                key={step}
                className="flex items-center gap-4 sm:flex-col sm:gap-3"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="h-[18px] w-[18px] shrink-0 rounded-full border border-cobalt bg-background" />
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink">
                  {step}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------- Philosophy break ------- */
export function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-32 sm:py-48">
      <motion.img
        src={images.authority}
        alt="Bright minimalist architecture with a single cobalt blue light accent"
        width={1600}
        height={1000}
        loading="lazy"
        style={{ y }}
        className="pointer-events-none absolute inset-0 -z-10 h-[120%] w-full object-cover opacity-[0.14]"
      />
      <div className="mx-auto max-w-[900px] text-center">
        <Reveal>
          <h2 className="display text-[clamp(2.6rem,9vw,6.5rem)] text-ink">
            More noise
            <br />
            isn&apos;t the answer.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="display mt-6 text-[clamp(1.6rem,4.5vw,3rem)] text-cobalt">
            Better positioning is.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
