import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { COMPANY_INFO } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={COMPANY_INFO.heroImage}
          alt="Galaxy Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay - Gradient Burgundy */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h2 className="text-secondary font-medium tracking-widest uppercase mb-4">Welcome to Stella Lumen</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            Discover a <br />
            <span className="text-secondary">Galaxy of Stars</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl font-light">
            Strategic Consulting, Innovation Advisory, and Performance Optimization for the modern enterprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/shop">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-none border-2 border-secondary transition-all duration-300 cursor-pointer">
                Explore Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-none transition-all duration-300 cursor-pointer">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-white/60">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
