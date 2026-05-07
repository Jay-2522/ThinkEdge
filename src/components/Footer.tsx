import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-20 pb-8 border-t border-white/10 z-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <BrandLogo className="mb-6" />
          <p className="text-neutral-400 font-medium max-w-sm tracking-tight leading-relaxed">
            The apex destination for cognitive leaders preparing for CAT, IPMAT, and CLAT via analytical mastery.
          </p>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs text-neutral-500 mb-6">Programs</h4>
          <ul className="space-y-4 font-medium text-neutral-300">
            <li><a href="#programs" className="hover:text-white transition-colors">CAT Masterclass</a></li>
            <li><a href="#programs" className="hover:text-white transition-colors">IPMAT Integrated</a></li>
            <li><a href="#programs" className="hover:text-white transition-colors">CLAT Advanced</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs text-neutral-500 mb-6">Company</h4>
          <ul className="space-y-4 font-medium text-neutral-300">
            <li><a href="#testimonials" className="hover:text-white transition-colors">Success Stories</a></li>
            <li><a href="#blog" className="hover:text-white transition-colors">Intelligence Blog</a></li>
            <li><a href="#enrolment" className="hover:text-white transition-colors">Enrolment</a></li>
          </ul>
        </div>
      </div>
      
      {/* Massive Outline Text */}
      <div className="w-full overflow-hidden flex justify-center items-center pointer-events-none select-none my-12 opacity-80">
        <h1 
          className="text-[15vw] leading-none font-bold tracking-tighter"
          style={{ 
            color: '#050505', 
            textShadow: `
              -2px -2px 0 rgba(255,255,255,0.15),
               2px -2px 0 rgba(255,255,255,0.15),
              -2px  2px 0 rgba(255,255,255,0.15),
               2px  2px 0 rgba(255,255,255,0.15),
               0px -2px 0 rgba(255,255,255,0.15),
               0px  2px 0 rgba(255,255,255,0.15),
              -2px  0px 0 rgba(255,255,255,0.15),
               2px  0px 0 rgba(255,255,255,0.15)
            `
          }}
        >
          thinkedge.
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-neutral-500 relative z-10">
        <div>© 2024 ThinkEdge Education. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
