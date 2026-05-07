import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BrainCircuit, GraduationCap, Target, Video, BookOpen, FileText, PhoneCall, Sparkles } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

const programs = [
  {
    id: 'CAT',
    title: 'Master the CAT.',
    gradient: 'from-blue-400 via-cyan-400 to-blue-500',
    colorHex: '#3b82f6',
    desc: 'Engineered for 99+ percentiles. Advanced analytics, adaptive mock tests, and mentorship from top IIM alumni.',
    features: [
      { title: 'Diagnostic Mock', subtitle: 'Assess your baseline score instantly.', icon: Target, action: 'Start 30-Min Test', hoverGlow: 'group-hover:bg-blue-500/20' },
      { title: 'Explore Curriculum', subtitle: '120+ hours of structured video content.', icon: BookOpen, action: 'View Syllabus', hoverGlow: 'group-hover:bg-cyan-500/20' },
      { title: 'Expert Guidance', subtitle: 'Speak directly with an IIM mentor.', icon: PhoneCall, action: 'Book a Call', hoverGlow: 'group-hover:bg-blue-400/20' }
    ]
  },
  {
    id: 'IPMAT',
    title: 'Secure the IPMAT.',
    gradient: 'from-violet-400 via-purple-400 to-fuchsia-500',
    colorHex: '#8b5cf6',
    desc: 'Early advantage for IIM Rohtak & Indore. Comprehensive syllabus coverage with specialized logical reasoning tracks.',
    features: [
      { title: 'Attempt Scholarship', subtitle: 'Get up to 100% off on your tuition fees.', icon: Sparkles, action: 'Register Now', hoverGlow: 'group-hover:bg-violet-500/20' },
      { title: 'Video Solutions', subtitle: 'Step-by-step interview breakdowns.', icon: Video, action: 'Watch Previews', hoverGlow: 'group-hover:bg-fuchsia-500/20' },
      { title: 'Career Counseling', subtitle: 'Plan your 5-year integrated journey.', icon: GraduationCap, action: 'Talk to Expert', hoverGlow: 'group-hover:bg-purple-500/20' }
    ]
  },
  {
    id: 'CLAT',
    title: 'Conquer the CLAT.',
    gradient: 'from-emerald-400 via-teal-400 to-emerald-500',
    colorHex: '#10b981',
    desc: 'Master legal reasoning and general knowledge. Join the top NLUs with our high-intensity, logic-first training ecosystem.',
    features: [
      { title: 'Live Mock Test', subtitle: 'Compete with thousands nationwide.', icon: Target, action: 'Join Next Mock', hoverGlow: 'group-hover:bg-emerald-500/20' },
      { title: 'Study Materials', subtitle: 'Curated directly by top NLU graduates.', icon: FileText, action: 'Download PDF', hoverGlow: 'group-hover:bg-teal-500/20' },
      { title: 'Strategy Session', subtitle: '1-on-1 personalized study plan.', icon: BrainCircuit, action: 'Book Session', hoverGlow: 'group-hover:bg-emerald-400/20' }
    ]
  }
];

function Shape({ position, rotation, scale, color, geometry, speed = 1, floatIntensity = 1, delay = 0 }: any) {
  const group = useRef<THREE.Group>(null!);
  const [startY] = useState(() => position[1] + 15 + Math.random() * 10);
  const time = useRef(0);

  useFrame((state, delta) => {
    if (group.current) {
      time.current += delta;
      if (time.current > delay) {
        group.current.position.y = THREE.MathUtils.damp(group.current.position.y, position[1], 3, delta);
        // Add a slight rotation effect as it falls
        const fallProgress = (group.current.position.y - position[1]) / (startY - position[1]);
        if (fallProgress > 0.01) {
             group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, rotation[0], 2, delta);
             group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, rotation[1], 2, delta);
             group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, rotation[2] || 0, 2, delta);
        }
      }
    }
  });

  return (
    <group ref={group} position={[position[0], startY, position[2]]} rotation={[rotation[0] + Math.random() * Math.PI, rotation[1] + Math.random() * Math.PI, Math.random() * Math.PI]}>
      <Float speed={speed} rotationIntensity={floatIntensity} floatIntensity={floatIntensity} floatingRange={[-0.4, 0.4]}>
        <mesh scale={scale} geometry={geometry}>
          <meshPhysicalMaterial
            color={color}
            roughness={0.1}
            metalness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
            envMapIntensity={2}
          />
        </mesh>
      </Float>
    </group>
  );
}

function FloatingShapes() {
  const group = useRef<THREE.Group>(null!);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (group.current) {
      // Dynamic parallax based on mouse
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.current.y * 0.2, 0.05);
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.current.x * 0.2, 0.05);
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, pointer.current.x * 1, 0.05);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, pointer.current.y * 1, 0.05);
    }
  });

  const geometries = {
    torus: new THREE.TorusGeometry(1.2, 0.5, 32, 64),
    sphere: new THREE.SphereGeometry(1, 64, 64),
    torusKnot: new THREE.TorusKnotGeometry(0.8, 0.25, 100, 16),
    cone: new THREE.ConeGeometry(1, 2, 32),
    capsule: new THREE.CapsuleGeometry(0.6, 1.2, 32, 32)
  };

  return (
    <group ref={group}>
      <Shape geometry={geometries.torus} position={[-8, -2, -6]} rotation={[1, 1, 0]} scale={1.8} color="#ff5b00" speed={1.5} floatIntensity={2} delay={0.1} />
      <Shape geometry={geometries.capsule} position={[7, 0, -8]} rotation={[0.5, 0.5, 0]} scale={2} color="#00ff4c" speed={2} floatIntensity={1.5} delay={0.3} />
      <Shape geometry={geometries.torusKnot} position={[4, 4, -5]} rotation={[0.5, 0.2, 0.5]} scale={1.5} color="#b700ff" speed={1.2} floatIntensity={3} delay={0.2} />
      <Shape geometry={geometries.cone} position={[-6, 4, -8]} rotation={[1, 0.5, 0]} scale={1.4} color="#00b7ff" speed={2.5} floatIntensity={1} delay={0.5} />
      <Shape geometry={geometries.sphere} position={[4, -4, -4]} rotation={[0, 0, 0]} scale={0.8} color="#ff00a0" speed={1.8} floatIntensity={2.5} delay={0.4} />
      <Shape geometry={geometries.sphere} position={[-1, -4, -10]} rotation={[0, 0, 0]} scale={1.2} color="#eab308" speed={1.5} floatIntensity={1.5} delay={0.15} />
    </group>
  );
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % programs.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const activeItem = programs[activeIndex];

  return (
    <section id="home" className="relative min-h-[100vh] h-auto bg-[#050505] text-white flex flex-col justify-center overflow-hidden pt-32 pb-24">
      
      {/* 3D Floating Shapes Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={1} />
          <directionalLight intensity={2} position={[10, 10, 10]} />
          <Environment preset="city" />
          <FloatingShapes />
        </Canvas>
      </div>
      
      {/* Foreground Content Filter Layer */}
      <div className="absolute inset-0 z-[1] bg-[#050505]/40 backdrop-blur-[1px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col h-full justify-center gap-8 md:gap-12">
        
        {/* Top Header & Carousel Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8 mt-8">
          <div className="max-w-3xl relative">
            <div className="inline-flex border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 shadow-xl">
              Welcome to ThinkEdge
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1.1] mb-6 drop-shadow-2xl">
              Rewrite your <br/>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`inline-block text-transparent bg-clip-text bg-gradient-to-r ${activeItem.gradient} py-1`}
                >
                  potential.
                </motion.span>
              </AnimatePresence>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 font-medium max-w-2xl tracking-tight leading-snug h-24 md:h-20 drop-shadow-lg">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeItem.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block"
                >
                  {activeItem.desc}
                </motion.span>
              </AnimatePresence>
            </p>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="bg-[#111111]/80 backdrop-blur-xl rounded-full p-1.5 flex border border-white/10 shrink-0 self-start lg:self-auto shadow-2xl">
            {programs.map((prog, index) => (
              <button
                key={prog.id}
                onClick={() => setActiveIndex(index)}
                className={`relative px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors duration-300 z-10 ${
                  activeIndex === index ? 'text-black' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeTabHero"
                    className="absolute inset-0 bg-white rounded-full -z-10 shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {prog.id}
              </button>
            ))}
          </div>
        </div>

        {/* Action Bento Cards Area */}
        <div className="w-full relative min-h-[300px] md:min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
            >
              {activeItem.features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <motion.div 
                    key={feat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group relative bg-[#050505]/70 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[240px] shadow-2xl transition-transform hover:-translate-y-1"
                  >
                    {/* Hover Glow Effect inside card */}
                    <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 blur-3xl pointer-events-none ${feat.hoverGlow}`} />
                    
                    <div className="relative z-10 flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-2">
                        <Icon strokeWidth={1.5} className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold tracking-tight mb-2 text-white">{feat.title}</h3>
                        <p className="text-neutral-400 font-medium text-sm leading-relaxed">{feat.subtitle}</p>
                      </div>
                    </div>

                    <div className="relative z-10 flex items-center justify-between mt-8 border-t border-white/10 pt-6">
                      <span className="text-xs font-bold uppercase tracking-widest text-neutral-300 group-hover:text-white transition-colors">
                        {feat.action}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
