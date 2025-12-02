import { motion } from 'framer-motion'

const Slide = ({ slide, isActive, direction }) => {
  const variants = {
    // ... (Your existing variants code)
    enter: (direction) => ({
      x: direction > 0 ? 1500 : -1500,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1500 : -1500,
      opacity: 0
    })
  };

  const renderContent = (contentString) => {
    const lines = contentString.split('\n').filter(line => line.trim() !== '');
    return (
      <ul style={styles.contentList}>
        {lines.map((line, index) => (
          <motion.li 
            key={index} 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            style={styles.listItem}
          >
            {line.trim().startsWith('-') || line.trim().startsWith('•') || line.trim().startsWith('1.') ? line : `• ${line}`}
          </motion.li>
        ))}
      </ul>
    );
  };

  const backgroundStyle = {
    // Gradient logic (same as before)
    background: slide.backgroundColor === "#1f2937" 
      ? 'linear-gradient(135deg, #1f2937, #374151)'
      : slide.backgroundColor === "#4c51bf" 
      ? 'linear-gradient(135deg, #4c51bf, #6b46c1)'
      : slide.backgroundColor === "#319795"
      ? 'linear-gradient(135deg, #319795, #38b2ac)'
      : slide.backgroundColor === "#f6ad55"
      ? 'linear-gradient(135deg, #f6ad55, #f56565)'
      : slide.backgroundColor === "#9f7aea"
      ? 'linear-gradient(135deg, #9f7aea, #d69e2e)'
      : slide.backgroundColor,
    color: slide.textColor
  };

  // Энэ нь таны Slides data-гаас URL-ийг авч, зөвхөн зураг байвал рендэрлэнэ
  const isImageUrl = slide.visualHint && typeof slide.visualHint === 'string' && (slide.visualHint.startsWith('/') || slide.visualHint.includes('/static/'));
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
          ...backgroundStyle,
        }}
      >
        <div style={styles.slideContent}>
        
          {/* Subtitle & Title (omitted for brevity) */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={styles.subtitle}
          >
            {slide.subtitle}
          </motion.div>
        
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={styles.title}
          >
            {slide.title}
          </motion.h1>

          <div style={styles.mainGrid}>
            
            {/* Left Column: List Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              style={styles.contentArea}
            >
              {renderContent(slide.content)}
            </motion.div>

         <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
  style={styles.visualHintBox}
>
  {Array.isArray(slide.visualHints) ? (
    slide.visualHints.map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`${slide.title} diagram ${i + 1}`}
        style={styles.actualImage}
      />
    ))
  ) : slide.visualHint ? (
    <img
      src={slide.visualHint}
      alt={slide.title + " diagram"}
      style={styles.actualImage}
    />
  ) : (
    <>
      <p style={styles.visualHintText}>ВИЗУАЛ ЭЛЕМЕНТ (ЗУРАГ) ОРУУЛАХ ХЭСЭГ</p>
      <code style={styles.visualHintCode}>{slide.visualHint}</code>
    </>
  )}
</motion.div>
          </div>
        
          {/* Slide Number (omitted for brevity) */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.0, type: "spring" }}
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
      height: '750px', // Increased height for more content
      borderRadius: '20px',
      padding: '4rem',
      display: 'flex',
      alignItems: 'flex-start', // Align content to the top
      justifyContent: 'center',
      boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
      overflow: 'hidden',
      position: 'relative',
      // Assuming a modern font is applied globally
      fontFamily: 'Inter, sans-serif',
    },
    slideContent: {
      width: '100%',
      maxWidth: '1200px',
      textAlign: 'left',
    },
    subtitle: {
      fontSize: '1.4rem',
      opacity: 0.8,
      marginBottom: '0.5rem',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '3px',
    },
    title: {
      fontSize: '4.5rem', // Larger title
      marginBottom: '2.5rem',
      fontWeight: '900', // Extra bold
      lineHeight: 1.1,
      borderBottom: '4px solid rgba(255,255,255,0.2)', // Underline for title
      paddingBottom: '1rem',
    },
    mainGrid: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr', // 2/3 for content, 1/3 for image
      gap: '3rem',
      marginTop: '2rem'
    },
    contentArea: {
      fontSize: '1.4rem',
      lineHeight: 1.8,
    },
    contentList: {
      paddingLeft: '1.5rem',
      listStyleType: 'none', // Use custom bullets
      margin: 0,
    },
    listItem: {
      marginBottom: '1rem',
      position: 'relative',
      paddingLeft: '1.5rem',
    },
    visualHintBox: {
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: '15px',
      padding: '2rem',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: '3px dashed rgba(255,255,255,0.4)',
    },
    visualHintText: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      opacity: 0.8,
      marginBottom: '1rem',
      textAlign: 'center'
    },
    visualHintCode: {
      fontSize: '0.9rem',
      backgroundColor: 'rgba(0,0,0,0.2)',
      padding: '0.5rem',
      borderRadius: '5px',
      whiteSpace: 'pre-wrap',
      textAlign: 'center'
    },
    slideNumber: {
      position: 'absolute',
      bottom: '2rem',
      right: '2rem',
      background: 'rgba(0,0,0,0.3)',
      padding: '0.7rem 1.2rem',
      borderRadius: '30px',
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    actualImage: {
      width: '100%',
      height: 'auto',
      maxHeight: '100%',
      objectFit: 'contain',
      borderRadius: '10px'
    }
  }

export default Slide

