import { useEffect, useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

export const useAnimatedCounter = (target: number, duration = 2000) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return { ref, count, isVisible };
};
