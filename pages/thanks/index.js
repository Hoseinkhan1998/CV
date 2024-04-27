import { faCircleCheck, faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'
import Social from '../../components/Social'
import classes from './index.module.css'
import { useRouter } from "next/router";
const Thanks = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
        router.push('/');
    }, 1000);
}
  return (
    <div className='flex m-auto fafa w-full flex-col items-center justify-center'>
      <FontAwesomeIcon icon={faCircleCheck} size="10x" style={{ color: "#63E6BE", }} />
      <div className='flex mt-4 gap-2 flex-col justify-center items-center text-center font-semibold text-3xl'>
        <p>Your submission was</p>
        <div className='flex flex-row gap-2 items-center'>
          <p> successful</p>
          <FontAwesomeIcon icon={faFaceSmileBeam} bounce style={{ color: "#9f63bf", }} />
        </div>
      </div>
      <div className='flex justify-center text-slate-500 flex-col text-center mt-9 '>
        <p>Thank you for your time and the message you sent</p>
        <p>I will try to answer you as soon as possible</p>
        <div className='gap-10 flex flex-col'>
          <Link href="/" className={classes.glowonhover} onClick={handleClick}>
            Go Back
          </Link>
          <Social />
        </div>
      </div>
    </div>

  )
}

export default Thanks

