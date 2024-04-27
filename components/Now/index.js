import { motion } from "framer-motion";
import React from 'react';
import { Roboto } from '@next/font/google';
import classes from "./index.module.css"


const merriweather = Roboto({
    subsets: ['latin'],
    weight: ['700', '400']
})

const AndNow = () => {
    return (
        <motion.div
            className={` mt-4 ${merriweather.className}`}
        >
            <div className='flex text-center flex-col gap-9'>
                <p className='text-gray-400 text-xl'>2024 - Now</p>
                <p className="text text-lg">And now you can have a jonior <span className={classes.word}>FrontEnd</span> developer with great <span className={classes.word2}>Motivation</span> and <span className={classes.word3}>Enthusiasm</span> and a unique interest in Programming, as well as a <br/> <span className={classes.word4}>high team spirit</span>, and of course very Carefully and Seriously.</p>
            </div>
        </motion.div>
    )
}

export default AndNow