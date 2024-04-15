import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import classes from "./index.module.css"

const content = {
  animate: {
    transition: { staggerChildren: 0.5 },
  },
};

const insta = {
  initial: { y: -40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const github = {
  initial: { x: -40, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const twitter = {
  initial: { y: 40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const linkedin = {
  initial: { x: 40, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const Social = () => {
  return (
    <div className='flex flex-row gap-4 justify-center items-center'>

      <motion.section 
        exit={{ opacity: 0 }}
        
      >
        <motion.div
          variants={content}
          animate="animate"
          initial="initial"
          className='flex flex-row gap-6 justify-center items-center'
          
        >
          <motion.div whileHover={{ scale: 1.6 }} 
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          variants={insta}>
            <Link href="https://www.instagram.com/hoseinma20?igsh=eXdnd25sajR1dnJl" target='newtab' >
            <FontAwesomeIcon icon={faInstagram} className={classes.social} />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.6 }} 
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          variants={github}>
            <Link href="https://github.com/Hoseinkhan1998" target='newtab'>
            <FontAwesomeIcon icon={faGithub} className={classes.social} />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.6 }} 
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          variants={twitter}>
            <Link href="https://github.com/Hoseinkhan1998" target='newtab' >
            <FontAwesomeIcon icon={faXTwitter} className={classes.social} />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.6 }} 
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          variants={linkedin}>
            <Link href="https://www.linkedin.com/in/hosein-mazinani-8565a02b1/" target='newtab'>
            <FontAwesomeIcon icon={faLinkedinIn} className={classes.social} />
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

    </div>
  )
}

export default Social