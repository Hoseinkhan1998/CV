import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./image-data";
import classes from "./index.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 0 : -0,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 0 : -0,
    opacity: 0,
  }),
};


const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const KharazmiPic = () => {
  const [[page, direction], setPage, setAutoplayInterval] = useState([0, 0, null]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage([page + 1, 1]); 
    }, 3000); 
  
    return () => clearInterval(timer); 
  }, [page]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    clearInterval(setAutoplayInterval);
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img className={classes.pice}
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.7 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className={classes.next} onClick={() => paginate(1)}>
      <FontAwesomeIcon icon={faChevronRight} style={{color: "rgb(104 104 104)", fontSize: '20px'}} />
      </div>
      <div className={classes.prev} onClick={() => paginate(-1)}>
      <FontAwesomeIcon icon={faChevronLeft} style={{color: "rgb(104 104 104)", fontSize: '20px'}} />
      </div>
    </>
  );
};

export default KharazmiPic;
