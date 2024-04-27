import React from 'react'
import HomePage from './home'
import AboutMe from './about'
import Contact from './contact'
import SkillsProjects from './skills&projects'
import Footer from './footer'
import Navbar from '../components/Navbar'
import classes from "./index.module.css"

const Home = () => {
    return (
        <>
            <div className="sticky top-0 z-10 navbar justify-between items-center" style={{ padding: '0.5% 5%' }}>
                <Navbar />
            </div>
            <div className={classes.container}>
                <HomePage />
                <div id='about' className='mb-14'></div>
                <AboutMe />
                <div id='skills&projects' scroll={true}></div>
                <SkillsProjects />
                <div id='contact'  ></div>
                <Contact />
            </div>
            <div className='w-full relative flex bottom-0'>
                <Footer />
            </div>
        </>
    )
}

export default Home