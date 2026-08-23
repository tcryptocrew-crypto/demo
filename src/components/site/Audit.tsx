import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AUDIT_AREAS, FACTS, images } from "@/lib/site-data";
import { MagneticButton, Reveal, SectionLabel } from "./primitives";
import { cn } from "@/lib/utils";

const PROFILES = ["Founder", "Personal Brand", "E-commerce", "Service Business", "Agency", "Other"];
const GOALS = ["Brand", "Content", "Leads", "Sales", "Growth", "Not Sure"];

export function Audit() {
  const [area, setArea] = useState<string | null>(null);

  return (
    <section
      id="audit"
      className="relative overflow-hidden border-t border-border px-6 py-28 sm:py-40"
    >
      <img
        src={images.authority}
        alt="Minimal bright architecture used as a background texture for the audit section"
        width={1600}
        height={1000}
        loading="lazy"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.08]"
      />

      <div className="mx-auto max-w-[1080px] text-center">
        <SectionLabel>Free marketing audit</SectionLabel>
        <Reveal delay={0.05}>
          <h2 className="display mt-8 text-[clamp(2.2rem,7vw,5.25rem)] text-ink">
            Let&apos;s find
            <br />
            where your brand
            <br />
            is leaving money
            <br />
            <span className="text-cobalt">on the table.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mx-auto mt-8 max-w-[52ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
            Get a free marketing audit and discover the clearest opportunities across your brand,
            content, positioning and acquisition journey.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {AUDIT_AREAS.map((a, i) => (
            <motion.button
              key={a.key}
              type="button"
              onClick={() => setArea(a.key)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "lift rounded-[18px] border px-4 py-7 text-center",
                area === a.key
                  ? "border-cobalt bg-background shadow-[var(--shadow-cobalt)]"
                  : "border-border bg-background/80 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]",
              )}
            >
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink">
                {a.title}
              </span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {area && (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-10 max-w-[560px] rounded-[20px] border border-border bg-background px-8 py-10 shadow-[var(--shadow-soft)]"
            >
              <p className="eyebrow text-cobalt">This is where we start.</p>
              <p className="mt-4 text-base leading-relaxed text-ink">
                {AUDIT_AREAS.find((a) => a.key === area)?.copy}
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                Findings come from the audit itself — nothing is assumed before we look.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-14">
          <AuditForm />
        </div>
      </div>
    </section>
  );
}

type FormState = {
  profile: string;
  goal: string;
  presence: string;
  name: string;
  email: string;
  whatsapp: string;
};

function AuditForm() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>({
    profile: "",
    goal: "",
    presence: "",
    name: "",
    email: "",
    whatsapp: "",
  });

  const set = (k: keyof FormState, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const steps = [
    { label: "What best describes you?", key: "profile" as const, options: PROFILES },
    { label: "What are you trying to improve?", key: "goal" as const, options: GOALS },
  ];

  return (
    <div
      id="contact"
      className="mx-auto max-w-[680px] rounded-[24px] border border-border bg-card px-6 py-12 text-center shadow-[var(--shadow-soft)] sm:px-12"
    >
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="eyebrow text-cobalt">Received</p>
            <h3 className="display mt-5 text-[clamp(1.9rem,5vw,3rem)] text-ink">
              Your audit request is in.
            </h3>
            <p className="mx-auto mt-5 max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
              Expect a tailored review of your current marketing presence.
            </p>
            <p className="mt-6 text-[0.62rem] uppercase tracking-[0.2em] text-silver">
              Demo interaction — no data is stored yet
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-2">
              {[0, 1, 2, 3].map((s) => (
                <span
                  key={s}
                  className={cn(
                    "h-1 w-8 rounded-full transition-colors duration-500",
                    s <= step ? "bg-cobalt" : "bg-border",
                  )}
                />
              ))}
            </div>

            {step < 2 && (
              <>
                <h3 className="display mt-8 text-3xl text-ink">{steps[step]!.label}</h3>
                <div className="mt-8 flex flex-wrap justify-center gap-2.5">
                  {steps[step]!.options.map((o) => (
                    <button
                      key={o}
                      type="button"
                      onClick={() => {
                        set(steps[step]!.key, o);
                        setStep(step + 1);
                      }}
                      className={cn(
                        "rounded-[13px] border px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.12em] transition-all duration-400",
                        form[steps[step]!.key] === o
                          ? "border-cobalt text-cobalt"
                          : "border-border text-ink hover:-translate-y-0.5 hover:border-ink/30",
                      )}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h3 className="display mt-8 text-3xl text-ink">Current website / Instagram</h3>
                <input
                  value={form.presence}
                  onChange={(e) => set("presence", e.target.value)}
                  placeholder="yourbrand.com or @yourhandle"
                  className="mt-8 w-full rounded-[13px] border border-border bg-background px-5 py-4 text-center text-sm text-ink outline-none transition-colors focus:border-cobalt"
                />
                <div className="mt-8 flex justify-center gap-3">
                  <MagneticButton variant="ghost" onClick={() => setStep(1)}>
                    Back
                  </MagneticButton>
                  <MagneticButton onClick={() => setStep(3)}>Continue</MagneticButton>
                </div>
              </>
            )}

            {step === 3 && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <h3 className="display mt-8 text-3xl text-ink">Where should it go?</h3>
                <div className="mt-8 flex flex-col gap-3">
                  {[
                    { k: "name" as const, ph: "Name", type: "text" },
                    { k: "email" as const, ph: "Email", type: "email" },
                    { k: "whatsapp" as const, ph: "WhatsApp", type: "tel" },
                  ].map((f) => (
                    <input
                      key={f.k}
                      required
                      type={f.type}
                      value={form[f.k]}
                      onChange={(e) => set(f.k, e.target.value)}
                      placeholder={f.ph}
                      className="w-full rounded-[13px] border border-border bg-background px-5 py-4 text-center text-sm text-ink outline-none transition-colors focus:border-cobalt"
                    />
                  ))}
                </div>
                <div className="mt-8 flex justify-center gap-3">
                  <MagneticButton variant="ghost" onClick={() => setStep(2)}>
                    Back
                  </MagneticButton>
                  <MagneticButton type="submit">Request my free audit</MagneticButton>
                </div>
                <p className="mt-6 text-[0.62rem] uppercase tracking-[0.2em] text-silver">
                  {FACTS.instagram} · {FACTS.completions} client completions
                </p>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
