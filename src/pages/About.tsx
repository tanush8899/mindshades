import { motion } from "framer-motion";
import FadeImage from "../components/FadeImage";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const paragraphs = [
    `A Chennai-based artist whose practice is driven by a lifelong devotion to art and creative inquiry, Roshna Sanjay creates a body of work that centers on energy—its movement, resonance, and quiet afterglow. Her paintings have been presented in exhibitions across Chennai, where viewers and curators alike note the way her surfaces seem to transmit a palpable charge rather than merely depict it. Each composition is conceived as a conduit, inviting the audience to feel as much as to see.`,
    `She has studied with the eminent A. V. Ilango, a mentorship that informs her rigorous craft and clarity of intent. Committed to continual growth, Roshna expands her artistic skills through daily study and studio experimentation, with plans underway to open a dedicated studio space that will deepen both her practice and her dialogue with the community.`,
  ];

  const photo = "/art/about/PHOTO-2025-05-02-14-30-28.jpg";

  return (
    <section className="w-full px-[10vw] py-12 grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 xl:gap-24 items-start">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease }}
        className="max-w-prose"
      >
        <h1 className="text-4xl font-normal mb-6">Roshna Sanjay</h1>

        <div className="space-y-5 md:space-y-6 leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </motion.div>

      <FadeImage src={photo} alt="Artist portrait" className="rounded-xl" />
    </section>
  );
}
