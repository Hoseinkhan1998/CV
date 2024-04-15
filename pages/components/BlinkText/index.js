import React from 'react';
import classes from "./index.module.css"
import { motion } from 'framer-motion';
import { Assistant } from '@next/font/google'

const merriweather = Assistant({
    subsets: ['latin'],
    weight: ['700']
})

const BlinkText = ({ one, two, three, four, five, six, seven, eight }) => {
    return (
        <motion.div
        // whileHover={{ scale: 1.2 }}
        // whileTap={{ scale: 0.9 }}
        // transition={{ type: "spring", stiffness: 400, damping: 5 }}
        >
            <div className={`flex flex-row text-4xl bg-gray-200 text-slate-100 font-semibold px-3 py-1 items-center rounded-lg ${merriweather.className} ${classes.bg}`}>
                <div class={classes.waitingForConnection}>{one}</div>
                <div class={classes.waitingForConnection2}>{two}</div>
                <div class={classes.waitingForConnection3}>{three}</div>
                <div class={classes.waitingForConnection4}>{four}</div>
                <div class={classes.waitingForConnection5}>{five}</div>
                <div class={classes.waitingForConnection6}>{six}</div>
                <div class={classes.waitingForConnection7}>{seven}</div>
                <div class={classes.waitingForConnection8}>{eight}</div>
            </div>
        </motion.div>
    )
}

export default BlinkText