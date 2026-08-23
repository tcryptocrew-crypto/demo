import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { MagneticButton } from "./primitives";

const WORDS = ["Attention", "Interest", "Trust", "Action", "Growth"];

function ScaleWord({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;

  const opacity = useTransform(progress, [start, start + 0.03, end - 0.03, end], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, end], [0.55, 1.35]);
  const blur = useTransform(progress, [start, mid, end], ["blur(12px)", "blur(0px)", "blur(12px)"]);

  return (
    <motion.span
      style={{ opacity, scale, filter: blur }}
      className="display absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-[clamp(3rem,13vw,10rem)] text-ink"
    >
      {word}
    </motion.span>
  );
}

export function ScaleEffect() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const finalOpacity = useTransform(scrollYProgress, [0.86, 0.95], [0, 1]);
  const stackOpacity = useTransform(scrollYProgress, [0.84, 0.92], [1, 0]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative h-[420svh] bg-soft">
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden px-6">
        <motion.div
          style={{ scaleX: lineScale }}
          className="absolute left-0 top-0 h-[2px] w-full origin-left bg-cobalt"
        />

        <p className="eyebrow absolute left-1/2 top-16 -translate-x-1/2 text-center">
          The Scale Effect
        </p>

        <motion.div style={{ opacity: stackOpacity }} className="relative w-full text-center">
          {WORDS.map((word, i) => (
            <ScaleWord
              key={word}
              word={word}
              index={i}
              total={WORDS.length}
              progress={scrollYProgress}
            />
          ))}
        </motion.div>

        <motion.div
          style={{ opacity: finalOpacity }}
          className="absolute inset-x-6 top-1/2 -translate-y-1/2 text-center"
        >
          <p className="display text-[clamp(2rem,6vw,4.5rem)] text-ink">
            Let&apos;s scale your brand.
          </p>
          <div className="mt-8 flex justify-center">
            <MagneticButton href="#audit">Get your free audit</MagneticButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
