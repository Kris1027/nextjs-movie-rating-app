'use client';
import { useState } from 'react';
import { RateMovie, RateTvShow } from '../lib/rateData';
import { FaStar } from 'react-icons/fa';
import Modal from './modal';
import { useModal } from '../contexts/modal-context';
import { useLogin } from '../contexts/login-context';
import { motion } from 'framer-motion';

export default function RatingItem({
  id,
  type,
}: {
  id: number;
  type: 'movie' | 'tvShow';
}) {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number | null>(null);
  const { showModal, setShowModal } = useModal();
  const { loggedIn } = useLogin();

  const handleSubmit = async (ratingValue: number) => {
    let response;
    if (type === 'movie') {
      response = await RateMovie(id, ratingValue);
    } else if (type === 'tvShow') {
      response = await RateTvShow(id, ratingValue);
    }
    if (response) {
      setShowModal(true);
    } else {
      alert('Something went wrong');
    }
  };

  return (
    <>
      {showModal && <Modal />}
      {loggedIn && (
        <motion.form
          className="flex justify-center"
          initial={{ opacity: 0, y: '-100vh' }}
          animate={{ opacity: 1, y: 0 }}
        >
          {[...Array(10)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i}>
                <input
                  className="hidden"
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onChange={async () => {
                    setRating(ratingValue);
                    await handleSubmit(ratingValue);
                  }}
                />
                <FaStar
                  size={40}
                  color={
                    ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'
                  }
                  className="cursor-pointer"
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </motion.form>
      )}
    </>
  );
}
