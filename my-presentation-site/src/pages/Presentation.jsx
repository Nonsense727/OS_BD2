import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Slide from '../components/presentation/Slide'
import Controls from '../components/presentation/Controls'
import { slides } from '../Data/Slides'

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
  const handleKeyDown = (e) => {
    switch(e.key) {
      case 'ArrowRight':
      case ' ':
        e.preventDefault()
        handleNext()
        break
      case 'ArrowLeft':
        e.preventDefault()
        handlePrev()
        break
      case 'Escape':
        e.preventDefault()
        handleRestart()
        break
      default:
        break
    }
  }

  window.addEventListener('keydown', handleKeyDown)
  return () => window.removeEventListener('keydown', handleKeyDown)
}, [currentSlide])

  const handleNext = () => {
    if (currentSlide < slides.length) {
      setDirection(1)
      setCurrentSlide(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentSlide > 1) {
      setDirection(-1)
      setCurrentSlide(prev => prev - 1)
    }
  }

  const handleRestart = () => {
    setDirection(-1)
    setCurrentSlide(1)
  }

  const currentSlideData = slides.find(slide => slide.id === currentSlide)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={styles.container}
    >
      <h1 style={styles.pageTitle}>Presentation Mode</h1>
      
      <div style={styles.presentationContainer}>
        <AnimatePresence custom={direction} mode='wait'>
          {currentSlideData && (
            <Slide 
              key={currentSlideData.id}
              slide={currentSlideData}
              isActive={true}
              direction={direction}
            />
          )}
        </AnimatePresence>
      </div>

      <Controls
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={handleNext}
        onPrev={handlePrev}
        onRestart={handleRestart}
      />

      <div style={styles.keyboardHint}>
        <p>💡 Use ← → arrow keys to navigate, Space to go next, ESC to restart</p>
      </div>
    </motion.div>
  )
}

const styles = {
  container: {
    minHeight: 'calc(100vh - 100px)',
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  pageTitle: {
    color: 'white',
    fontSize: '2.5rem',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  presentationContainer: {
    position: 'relative',
    height: '600px',
    marginBottom: '2rem',
  },
  keyboardHint: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: '2rem',
    fontSize: '0.9rem',
  }
}

export default Presentation