import useScrollReveal from '@/hooks/useScrollReveal';

export default function DisplayHeading({ lines, className = '' }: { lines: string[]; className?: string }) {
  const ref = useScrollReveal();

  return (
    <h2 ref={ref as any} className={`display-heading ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className={`text-reveal-line block stagger-${i + 1}`}>
          <span className="block">{line}</span>
        </span>
      ))}
    </h2>
  )
};
