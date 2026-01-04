import { useEffect } from 'react';

interface UseInfiniteScrollProps {
  ref: React.RefObject<Element | null>;
  fetchNextPage: () => void;
  hasNextPage?: boolean;
  rootMargin?: string;
}

export const useInfiniteScroll = ({
  ref,
  fetchNextPage,
  hasNextPage,
  rootMargin = '200px',
}: UseInfiniteScrollProps) => {
  useEffect(() => {
    if (!hasNextPage) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      },
      { root: null, rootMargin, threshold: 0 },
    );
    const element = ref.current;
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [ref, fetchNextPage, hasNextPage, rootMargin]);
};
