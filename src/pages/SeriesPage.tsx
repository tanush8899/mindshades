import { useParams, Link } from "react-router-dom";
import { artworks } from "../data/artworks";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease, staggerChildren: 0.12, delayChildren: 0.25 },
  },
};
const item = {
  hidden: { opacity: 0, y: 14, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.25, ease } },
};

export default function SeriesPage() {
  const { slug } = useParams();
  const name = (slug ?? "").charAt(0).toUpperCase() + (slug ?? "").slice(1);
  const filtered = artworks.filter((a) => a.series.toLowerCase() === slug);

  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      <section className="w-full px-[10vw] pt-6 text-center">
        <motion.h1 className="text-5xl font-normal" variants={item}>{name}</motion.h1>
        <motion.p className="mt-2 text-lg" variants={item}>
          {name === "People" && "People depicted through canvas."}
          {name === "Landscapes" && "Place, light, and distance."}
          {name === "Abstract" && "Color fields and motion."}
          {name === "Blue" && "The depths of azul."}
          {name === "Sketches" && "When pencil meets paper."}
        </motion.p>
      </section>

      <section className="w-full px-[10vw] py-6">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {filtered.map((a) => (
            <motion.div key={a.id} variants={item}>
              <Link to={`/art/${a.id}`} className="block overflow-hidden rounded-md card-hover">
                <div className="aspect-[4/5] w-full overflow-hidden bg-black/5">
                  <img src={a.imageUrl} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
