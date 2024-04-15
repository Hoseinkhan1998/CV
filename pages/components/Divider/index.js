import React from 'react'
import classes from './index.module.css'

const Divider = ({ mt }) => {
  return (
    <div className="w-full flex flex-row">
      <div className={classes.divider} style={{ marginTop: mt }}></div>
      <div className={classes.divider2} style={{ marginTop: mt }}></div>
    </div>
  )
}

export default Divider