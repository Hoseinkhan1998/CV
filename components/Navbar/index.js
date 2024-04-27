import Link from 'next/link'
import React from 'react'
import AnimatedLink from '../AnimatedLink';
import { Oswald } from '@next/font/google'
import { Modak } from '@next/font/google'
import Social from '../Social';
import { motion } from "framer-motion";
import classes from "./index.module.css"

const oswald = Oswald({
    subsets: ['latin'],
    weight: '700'
})

const modak = Modak({
    subsets: ['latin'],
    weight: '400'
})

const content = {
    animate: {
        transition: { staggerChildren: 0.5 },
    },
};

const name = {
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

const nav = {
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

function Menu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
const Navbar = () => {

    const navlink = [
        { title: 'About', href: '#about' },
        { title: 'Projects', href: '#skills&projects' },
        { title: 'Contact', href: '#contact' },
    
    ]

    return (
        <motion.section
            exit={{ opacity: 0 }}
        >
            <motion.div
                variants={content}
                animate="animate"
                initial="initial"
                className='flex items-center uppercase w-full justify-between pb-5'

            >
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }} variants={name} >
                    <Link href='/' className={`${classes.name} ${modak.className}`}>Hosein Mazinani</Link>
                    <Link href='/' className={`${classes.name2} ${modak.className}`}>H.M</Link>
                </motion.div>
                <motion.div variants={nav}>
                    <div className={`flex flex-row gap-12 ${oswald.className}`}>
                        {navlink.map((link, i) => {
                            return (
                                <>
                                    <div className='relative'>
                                        <AnimatedLink title={link.title} href={link.href} />

                                    </div>
                                </>
                            )
                        })}
                    </div>
                </motion.div>
                {/* <div className='hidden lg:block'>
                    <Social />
                </div> */}
            </motion.div>
        </motion.section>
    )
}
export default Navbar
