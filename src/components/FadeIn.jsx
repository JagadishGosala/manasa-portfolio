import { motion } from "framer-motion";

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
}) {
  const dirs = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 },
    none: { y: 0, x: 0 },
  };

  const d = dirs[direction] || dirs.up;

  return (
    <motion.div
      initial={{ opacity: 0, ...d }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}