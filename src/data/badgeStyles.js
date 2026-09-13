export const BADGE_STYLES = {
  Popular: "bg-emerald-50 text-emerald-600",
  Versatile: "bg-teal-50 text-teal-600",
  Fast: "bg-orange-50 text-orange-600",
  "Full-Stack": "bg-violet-50 text-violet-600",
  Standard: "bg-green-50 text-green-600",
  "Top SQL": "bg-blue-50 text-blue-600",
  Cache: "bg-rose-50 text-rose-600",
  Ubiquitous: "bg-amber-50 text-amber-600",
  Essential: "bg-sky-50 text-sky-600",
  Robust: "bg-slate-100 text-slate-600",
  Modern: "bg-cyan-50 text-cyan-600",
  Containers: "bg-indigo-50 text-indigo-600",
  Design: "bg-pink-50 text-pink-600",
};

export const DEFAULT_BADGE_STYLE = "bg-slate-100 text-slate-600";

export function getBadgeStyle(badge) {
  return BADGE_STYLES[badge] || DEFAULT_BADGE_STYLE;
}
