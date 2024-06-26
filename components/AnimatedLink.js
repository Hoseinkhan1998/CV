import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AnimatedLink = ({ title, href }) => {
    const [isHovered, setHovered] = useState(false);
    
    return (
        <motion.div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative overflow-hidden cursor-pointer"
            
        >
            <AnimatedWord title={title} href={href} animation={letterAnimation} isHovered={isHovered} />
            <div className='absolute top-0'>
                <AnimatedWord title={title} href={href} animation={letterAnimationTwo} isHovered={isHovered} />
            </div>
        </motion.div>
    )
}

export default AnimatedLink

const titleAnimation = {
    rest: {
        transition: {
            staggerChildren: 0.003,
        },
    },
    hover: {
        transition: {
            staggerChildren: 0.003,
        },
    },
    
};


const letterAnimation = {
    rest: {
        y: 0,
    },
    hover: {
        y: -30,
        transition: {
            duration: 0.5,
            ease: [0.6, 0.01, 0.05, 0.95],
            type: "tween",
        },
    },
};

const letterAnimationTwo = {
    rest: {
        y: 30,
    },
    hover: {
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.6, 0.01, 0.05, 0.95],
            type: "tween",
        },
    },
};

const AnimatedLetter = ({ character, animation }) => {
    return (
        <motion.span
            variants={animation}
            className="relative inline-block whitespace-nowrap"
        >
            {character}
        </motion.span>
    );
};

const AnimatedWord = ({ title, animation, isHovered, href }) => {
    return (
        <Link href={href || ""}>
            <motion.span
                variants={titleAnimation}
                initial="rest"
                animate={isHovered ? "hover" : "rest"}
                className='relative whitespace-nowrap'
            >
                {title
                    .split("")
                    .map((character, i) =>
                        character === " " ? (
                            <span key={i}>&nbsp;</span>
                        ) : (
                            <AnimatedLetter character={character} animation={animation} />
                        )
                    )}
            </motion.span>
        </Link>
    );
};