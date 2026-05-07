export default function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="font-bold text-2xl tracking-tighter text-white">thinkplus.</span>
    </div>
  );
}
