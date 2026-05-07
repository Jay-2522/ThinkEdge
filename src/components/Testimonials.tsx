import { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  { name: "Aditi Rao", score: "99.8 %ile CAT", text: "ThinkEdge completely revolutionized how I approach logical reasoning. The analytics pinpointed my weak spots instantly.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&auto=format" },
  { name: "Rohan Verma", score: "AIR 12 IPMAT", text: "The personalized mentorship and 1-on-1 strategy sessions were the game changer for my IIM Indore interviews.", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&auto=format" },
  { name: "Sneha Kapoor", score: "NLU Delhi", text: "The intense mock test ecosystem here simulates the real exam pressure perfectly. Highly recommended for CLAT.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&auto=format" },
  { name: "Vikram Sethi", score: "99.5 %ile CAT", text: "The adaptive testing engine is shockingly accurate. It predicted my exact final percentile down to the decimal point.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format" },
  { name: "Ananya Desai", score: "AIR 45 CLAT", text: "Legal reasoning was my weakest link until I used their strategy frameworks. An absolutely transformative experience.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&auto=format" },
  { name: "Karan Singhania", score: "99.9 %ile CAT", text: "I went from struggling with Data Interpretation to scoring perfect marks. The rigorous material here is unmatched.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&auto=format" },
  { name: "Pooja Hegde", score: "AIR 8 CLAT", text: "What sets ThinkEdge apart is the faculty's dedication. They were available 24/7 to solve my doubts a month before the exam.", image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&auto=format" },
  { name: "Deepak Chaurasia", score: "AIR 24 IPMAT", text: "The interview prep modules completely transformed my confidence. The mock PI rounds were harder than the actual IIM interview.", image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&auto=format" },
  { name: "Simran Kaur", score: "99.1 %ile CAT", text: "I juggled my IT job with CAT prep entirely through ThinkEdge. The flexibility and high-yield content made all the difference.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&auto=format" },
  { name: "Aman Gupta", score: "NLSIU Bangalore", text: "Their Current Affairs compendium was spot on. I owe my GK section score entirely to their monthly wrap-ups.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&auto=format" }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 400 : 300;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-32 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
              Wall of <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">Fame.</span>
            </h2>
            <p className="text-xl text-neutral-400 font-medium tracking-tight">
              Hear from the top 1% who made it to their dream institutions.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white transition-colors hover:text-black">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white transition-colors hover:text-black">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Horizontal Scroll Carousel */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
        >
          {testimonials.map((t, idx) => (
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={t.name}
              className="min-w-[85vw] md:min-w-[400px] snap-center shrink-0 bg-[#111]/50 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between shadow-2xl relative group"
            >
              <p className="text-lg md:text-xl font-medium text-neutral-300 mb-10 leading-snug tracking-tight">"{t.text}"</p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 object-cover" />
                <div>
                  <div className="font-bold text-white text-lg">{t.name}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-neutral-500">{t.score}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
