import { createFileRoute } from "@tanstack/react-router";
import FuzzyText from "@/components/FuzzyText";
import logoUrl from "@/assets/gmi-logo.png";
import videoUrl from "@/assets/gmi-animation.mp4";

const TITLE = "GMI Tech — Website Under Maintenance";
const DESCRIPTION =
  "GMI Tech is currently upgrading its website. Our new digital experience will be available soon.";

export const Route = createFileRoute("/")({
  component: Maintenance,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Maintenance() {
  return (
    <div className="flex h-[100dvh] w-full flex-col overflow-hidden bg-white text-foreground">
      <header className="grid shrink-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-[clamp(1rem,4vw,3.5rem)] py-[clamp(0.75rem,2vh,1.5rem)]">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={logoUrl}
            alt="GMI Tech logo"
            width={44}
            height={44}
            className="h-[clamp(32px,5vh,44px)] w-auto shrink-0"
          />
          <span className="truncate text-[clamp(0.95rem,1.4vw,1.1rem)] font-semibold tracking-tight">
            GMI Tech
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-2 rounded-full border border-border px-3 py-1.5">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-foreground opacity-40 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-foreground" />
          </span>
          <span className="text-[clamp(0.65rem,1vw,0.78rem)] font-medium tracking-wide text-muted-foreground">
            Website Under Maintenance
          </span>
        </div>
      </header>

      <main className="flex min-h-0 flex-1 items-center px-[clamp(1rem,4vw,3.5rem)] pb-[clamp(0.5rem,1.5vh,1rem)]">
        <div className="grid w-full min-h-0 grid-cols-1 items-center gap-[clamp(1rem,3vh,2.5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <section className="order-2 flex min-w-0 flex-col gap-[clamp(0.6rem,1.6vh,1.1rem)] lg:order-1">
            <div className="text-primary">
              <FuzzyText
                baseIntensity={0.12}
                hoverIntensity={0.25}
                enableHover
                fuzzRange={12}
                fps={30}
                fontSize="clamp(0.8rem,1.4vw,1rem)"
                fontWeight={600}
                letterSpacing={5}
              >
                UNDER MAINTENANCE
              </FuzzyText>
            </div>

            <h1 className="text-balance text-[clamp(1.6rem,4.2vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              We&rsquo;re upgrading our digital experience.
            </h1>

            <p className="max-w-xl text-[clamp(0.85rem,1.35vw,1.05rem)] leading-relaxed text-muted-foreground">
              Our website is currently under maintenance while we work on something better.
              We&rsquo;ll be back shortly.
            </p>

            <div className="mt-[clamp(0.25rem,1.5vh,0.75rem)] border-t border-border pt-[clamp(0.6rem,1.6vh,1.1rem)]">
              <h2 className="text-[clamp(0.7rem,1vw,0.8rem)] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Need to reach us?
              </h2>
              <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-[clamp(0.78rem,1.15vw,0.95rem)]">
                <a className="link-underline" href="mailto:ceo@gmitech.in">
                  ceo@gmitech.in
                </a>
                <a className="link-underline" href="mailto:hr@gmitech.in">
                  hr@gmitech.in
                </a>
                <a className="link-underline" href="tel:+919036717885">
                  +91 90367 17885
                </a>
              </div>
              <div className="mt-[clamp(0.5rem,1.5vh,0.9rem)] flex flex-wrap gap-2">
                <a className="btn-solid" href="mailto:ceo@gmitech.in">
                  Email Us
                </a>
                <a
                  className="btn-outline"
                  href="https://wa.me/919036717885"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
                <a className="btn-outline" href="tel:+919036717885">
                  Call Us
                </a>
              </div>
            </div>
          </section>

          <section className="order-1 flex min-w-0 justify-center lg:order-2">
            <video
              src={videoUrl}
              className="aspect-square h-auto w-full max-w-[min(100%,clamp(180px,42vh,440px))] object-contain"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              tabIndex={-1}
            />
          </section>
        </div>
      </main>

      <footer className="shrink-0 px-[clamp(1rem,4vw,3.5rem)] pb-[clamp(0.6rem,1.8vh,1.25rem)] text-[clamp(0.65rem,0.9vw,0.75rem)] text-muted-foreground">
        © 2026 GMI Tech. All rights reserved.
      </footer>
    </div>
  );
}
