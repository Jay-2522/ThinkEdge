import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Curriculum from './components/Curriculum';
import Faculty from './components/Faculty';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Enrolment from './components/Enrolment';
import Footer from './components/Footer';
import FloatingNav from './components/FloatingNav';

export default function App() {
  return (
    <div className="font-sans antialiased text-white selection:bg-blue-500/30 font-medium bg-[#050505]">
      <Header />
      
      <main className="w-full">
        <Hero />
        <Features />
        
        <div id="programs">
          <Curriculum />
        </div>
        
        <Faculty />
        <Testimonials />
        <Blog />
        <Enrolment />
      </main>

      <Footer />
      <FloatingNav />
    </div>
  );
}
