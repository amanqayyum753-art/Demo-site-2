import { useRef, useCallback } from 'react';

export default function MagneticButton({ children, onClick, className = '', as: Tag = 'button', ...props }: any) {
  const btnRef = useRef(null);

  const handleMouseMove = useCallback((e: any) => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const btn: any = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const btn: any = btnRef.current;
    if (btn) btn.style.transform = 'translate(0, 0)';
  }, []);

  return (
    <Tag
      ref={btnRef}
      className={`magnetic-btn ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...props}
    >
      <span>{children}</span>
    </Tag>
  );
}
