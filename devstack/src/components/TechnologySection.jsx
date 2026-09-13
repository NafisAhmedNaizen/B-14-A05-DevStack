import TechCard from "./TechCard";
import YourStack from "./YourStack";
import Loader from "./Loader";

export default function TechnologySection({
  technologies,
  loading,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}) {
  const stackIds = new Set(stack.map((t) => t.id));

  return (
    <section id="technologies" className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
      <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
        Explore the <span className="text-gradient">Technologies</span>
      </h2>
      <p className="mt-2 text-ink-soft">
        Pick the tools that belong in your ideal stack.
      </p>

      {loading ? (
        <Loader />
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                isAdded={stackIds.has(tech.id)}
                onAdd={onAdd}
              />
            ))}
          </div>

          <YourStack stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
        </div>
      )}
    </section>
  );
}
