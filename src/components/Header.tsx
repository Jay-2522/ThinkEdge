import BrandLogo from './BrandLogo';

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between mix-blend-difference text-white pointer-events-none">
      <div className="pointer-events-auto cursor-pointer">
        <BrandLogo />
      </div>
      <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold pointer-events-auto hover:scale-105 transition-transform">
        Get Started
      </button>
    </header>
  );
}
