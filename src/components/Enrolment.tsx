import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

function CustomDropdown({ options, value, onChange, label }: { options: string[], value: string, onChange: (v: string) => void, label: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div 
        className="w-full bg-transparent border-b border-white/20 pb-3 text-xl md:text-2xl font-bold tracking-tight text-white cursor-pointer flex justify-between items-center group transition-colors hover:border-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value}</span>
        <ChevronDown className={`w-5 h-5 text-white/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-xl overflow-hidden z-50 p-2"
          >
            {options.map((opt) => (
              <div 
                key={opt}
                onClick={() => { onChange(opt); setIsOpen(false); }}
                className={`px-4 py-3 text-lg font-semibold rounded-xl cursor-pointer transition-colors ${value === opt ? 'bg-blue-600 text-white' : 'text-neutral-400 hover:bg-white/10 hover:text-white'}`}
              >
                {opt}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Enrolment() {
  const [exam, setExam] = useState("CAT");
  const [year, setYear] = useState("2026");

  return (
    <section id="enrolment" className="relative py-32 bg-[#050505] text-white overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-blue-500/20 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 text-center">
         <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#111111]/80 backdrop-blur-2xl border border-white/5 rounded-[3rem] p-10 md:p-20 shadow-2xl"
         >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Start Your Journey.</h2>
            <p className="text-lg md:text-xl text-neutral-400 font-medium mb-16 max-w-xl mx-auto tracking-tight">
              Admissions are highly selective. Book a session with our expert counselors to map out your preparation strategy.
            </p>

            <form className="max-w-3xl mx-auto text-left grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mb-16">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-xl md:text-2xl font-bold tracking-tight outline-none focus:border-blue-500 transition-colors text-white" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">Mobile Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-xl md:text-2xl font-bold tracking-tight outline-none focus:border-blue-500 transition-colors text-white" 
                  placeholder="+91 99999 99999" 
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">Target Exam</label>
                <CustomDropdown 
                  label="Target Exam"
                  options={["CAT", "IPMAT", "CLAT"]} 
                  value={exam} 
                  onChange={setExam} 
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">Target Year</label>
                <CustomDropdown 
                  label="Target Year"
                  options={["2025", "2026", "2027", "2028"]} 
                  value={year} 
                  onChange={setYear} 
                />
              </div>
            </form>

            <button className="w-full md:w-auto bg-white text-black px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-4 hover:scale-105 transition-transform group mx-auto">
              Schedule a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
         </motion.div>
      </div>
    </section>
  );
}
