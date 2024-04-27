import React from 'react'
import classes from "./index.module.css"
import Link from 'next/link'


const Skills = ({ skills, img, link }) => {
    return (
        <div className={classes.container}>
            <div className={classes.skill1} style={{ backgroundImage: `url(/images/${img})` }}>
                <div className={`w-full flex flex-col px-6 ${classes.content}`}>
                    <div className={`flex flex-wrap justify-center gap-2 `} style={{padding: '15% 12%',height: '200px' }}>
                        {skills.map((skill) => {
                            return (
                                <div className='flex justify-center items-center font-extralight text-white px-4 bg-transparent rounded-lg'
                                    style={{ border: 'solid 1px white', height: '23px' }}
                                >
                                    {skill}
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-3/12 lg:w-3/12'>
                        <Link href={link} target='-blank' className='flex text-white font-semibold bor py-1 justify-center items-center rounded-lg mb-6'
                            style={{ backgroundColor: "rgba(5, 5, 5, 0.50)", border: 'solid 2px white' }}
                        >Visit</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills