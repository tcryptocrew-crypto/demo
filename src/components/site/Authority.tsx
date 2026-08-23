import { FACTS, INSTAGRAM_GRID, images } from "@/lib/site-data";
import { motion } from "motion/react";
import { MagneticButton, Reveal, SectionLabel } from "./primitives";

const PILLARS = ["Marketing", "Personal Brand", "Strategy", "Growth"];

export function BrandAuthority() {
  return (
    <section className="border-t border-border px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-[1180px] text-center">
        <SectionLabel>Personal brand</SectionLabel>
        <Reveal delay={0.05}>
          <h2 className="display mt-8 text-[clamp(2.4rem,7.5vw,5.5rem)] text-ink">
            Build a brand
            <br />
            people remember.
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mx-auto mt-6 max-w-[50ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
            Everything here is built around one person, one point of view and one way of working —
            not an anonymous agency process.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-stretch">
          <Reveal delay={0.1} className="overflow-hidden rounded-[24px] border border-border">
            <img
              src={images.aboutPortrait}
              alt="Hancel Villatoro working on brand strategy documents in a bright minimal office"
              width={1200}
              height={1504}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-border bg-border">
              {PILLARS.map((p) => (
                <div
                  key={p}
                  className="flex min-h-[104px] items-center justify-center bg-background px-4 text-center text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink"
                >
                  {p}
                </div>
              ))}
            </div>
            <div className="surface-card flex flex-1 flex-col items-center justify-center gap-4 px-8 py-12">
              <p className="display text-5xl text-ink">{FACTS.followers}</p>
              <p className="eyebrow">Instagram followers</p>
              <div className="h-px w-16 bg-silver" />
              <p className="display text-5xl text-ink">{FACTS.completions}</p>
              <p className="eyebrow">Client completions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SocialProof() {
  return (
    <section className="bg-soft px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-[1180px] text-center">
        <SectionLabel>Content</SectionLabel>
        <Reveal delay={0.05}>
          <div className="display mt-10 text-[clamp(4.5rem,20vw,15rem)] leading-[0.8] text-ink">
            {FACTS.followers}
          </div>
        </Reveal>
        <Reveal delay={0.14}>
          <h2 className="display mt-8 text-[clamp(1.8rem,5vw,3.25rem)] text-ink">
            The audience is already there.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-[46ch] text-sm text-muted-foreground sm:text-base">
            {FACTS.instagram} · {FACTS.posts} posts · verified profile. An audience is attention,
            not a client list — it is the starting point, not the proof.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {INSTAGRAM_GRID.map((img, i) => (
            <motion.a
              key={img.src}
              href={FACTS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-square overflow-hidden rounded-[18px] border border-border bg-background"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={800}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
              />
              <span className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/70 to-transparent p-4 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-background opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {FACTS.instagram}
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <MagneticButton href={FACTS.instagramUrl} variant="ghost">
            Follow on Instagram
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-28 sm:py-40">
      <div className="mx-auto grid max-w-[1080px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="order-2 overflow-hidden rounded-[24px] border border-border lg:order-1">
          <img
            src={images.heroPortrait}
            alt="Portrait of Hancel Villatoro, marketing expert and entrepreneur"
            width={1024}
            height={1408}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </Reveal>
        <div className="order-1 text-center lg:order-2">
          <SectionLabel>About</SectionLabel>
          <Reveal delay={0.05}>
            <h2 className="display mt-8 text-[clamp(2.4rem,7vw,4.75rem)] text-ink">
              Behind the
              <br />
              strategy.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-7 max-w-[46ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
              Hancel Villatoro is an entrepreneur and marketing expert focused on helping brands
              scale through smarter marketing.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[20px] border border-border bg-border">
              <div className="bg-background px-5 py-6">
                <p className="display text-3xl text-ink">{FACTS.followers}</p>
                <p className="eyebrow mt-2">Followers</p>
              </div>
              <div className="bg-background px-5 py-6">
                <p className="display text-3xl text-ink">{FACTS.completions}</p>
                <p className="eyebrow mt-2">Client completions</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <MagneticButton href="#audit">Free marketing audit</MagneticButton>
              <MagneticButton href={FACTS.instagramUrl} variant="ghost">
                {FACTS.instagram}
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
