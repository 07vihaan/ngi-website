import { useEffect, useRef, useState } from 'react';

// Shows `value` (e.g. "200+"), counting the number up from 0 the first time it scrolls into view.
function CountUp({ value, duration = 1200 }) {
  const match = /^(\D*)(\d+)(.*)$/.exec(value);
  const target = match ? Number(match[2]) : 0;
  const canAnimate =
    match &&
    typeof window !== 'undefined' &&
    'IntersectionObserver' in window &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [current, setCurrent] = useState(canAnimate ? 0 : target);
  const ref = useRef(null);

  useEffect(() => {
    if (!canAnimate || !ref.current) return undefined;
    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setCurrent(Math.round(target * eased));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [canAnimate, target, duration]);

  if (!match) return <span>{value}</span>;
  return (
    <span ref={ref} aria-label={value}>
      {match[1]}{current}{match[3]}
    </span>
  );
}

export default CountUp;
