import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import Divider from '../../components/Divider';
import AboutChildhood from '../../components/AboutChildhood';
import AboutEducation from '../../components/AboutEducation';
import Introduction from '../../components/Introduction';
import AndNow from '../../components/Now';
import BlinkText from '../../components/BlinkText';



const AboutMe = () => {

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
   
      <motion.div
        className='flex w-full flex-col mt-9'
      >
        <div className=' bg-gray-100 rounded-lg'>
          <BlinkText one="A" two="b" three="o" four="u" five="t" six="&nbsp;" seven="M" eight="e" />
        </div>
        <motion.div>
          <Section translateStyle={"translateX(-400px)"}>
            <AboutChildhood />
          </Section>

        </motion.div>
        <Divider />
        <motion.div>
          <Section translateStyle={"translateY(200px)"}>
            <AboutEducation />
          </Section>
        </motion.div>
        <Divider mt="2%" />
        <motion.div>

          <Section >
            <Introduction />
          </Section>

        </motion.div>
        <Divider mt="80px" />
        <motion.div>

          <Section translateStyle={"translateX(200px)"}>
            <AndNow />
          </Section>

        </motion.div>
      </motion.div>
  );
};



export default AboutMe