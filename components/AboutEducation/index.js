import React from 'react';
import classes from './index.module.css';
import { Roboto } from '@next/font/google';
import { motion } from "framer-motion";
import Link from 'next/link';
import KharazmiPic from './KharazmiPic';


const merriweather = Roboto({
    subsets: ['latin'],
    weight: ['700', '400']
})

const AboutEducation = () => {
    return (
        <motion.div
            className={`${classes.container} ${merriweather.className}`}
        >
            <div className='flex flex-col gap-3'>
                <p className='flex text-gray-400 text-xl'>2005 - 2022</p>
                <p style={{ fontSize: '18px' }} >
                    I spent 12 years in elementary and high school. During high school, I became interested in the field of humanities and with a rank of 840, I studied economics at Tehran's Kharazmi University. I successfully completed 4 years of university and was working in a shop as a salesman next to him so that I could pay my expenses.
                </p>
                <div className='w-full bg-orange-200 rounded-xl italic text-xs p-3'>
                    <strong>Note:</strong> All these years I knew something was missing inside me.
                    Because I loved playing video games and whenever I did something with my laptop, like Photoshop or something else, I enjoyed it much more.
                </div>
            </div>
            <motion.div className={classes.pic}>
                <KharazmiPic />
            </motion.div>

        </motion.div>
    )
}

export default AboutEducation