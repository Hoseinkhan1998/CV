import React, { useRef } from 'react'
import transition from '@/transition'
import { motion, useInView } from "framer-motion";
import BlinkText from '../../components/BlinkText';
import classes from "./index.module.css"
import Skills from '../../components/Skills';



const Projects = () => {

  function Section({ children, translateStyle }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <section ref={ref}>
        <motion.div
          style={{
            transform: isInView ? "none" : translateStyle,
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </motion.div>
      </section>
    );
  }

  return (
    <motion.div>
      <div className='mb-6 bg-gray-100 rounded-lg mt-24'>
        <BlinkText one="P" two="r" three="o" four="j" five="e" six="c" seven="t" eight="s" />
      </div>
      <motion.div
        className={classes.container}>

        <Section translateStyle={"translateX(-400px)"}>
          <Skills
            skills={["NEXT.JS", "React", "Tailwind", "Framer Motion"]}
            img="project2.png"
            link="https://www.hoseinmazinani.ir"
            description="Hossein's interactive CV built with Next.js and subtle animations in React & Tailwind."
          />
        </Section>

        <Section translateStyle={"translateX(400px)"}>
          <Skills
            skills={["React", "Tailwind", "Syncfusion", "Eslint"]}
            img="dashboard.png"
            link="https://dashboard-five-flax.vercel.app/"
            description="Data-rich React dashboard built with Syncfusion components and styled with Tailwind CSS."
          />
        </Section>

        <Section translateStyle={"translateX(-400px)"}>
          <Skills
            skills={["NEXT.JS", "React", "Mongo db", "SWR", "Html&Css"]}
            img="event.png"
            link="https://nextjs-tutorial-coral-three.vercel.app/"
            description="Dynamic event list app built using Next.js, React, MongoDB, and SWR for data management."
          />
        </Section>

        <Section translateStyle={"translateX(400px)"}>
          <Skills
            skills={["React", "MUI", "Axios", "Emotion"]}
            img="clone.png"
            link="https://youtube-clone-xi-five.vercel.app/" 
            description='YouTube clone app built in React with MUI for a sleek UI and Axios for data management.'
            />
        </Section>

        <Section translateStyle={"translateX(-400px)"}>
          <Skills
            skills={["React", "Tailwind", "Redux", "Next.js"]}
            img="shoppingcard.png"
            link="https://shopping-card-coral.vercel.app/"
            description='Interactive shopping cart built with Next.js, React and Redux for state management.'
            />
        </Section>

        <Section translateStyle={"translateX(400px)"}>
          <Skills
            skills={["mui-tel", "MUI", "React", "Tailwind", "swipeable views"]}
            img="fintech.png"
            link="https://fintech-mobile-app-psi.vercel.app/"
            description= 'A mobile fintech app built with React & MUI, inspired by Figma, featuring swipeable views.'
            />
        </Section>

      </motion.div>
    </motion.div>
  )
}

export default transition(Projects)