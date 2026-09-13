import { Star, Check } from "lucide-react";
import { getBadgeStyle } from "../data/badgeStyles";
import TechIcon from "./TechIcon";

export default function TechCard({ tech, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-lg hover:shadow-slate-100">
      <div className="mb-4 flex items-start justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-surface-muted">
          <TechIcon name={name} icon={icon} size={24} />
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${getBadgeStyle(badge)}`}
        >
          {badge}
        </span>
      </div>

      <h3 className="font-display text-lg font-bold text-ink">{name}</h3>
      <p className="mt-2 flex-grow text-sm leading-relaxed text-ink-soft">{description}</p>

      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
        <span className="rounded-full bg-surface-muted px-2.5 py-1 font-medium text-ink-soft">
          {category}
        </span>
        <span className="text-ink-soft">{difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-ink">
          <Star size={14} className="fill-amber-400 text-amber-400" />
          {rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`focus-ring mt-5 flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
          isAdded
            ? "cursor-not-allowed bg-surface-muted text-ink-soft"
            : "bg-ink text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? (
          <>
            <Check size={16} /> Added to Stack
          </>
        ) : (
          "Add to Stack"
        )}
      </button>
    </article>
  );
}
