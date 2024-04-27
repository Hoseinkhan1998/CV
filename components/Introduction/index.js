import React from 'react';
import { Roboto } from '@next/font/google';
import { motion } from "framer-motion";
import classes from "./index.module.css"
import Link from 'next/link';


const merriweather = Roboto({
    subsets: ['latin'],
    weight: ['700', '400']
})

const Introduction = () => {
    return (
        <div
            className={` mt-4 ${merriweather.className}`}
        >
            <div className='flex flex-col gap-5'>
                <p className='flex text-gray-400 text-xl'>2022 - 2024</p>
                <div className={classes.container}>
                    <div className={`flex bg-slate-100 p-3 cursor-default rounded-lg ${classes.card}`}>
                        <p className='text-center' >
                            It was exactly the beginning of 2022 when my brother started talking about programming. At that time, he had about 8 years of work experience and introduced programming to me as a promising career.
                            At first glance, I rejected this work as a job, but the further I went, I realized that I was getting interested, and it reached the point where I realized, < span className={classes.words}>Oh my God, this is exactly what I want and I like it.</span>
                        </p>
                    </div>

                    <div className={`flex bg-slate-100 p-3 cursor-default rounded-lg ${classes.card}`}>
                        <p className='text-center' >
                            At first, I started with < span className={classes.words}> Html</span> and < span className={classes.words}>Css</span> and I went through all the courses on the< Link href="https://www.w3schools.com/html/" className={classes.link}>W3school</Link> site and studied carefully, and as I progressed, I became more interested in the front and more in the accurate and beautiful design of the pages.
                            After that, I went to React and got to know many libraries and I realized what a wide world was opened to Rome and I continued. I got acquainted with JavaScript, I did several complete and semi-complete projects with< span className={classes.words}> React JS</span>, and I also started working with< span className={classes.words}> next.js</span>, and for two years, I focused on learning and passing courses without any breaks or other work.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction