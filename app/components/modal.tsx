import { AnimatePresence, motion } from 'framer-motion';
import { useModal } from '../contexts/modal-context';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const backdrop = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const modal = {
  initial: { y: '-100vh', opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { delay: 0.5 } },
};

export default function Modal() {
  const { setShowModal } = useModal();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
      router.push('/rated');
    }, 5000);
    return () => clearTimeout(timer);
  }, [setShowModal, router]);

  return (
    <AnimatePresence>
      <motion.div
        variants={backdrop}
        initial="initial"
        animate="animate"
        className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 z-50 flex justify-center items-center"
        onClick={() => setShowModal((prev: boolean) => !prev)}
      >
        <motion.div
          className="bg-slate-500 rounded-lg"
          variants={modal}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl p-5 md:p-20">Your rate is succesfull!</h2>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
