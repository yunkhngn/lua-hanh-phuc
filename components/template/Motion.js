import { motion} from 'framer-motion'

const animation = {
    initial: {
      opacity: 0,
      y : -50,
    },
    animate: {
      opacity: 1,
      y : 0,
    },
    exit: {
      opacity: 0,
      y : -50,
    }
  }

  const transition = {
    duration: 0.4,
    ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for smooth transitions
    type: "easeInOut",
}

const Motion = ({children}) => {
  return (
    <motion.main
    variants={animation}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={transition}
    >{children}</motion.main>
  )
}

export default Motion