import { useEffect, useRef } from 'react';

/**
 * Custom hook that uses IntersectionObserver to trigger
 * scroll-based entrance animations.
 * 
 * Elements start with class "scroll-hidden" and get
 * "scroll-visible" added when they enter the viewport.
 * 
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin for observer
 * @returns {React.RefObject} ref to attach to the animated element
 */
export function useScrollAnimation({ threshold = 0.15, rootMargin = '0px 0px -50px 0px' } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
            entry.target.classList.remove('scroll-hidden');
            // Once visible, stop observing (one-time animation)
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  return ref;
}

/**
 * Hook variant for observing multiple children of a container.
 * Applies staggered animation delays to each child.
 * 
 * @param {Object} options
 * @param {string} options.childSelector - CSS selector for children to animate
 * @param {number} options.threshold - Visibility threshold
 * @returns {React.RefObject} ref to attach to the parent container
 */
export function useScrollAnimationChildren({ childSelector = '.animate-child', threshold = 0.1 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.querySelectorAll(childSelector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
            entry.target.classList.remove('scroll-hidden');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -30px 0px' }
    );

    children.forEach((child, index) => {
      child.classList.add('scroll-hidden');
      child.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(child);
    });

    return () => {
      children.forEach((child) => observer.unobserve(child));
    };
  }, [childSelector, threshold]);

  return ref;
}
