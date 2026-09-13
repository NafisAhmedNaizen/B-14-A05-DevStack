import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    let cancelled = false;

    async function loadTechnologies() {
      try {
        const response = await fetch("/technologies.json");
        const data = await response.json();
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (!cancelled) setTechnologies(data);
      } catch (error) {
        if (!cancelled) toast.error("Couldn't load technologies. Please refresh.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadTechnologies();
    return () => {
      cancelled = true;
    };
  }, []);

  function handleAdd(tech) {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  }

  function handleRemove(id) {
    const tech = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack.`);
  }

  function handleRemoveAll() {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("Your stack has been cleared.");
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TechnologySection
          technologies={technologies}
          loading={loading}
          stack={stack}
          onAdd={handleAdd}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </main>
      <Footer />
    </div>
  );
}
