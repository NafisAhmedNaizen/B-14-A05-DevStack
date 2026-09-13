import { X } from "lucide-react";
import TechIcon from "./TechIcon";

export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length;

  return (
    <aside className="h-fit rounded-2xl border border-line bg-white p-5 lg:sticky lg:top-24">
      <h3 className="font-display text-lg font-bold text-ink">Your Stack</h3>
      <p className="mt-1 text-sm text-ink-soft">
        {count === 0
          ? "No technologies selected yet."
          : `${count} Technology Selected`}
      </p>
      {count === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-line py-10 text-center text-sm text-ink-soft">
          Your stack is empty.
        </div>
      ) : (
        <ul className="mt-4 flex flex-col gap-3">
          {stack.map((tech) => (
            <li
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-line px-3 py-2.5"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface-muted">
                <TechIcon name={tech.name} icon={tech.icon} size={20} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-ink">
                  {tech.name}
                </span>
                <span className="block text-xs text-ink-soft">{tech.category}</span>
              </span>
              <button
                type="button"
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name} from your stack`}
                className="focus-ring grid h-7 w-7 shrink-0 place-items-center rounded-md text-ink-soft transition-colors hover:bg-surface-muted hover:text-ink"
              >
                <X size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}

      {count > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="focus-ring mt-4 w-full rounded-lg border border-rose-200 py-2.5 text-sm font-semibold text-rose-500 transition-colors hover:bg-rose-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}
