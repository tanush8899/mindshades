import { useParams, useNavigate } from "react-router-dom";
import { artworks } from "../data/artworks";
import { motion } from "framer-motion";
import FadeImage from "../components/FadeImage";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ArtworkDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const art = artworks.find((a) => a.id === id);

  if (!art) {
    return (
      <div className="w-full px-[10vw] pt-28 pb-10">
        <p>Artwork not found.</p>
      </div>
    );
  }

  const goBack = () => navigate(-1);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease }}
      className="w-full px-[10vw] pt-28 pb-10 grid lg:grid-cols-2 gap-8 items-start cursor-pointer"
      onClick={goBack}
    >
      <FadeImage src={art.imageUrl} alt={art.title} />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease, delay: 0.1 }}
      >
        <h1 className="text-3xl font-normal mt-1">{art.title}</h1>
        <p className="mt-4 leading-relaxed">{art.description}</p>
      </motion.div>
    </motion.section>
  );
}
