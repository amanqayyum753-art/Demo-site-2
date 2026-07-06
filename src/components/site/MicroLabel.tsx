export default function MicroLabel({ children, className = '' }: { children: any; className?: string }) {
  return (
    <span className={`micro-label ${className}`}>
      {children}
    </span>
  );
}
