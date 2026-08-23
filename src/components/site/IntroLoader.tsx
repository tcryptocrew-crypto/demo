import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export function IntroLoader() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce) {
      setDone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setDone(true), 1900);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            className="display px-6 text-center text-[clamp(2rem,7vw,4.5rem)] text-ink"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Hancel Villatoro
          </motion.h1>

          <motion.p
            className="eyebrow mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            Marketing · Growth · Brand Scale
          </motion.p>

          <motion.div
            className="mt-10 h-px w-[min(70vw,640px)] origin-left bg-cobalt"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.p
            className="mt-5 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.6 }}
          >
            Scaling attention into growth.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
