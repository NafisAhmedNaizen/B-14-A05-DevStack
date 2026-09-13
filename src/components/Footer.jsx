
function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.79 10.78.57.11.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.17.69-3.84-1.35-3.84-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.34-5.21 5.62.41.36.77 1.06.77 2.14 0 1.54-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.53 10.53 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}
function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7.6 8.7L23.4 22h-7.1l-5.6-7.3L4.2 22H1l8.1-9.3L.9 2H8.2l5.1 6.7L18.9 2Zm-1.2 18.2h1.9L6.4 3.7H4.4l13.3 16.5Z" />
    </svg>
  );
}
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM.5 8.98h4.96V23H.5V8.98ZM8.98 8.98h4.76v1.92h.07c.66-1.25 2.28-2.57 4.7-2.57 5.03 0 5.96 3.31 5.96 7.61V23h-4.97v-6.31c0-1.5-.03-3.44-2.1-3.44-2.1 0-2.42 1.64-2.42 3.33V23H8.98V8.98Z" />
    </svg>
  );
}

const LINK_GROUPS = [
  {
    title: "Product",
    links: ["Home", "Technologies", "Projects"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Careers"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface-muted">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-sm font-bold text-white">
                DS
              </span>
              <span className="font-display text-lg font-bold text-ink">
                Dev <span className="text-gradient">Stack</span>
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="mt-5 flex items-center gap-4 text-ink-soft">
              <a href="#" aria-label="GitHub" className="focus-ring hover:text-ink">
                <GithubIcon />
              </a>
              <a href="#" aria-label="Twitter" className="focus-ring hover:text-ink">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="focus-ring hover:text-ink">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-ink">{group.title}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="focus-ring text-sm text-ink-soft hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-sm text-ink-soft sm:flex-row">
          <p>© {year} Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="focus-ring hover:text-ink">
              Privacy
            </a>
            <a href="#" className="focus-ring hover:text-ink">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
