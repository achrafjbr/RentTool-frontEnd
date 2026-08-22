import { motion } from "motion/react";
import type { ReactNode } from "react";

export default function AnimatedTab({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: "backInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
