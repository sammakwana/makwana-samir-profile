
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import WhyHireMe from '@/components/WhyHireMe';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="min-h-screen bg-background"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Header />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <WhyHireMe />
        <Contact />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
