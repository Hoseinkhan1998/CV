import classes from "./index.module.css"
import { motion, useInView } from "framer-motion";
import { Merriweather } from '@next/font/google'
import Image from "next/image";
import { useEffect, useState } from "react";


const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['700', '400']
})

const content = {
  animate: {
    transition: { staggerChildren: 0.5 },
  },
};


const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const inputs = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const Introduction = {
  initial: { y: 60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const HomePage= () => {

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      setIsInView(entries[0].isIntersecting);
    });

    observer.observe(document.getElementById("intro")); 

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      exit={{ opacity: 0 }}

    >
      <motion.div
        variants={content}
        animate="animate"
        initial="initial"
      >
        <motion.div
          variants={title}
          className={`flex flex-col w-full mb-6 pl-5 text-4xl font-bold text-center ${merriweather.className}`}
        >
          <h1> Hi <span className={classes.wave}>👋</span></h1>

        </motion.div>
        <motion.div
          variants={inputs}
          className={`flex flex-col w-full justify-center mb-6 text-4xl font-bold text-center items-center gap-5 ${merriweather.className}`}>
          <p>This is Hosein</p>
          <Image src="/images/Hosein.png" alt="Hosein" width={700} height={150} className="rounded-lg" />
        </motion.div>

        <motion.div
          variants={Introduction}
          animate={isInView ? "animate" : "initial"}
          id="intro"            
          className={`flex flex-col w-full mb-12 text-4xl justify-center font-medium text-center items-center gap-5 ${merriweather.className}`}>
          <p className={`w-full leading-relaxed md:leading-snug ${classes.hide}`} >  A <strong>frontend developer</strong> <br/> who translates ideas <br/> into intuitive <br/> interfaces.</p>

          {/* Desktop */}
          <p className="w-full leading-relaxed md:hidden md:leading-snug ">  A <strong>frontend developer</strong> who translates ideas <br/> into intuitive interfaces.</p>
        </motion.div>

      </motion.div>
    </motion.section>
  );
};

export default HomePage;