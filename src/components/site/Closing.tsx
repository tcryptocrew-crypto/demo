import { FACTS, NAV_LINKS, images } from "@/lib/site-data";
import { MagneticButton, Reveal } from "./primitives";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-ink-soft to-ink px-6 pb-32 pt-40 text-background sm:pb-44">
      <img
        src={images.finalCta}
        alt="City skyline at blue hour seen from a high-rise window"
        width={1600}
        height={1000}
        loading="lazy"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[70%] w-full object-cover opacity-40"
      />
      <div className="mx-auto max-w-[900px] text-center">
        <Reveal>
          <h2 className="display text-[clamp(2.6rem,9vw,7rem)]">
            Your brand
            <br />
            can do more.
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="display mt-6 text-[clamp(1.5rem,4.5vw,2.75rem)] text-cobalt-soft">
            Let&apos;s find out how much.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <MagneticButton href="#audit">Get your free audit</MagneticButton>
            <MagneticButton href="#work" variant="inverse">
              View the work
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink px-6 pb-28 pt-20 text-background lg:pb-20">
      <div className="mx-auto max-w-[1080px] text-center">
        <p className="display text-[clamp(1.8rem,5vw,3rem)]">{FACTS.name}</p>
        <p className="eyebrow mt-4 text-background/50">Marketing Expert · Entrepreneur</p>
        <p className="display mt-8 text-2xl text-cobalt-soft">&ldquo;I scale brands.&rdquo;</p>

        <nav
          className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
          aria-label="Footer"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-background/55 transition-colors hover:text-background"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[20px] border border-background/10 bg-background/10 sm:grid-cols-3">
          <div className="bg-ink px-6 py-7">
            <p className="display text-3xl">{FACTS.followers}</p>
            <p className="eyebrow mt-2 text-background/45">Followers</p>
          </div>
          <div className="bg-ink px-6 py-7">
            <p className="display text-3xl">{FACTS.completions}</p>
            <p className="eyebrow mt-2 text-background/45">Client completions</p>
          </div>
          <a
            href={FACTS.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-ink px-6 py-7"
          >
            <p className="display text-3xl">{FACTS.instagram}</p>
            <p className="eyebrow mt-2 text-background/45">Instagram</p>
          </a>
        </div>

        <div className="mt-12 flex justify-center">
          <MagneticButton href="#audit">Free marketing audit</MagneticButton>
        </div>

        <p className="mt-14 text-[0.62rem] uppercase tracking-[0.2em] text-background/35">
          Demo personal-brand concept site · Sample content shown for design purposes
        </p>
      </div>
    </footer>
  );
}
