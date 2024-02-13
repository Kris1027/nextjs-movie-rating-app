'use client';
import { motion } from 'framer-motion';

const pageVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: 'easeInOut', duration: 0.5 },
  },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
}
