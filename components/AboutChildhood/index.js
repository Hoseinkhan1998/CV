import React from 'react';
import classes from './index.module.css';
import { Roboto } from '@next/font/google';
import { motion } from "framer-motion";
import Pip from '../Pip';
import Link from 'next/link';

const merriweather = Roboto({
  subsets: ['latin'],
  weight: ['700', '400']
})

const AboutChildhood = () => {
  const appRef = React.useRef(null);
  return (
    <div
      className={`${classes.container} ${merriweather.className}`}
      
    >
      <div className={classes.about}>
        <p className='text-gray-400 text-xl'>1998 - 2005</p>
        <p style={{ fontSize: '18px' }} >
          I was born in 1998 in a family of 5 in Tehran.
          I have three brothers, and my third brother,
          <Link target='newtap' className={classes.mohoma} href='https://github.com/mohoma'> Mohammad </Link>
          encouraged me to enter the programming profession as a professional back-end developer.
        </p>
      </div>
      <div
        className={classes.pic}
        ref={appRef}
      >
        <Pip appRef={appRef} src="/images/boy.png" rotate="-20" />
        <Pip appRef={appRef} src="/images/boy2.png" />

      </div>
    </div>
  )
}

export default AboutChildhood