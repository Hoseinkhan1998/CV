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
          <Skills skills={["NEXT.JS", "React", "Tailwind", "Framer Motion"]} img="project2.png" link="http://localhost:3000/" />
        </Section>

        <Section translateStyle={"translateX(400px)"}>
          <Skills skills={["HTML", "CSS", "NEXT.JS", "React", "Tailwind"]} img="mohma.png" link="https://mohammad-portfolio-orcin.vercel.app/" />
        </Section>

        <Section translateStyle={"translateX(-400px)"}>
          <Skills skills={["React", "Tailwind", "Syncfusion", "Eslint"]} img="dashboard.png" link="https://dashboard-five-flax.vercel.app/" />
        </Section>

        <Section translateStyle={"translateX(400px)"}>
          <Skills skills={["NEXT.JS", "React", "Mongo db", "SWR", "Html&Css"]} img="event.png" link="https://nextjs-tutorial-coral-three.vercel.app/" />
        </Section>

        <Section translateStyle={"translateX(-400px)"}>
          <Skills skills={["NEXT.JS", "React", "Mongo db", "Html", "CSS"]} img="nextjs-tutorial.png" link="https://my-first-next-js-demo.vercel.app/" />
        </Section>

        <Section translateStyle={"translateX(400px)"}>
          <Skills skills={["HTML", "CSS", "React", "Tailwind"]} img="tp.png" link="https://tutorial-portfolio-wheat.vercel.app/" />
        </Section>

        <Section translateStyle={"translateX(-400px)"}>
          <Skills skills={["React", "MUI", "Axios", "Emotion"]} img="clone.png" link="https://youtube-clone-xi-five.vercel.app/" />
        </Section>

        <Section translateStyle={"translateX(400px)"}>
          <Skills skills={["mui-tel", "MUI", "verification-input", "React", "Tailwind", "swipeable views"]} img="fintech.png" link="https://fintech-mobile-app-psi.vercel.app/" />
        </Section>

        <Section translateStyle={"translateX(-400px)"}>
          <Skills skills={["pro-sidebar", "MUI", "React", "Tailwind",]} img="todo.png" link="https://todo-pied-five.vercel.app/" />
        </Section>

      </motion.div>
    </motion.div>
  )
}

export default transition(Projects)