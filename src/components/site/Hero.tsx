import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { FACTS, images } from "@/lib/site-data";
import { MagneticButton } from "./primitives";

const PROOF = [
  { value: FACTS.followers, label: "Followers" },
  { value: FACTS.completions, label: "Client Completions" },
  { value: "Verified", label: "Personal Brand" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const headUp = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const headFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const px = useSpring(pointer.x, { stiffness: 60, damping: 20 });
  const py = useSpring(pointer.y, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      setPointer({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);

  useEffect(() => {
    px.set(pointer.x);
    py.set(pointer.y);
  }, [pointer, px, py]);

  const portraitX = useTransform(px, (v) => v * 14);
  const portraitY = useTransform(py, (v) => v * 10);
  const ghostX = useTransform(px, (v) => v * -30);
  const glowX = useTransform(px, (v) => `${50 + v * 18}%`);
  const glowY = useTransform(py, (v) => `${45 + v * 14}%`);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-32"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background: `radial-gradient(48rem 32rem at var(--gx) var(--gy), color-mix(in oklab, var(--cobalt) 12%, transparent), transparent 70%)`,
          ["--gx" as string]: glowX,
          ["--gy" as string]: glowY,
        }}
      />
      <div aria-hidden className="grain pointer-events-none absolute inset-0 -z-30 opacity-40" />

      <motion.span
        aria-hidden
        style={{ x: ghostX }}
        className="display pointer-events-none absolute inset-x-0 top-[22%] -z-10 select-none text-center text-[24vw] leading-none text-soft"
      >
        SCALE
      </motion.span>

      <motion.div style={{ y: headUp, opacity: headFade }} className="w-full max-w-[1080px]">
        <motion.p
          className="eyebrow text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 2.0, duration: 0.7 }}
        >
          Marketing Expert · Entrepreneur
        </motion.p>

        <h1 className="display mt-7 text-center text-[clamp(2.6rem,9vw,7.5rem)] text-ink">
          {["I don't just", "market brands."].map((line, i) => (
            <motion.span
              key={line}
              className="block"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: reduce ? 0 : 2.05 + i * 0.12,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {line}
            </motion.span>
          ))}
          <motion.span
            className="mt-2 block"
            initial={{ opacity: 0, y: 46, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: reduce ? 0 : 2.32, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            I{" "}
            <em className="not-italic text-cobalt [font-size:1.18em] [letter-spacing:-0.03em]">
              SCALE
            </em>{" "}
            them.
          </motion.span>
        </h1>

        <motion.p
          className="mx-auto mt-8 max-w-[46ch] text-center text-base leading-relaxed text-muted-foreground sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduce ? 0 : 2.55, duration: 0.9 }}
        >
          Helping brands turn attention into growth through smarter marketing, positioning and
          acquisition.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 2.68, duration: 0.8 }}
        >
          <MagneticButton href="#audit">Get your free audit</MagneticButton>
          <MagneticButton href="#system" variant="ghost">
            See how I work
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Portrait + proof rail */}
      <div className="relative mt-16 w-full max-w-[1080px]">
        <motion.div
          style={{ x: portraitX, y: portraitY }}
          className="mx-auto w-[min(340px,78vw)]"
          initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
          transition={{ delay: reduce ? 0 : 2.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            src={images.heroPortrait}
            width={1024}
            height={1408}
            style={{ scale: imgScale }}
            alt="Hancel Villatoro, marketing expert and entrepreneur, in a tailored charcoal blazer"
            className="w-full rounded-[24px] border border-border object-cover shadow-[var(--shadow-lift)]"
          />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[20px] border border-border bg-border sm:grid-cols-3">
          {PROOF.map((p, i) => (
            <motion.div
              key={p.label}
              className="bg-background px-6 py-7 text-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="display text-4xl text-ink">{p.value}</div>
              <div className="eyebrow mt-2">{p.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
