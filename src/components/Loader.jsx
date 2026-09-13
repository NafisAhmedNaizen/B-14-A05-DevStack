export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-ink-soft">
      <span
        className="h-9 w-9 animate-spin rounded-full border-2 border-line border-t-transparent"
        style={{ borderTopColor: "var(--color-brand-pink)" }}
        role="status"
        aria-label="Loading technologies"
      />
      <p className="text-sm">Loading technologies…</p>
    </div>
  );
}
