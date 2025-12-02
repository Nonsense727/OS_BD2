import { motion } from 'framer-motion'

const Slide = ({ slide, isActive, direction }) => {
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }}
      style={{
        ...styles.slide,
        backgroundColor: slide.backgroundColor,
        color: slide.textColor
      }}
    >
      <div style={styles.slideContent}>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={styles.subtitle}
        >
          {slide.subtitle}
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={styles.title}
        >
          {slide.title}
        </motion.h1>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={styles.content}
        >
          {slide.content.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
          style={styles.slideNumber}
        >
          {slide.id} / 5
        </motion.div>
      </div>
    </motion.div>
  )
}

const styles = {
  slide: {
    width: '100%',
    height: '600px',
    borderRadius: '20px',
    padding: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    overflow: 'hidden',
    position: 'relative',
  },
  slideContent: {
    maxWidth: '800px',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '1.2rem',
    opacity: 0.8,
    marginBottom: '1rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  title: {
    fontSize: '3.5rem',
    marginBottom: '2rem',
    fontWeight: 'bold',
    lineHeight: 1.2,
  },
  content: {
    fontSize: '1.5rem',
    lineHeight: 1.6,
    opacity: 0.9,
  },
  slideNumber: {
    position: 'absolute',
    bottom: '2rem',
    right: '2rem',
    background: 'rgba(255,255,255,0.2)',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
  }
}

export default Slide