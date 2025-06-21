import { useInView } from 'react-intersection-observer';

const IntersectionObserver = () => {
  return { ref, inView } = useInView({
    threshold: 1,
  });
};

export default IntersectionObserver;
