import bannerImage from "../assets/images/banner-stack.png";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-5 pt-16 pb-20 sm:px-8 sm:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="text-gradient">Development Stack</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#technologies"
              className="focus-ring rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-md shadow-pink-200 transition-transform hover:scale-[1.02]"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="focus-ring rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={bannerImage}
            alt="Isometric illustration of a layered technology stack"
            className="w-full max-w-md drop-shadow-2xl"
            width={512}
            height={512}
          />
        </div>
      </div>
    </section>
  );
}
