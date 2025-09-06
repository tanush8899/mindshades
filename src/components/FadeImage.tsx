import { useState } from "react";
import { motion } from "framer-motion";

export default function FadeImage({
  src,
  alt = "",
  className = "",
}: { src: string; alt?: string; className?: string }) {
  const [loaded, setLoaded] = useState(false);
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Soft placeholder while the image loads */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: loaded ? 0 : 1 }}
        transition={{ duration: 0.6, ease }}
        className="absolute inset-0 bg-black/5"
      />
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }}
        animate={{
          opacity: loaded ? 1 : 0,
          scale: loaded ? 1 : 1.02,
          filter: loaded ? "blur(0px)" : "blur(8px)",
        }}
        transition={{ duration: 1.2, ease }}
        className="w-full h-auto object-cover block"
      />
    </div>
  );
}
