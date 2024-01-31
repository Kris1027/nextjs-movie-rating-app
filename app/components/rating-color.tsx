type RatingColorProps = {
  vote_average?: any;
  rating?: any;
};

export const totalRatingColor = (props: RatingColorProps) => {
  if (props.vote_average >= 9) {
    return 'text-violet-500';
  }
  if (props.vote_average >= 8) {
    return 'text-green-500';
  }
  if (props.vote_average >= 7) {
    return 'text-yellow-500';
  }
  if (props.vote_average >= 6) {
    return 'text-orange-500';
  }
  if (props.vote_average < 6) {
    return 'text-red-500';
  }
};

export const yourRatingColor = (props: RatingColorProps) => {
  if (props.rating >= 9) {
    return 'text-violet-500';
  }
  if (props.rating >= 8) {
    return 'text-green-500';
  }
  if (props.rating >= 7) {
    return 'text-yellow-500';
  }
  if (props.rating >= 6) {
    return 'text-orange-500';
  }
  if (props.rating < 6) {
    return 'text-red-500';
  }
};
