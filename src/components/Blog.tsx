import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const posts = [
  { title: "How IIM Ahmedabad's selection criteria changed in 2024", category: "Admissions", date: "April 12, 2024", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop&auto=format" },
  { title: "Mastering Logical Reasoning: A data-driven approach", category: "Strategy", date: "April 08, 2024", image: "https://images.unsplash.com/photo-1550592704-6c76defa998a?w=600&h=400&fit=crop&auto=format" },
  { title: "IPMAT vs CLAT: Which integrated program is right for you?", category: "Career", date: "March 29, 2024", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&auto=format" },
];

export default function Blog() {
  return (
    <section id="blog" className="py-32 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
              Insights & <br/><span className="text-blue-500">Intelligence.</span>
            </h2>
            <p className="text-xl text-neutral-400 font-medium tracking-tight">
              Expert strategies, exam updates, and success blueprints.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-blue-400 transition-colors">
            View Full Archive <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <motion.div 
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="w-full aspect-[4/3] bg-[#111] rounded-[2rem] border border-white/5 mb-6 overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
              </div>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">
                <span className="text-blue-400">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-neutral-200 group-hover:text-white transition-colors">
                {post.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
