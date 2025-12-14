import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Slide from '../components/Presentation/Slide'
import Controls from '../components/Presentation/Controls'
import slides from '../data/slidesData'

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.png';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import img7 from '../images/img7.webp';
import img9 from '../images/img9.png';
import img10 from '../images/img10.png';
import img11 from '../images/img11.png';
import img11_1 from '../images/img11_1.png';
import img11_2 from '../images/img11_2.png';
import img16_1 from '../images/img16_1.png';
import img16_2 from '../images/img16_2.png';
import img18 from '../images/img18.png';
import img19 from '../images/img19.png';
import img20 from '../images/img20.png';


const imageMap = {
  'img1': img1,
  'img2': img2,
  'img3': img3,
  'img4': img4,
  'img5': img5,
  'img6': img6,
  'img7': img7,
  'img9': img9,
  'img10': img10,
  'img11': img11,
  'img11_1': img11_1,
  'img11_2': img11_2,
  'img16_1': img16_1,
  'img16_2': img16_2,
  'img18': img18,
  'img19': img19,
  'img20': img20,
  'img21': img21,
  'img22': img22,
  'img23': img23,
  'img24': img24,
  'img25': img25,
  'img26': img26,
};

const slidesWithImages = slides.map(slide => {
  let updatedSlide = { ...slide };

  if (slide.layout === 'dual' && imageMap[slide.visualHint]) {
    updatedSlide.visualHint = imageMap[slide.visualHint];
  }

  if (slide.layout === 'comparison' && slide.comparisonData) {
    if (imageMap[slide.comparisonData.left.visualHint]) {
      updatedSlide.comparisonData.left.visualHint = imageMap[slide.comparisonData.left.visualHint];
    }
    if (imageMap[slide.comparisonData.right.visualHint]) {
      updatedSlide.comparisonData.right.visualHint = imageMap[slide.comparisonData.right.visualHint];
    }
  }

  return updatedSlide;
});


const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
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
    if (currentSlide < slidesWithImages.length) {
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

  const currentSlideData = slidesWithImages.find(slide => slide.id === currentSlide)


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={styles.container} // Шинэ container style-ийг ашиглана
    >

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
        totalSlides={slidesWithImages.length}
        onNext={handleNext}
        onPrev={handlePrev}
        onRestart={handleRestart}
      />
    </motion.div>
  )
}

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    overflow: 'hidden', // Scrollbar-ийг устгах
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  presentationContainer: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    marginBottom: 0,
  },

  keyboardHint: {
    position: 'fixed',
    bottom: '10px',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: '2rem',
    fontSize: '0.9rem',
    width: '100%',
  }
}

export default Presentation