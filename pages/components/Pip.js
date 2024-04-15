import { motion } from 'framer-motion'
import React from 'react'

const Pip = ({ appRef, src, rotate }) => {
  return (
    <motion.div
      drag
      dragConstraints={appRef}
      style={{
        position: "relative",
        width: "270px",
        marginBottom: '30%'
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <img
        alt="Hosein"
        src={src}
        style={{
          pointerEvents: "none",
          width: "60%",
          objectFit: "fill",
          borderRadius: '20px',
          transform: `rotate(${rotate}deg)`
        }}
      />
    </motion.div>
  )

}
export default Pip
