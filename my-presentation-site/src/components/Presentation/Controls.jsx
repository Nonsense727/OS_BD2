import { motion } from 'framer-motion'

const Controls = ({ currentSlide, totalSlides, onNext, onPrev, onRestart }) => {
  return (
    <div style={styles.controls}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onPrev}
        disabled={currentSlide === 1}
        style={{
          ...styles.button,
          opacity: currentSlide === 1 ? 0.5 : 1
        }}
      >
        ← Previous
      </motion.button>
      
      <div style={styles.progress}>
        <div style={styles.progressBar}>
          <div 
            style={{
              ...styles.progressFill,
              width: `${(currentSlide / totalSlides) * 100}%`
            }}
          />
        </div>
        <span style={styles.progressText}>
          Slide {currentSlide} of {totalSlides}
        </span>
      </div>
      
      <div style={styles.rightButtons}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRestart}
          style={styles.secondaryButton}
        >
          Restart
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          style={{
            ...styles.button,
            opacity: currentSlide === totalSlides ? 0.5 : 1
          }}
        >
          Next →
        </motion.button>
      </div>
    </div>
  )
}

const styles = {
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '3rem',
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    zIndex: 10, 
    position: 'relative',
  },
  button: {
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    color: 'white',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '50px',
    fontSize: '1rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    minWidth: '120px',
  },
  secondaryButton: {
    background: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    padding: '0.8rem 1.5rem',
    borderRadius: '50px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginRight: '1rem',
  },
  progress: {
    flex: 1,
    margin: '0 2rem',
  },
  progressBar: {
    height: '8px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '4px',
    overflow: 'hidden',
    marginBottom: '0.5rem',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #667eea, #764ba2)',
    borderRadius: '4px',
    transition: 'width 0.3s ease',
  },
  progressText: {
    color: 'white',
    fontSize: '0.9rem',
    textAlign: 'center',
    display: 'block',
  },
  rightButtons: {
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    minHeight: 'calc(100vh - 100px)',
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    height: '200px'
  },
  presentationContainer: {
    position: 'relative',
    height: '750px', 
    marginBottom: '2rem', 
  },
}

export default Controls