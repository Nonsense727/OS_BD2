import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Slide from '../components/Presentation/Slide'
import Controls from '../components/Presentation/Controls'
import { slides } from '../Data/slides'

// 1. Бүх зургийг импортлох. Таны зургийн файлууд '../images/' фолдерт байгаа гэж үзнэ.
// Ирээдүйд зураг нэмэх үед зөвхөн энэ хэсэгт нэмэхэд хангалттай.
import img1 from '../images/img1.jpg'; 
import img2 from '../images/img2.png'; 
import img3 from '../images/img3.jpg'; 
import img4 from '../images/img4.png'; 
import img5 from '../images/img5.png'; 

// 2. Импортолсон зургуудыг key-value хослолоор хадгалах объект
const imageMap = {
  // slides.js доторх visualHint талбар дахь нэртэй тааруулна
  'img1': img1, 
  'img2': img2,
  'img3': img3,
  'img4': img4,
  'img5': img5,
};

// 3. Slides data-г зургийн URL-аар баяжуулах функц
const slidesWithImages = slides.map(slide => {
  const imageKey = slide.visualHint;
  
  // Хэрэв visualHint нь 'img1', 'img2' гэх мэт imageMap дотор байгаа нэр байвал
  if (imageMap[imageKey]) {
    // visualHint талбарын утгыг импортлогдсон зургийн URL-аар орлуулна.
    return { ...slide, visualHint: imageMap[imageKey] };
  }
  
  // Хэрэв зураггүй эсвэл буруу нэр өгсөн бол өмнөх утгаар нь үлдээнэ.
  return slide; 
});


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
    if (currentSlide < slidesWithImages.length) { // slidesWithImages-ийг ашиглана
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
  
  // SlidesWithImages-аас одоогийн слайдны датаг хайна
  const currentSlideData = slidesWithImages.find(slide => slide.id === currentSlide)

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
        totalSlides={slidesWithImages.length} // slidesWithImages-ийг ашиглана
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
    // 💡 Слайдны өндөр 700px байсан тул controls-ийг ил гаргахын тулд нэмэгдүүлэв
    height: '750px', 
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