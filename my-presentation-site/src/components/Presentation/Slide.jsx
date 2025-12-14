import { motion } from 'framer-motion'

const Slide = ({ slide, isActive, direction }) => {
  const variants = {
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

  const renderMedia = (media) => {
    if (!media) return null;

    switch (media.type) {
      case 'image':
        return (
          <div style={styles.mediaContainer}>
            <img
              src={media.url}
              alt={media.alt}
              style={styles.media}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML =
                  <div style="padding: 2rem; background: rgba(0,0,0,0.3); border-radius: 10px; text-align: center;">
                   <div style="font-size: 3rem;">🖼️</div>
                   <p>Image: ${media.alt}</p>
                   <p style="font-size: 0.8rem; opacity: 0.7;">(https://media.geeksforgeeks.org/wp-content/uploads/121-1.png)</p>
                 </div>;
              }}
            />
          </div>
        );

      case 'video':
        return (
          <div style={styles.mediaContainer}>
            <video
              controls
              style={styles.media}
              poster="https://via.placeholder.com/800x450/1a237e/ffffff?text=Video+Placeholder"
            >
              <source src={media.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        );

      case 'gif':
        return (
          <div style={styles.mediaContainer}>
            <img
              src={media.url}
              alt={media.alt}
              style={styles.media}
            />
          </div>
        );

      case 'interactive':
        return (
          <div style={styles.mediaContainer}>
            <iframe
              src={media.url}
              style={styles.interactiveFrame}
              title={media.alt}
            />
          </div>
        );

      case 'embed':
        return (
          <div style={styles.mediaContainer}>
            <div style={styles.embedPlaceholder}>
              <div style={{ fontSize: '4rem' }}>🎮</div>
              <h3>Interactive 3D Model</h3>
              <p>{media.alt}</p>
              <a href={media.url} target="_blank" rel="noopener noreferrer"
                style={styles.modelLink}>
                Open 3D Model →
              </a>
            </div>
          </div>
        );

      default:
        return null;
    }
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

  // --- ШИНЭ КОМПОНЕНТ: ХҮСНЭГТ РЕНДЭРЛЭГЧ ---
  const TableVisual = ({ tableData }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
      style={styles.tableContainer}
    >
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeaderRow}>
            {tableData.headers.map((h, i) => (
              <th key={i} style={styles.tableHeader}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, rowIndex) => (
            <motion.tr
              key={rowIndex}
              style={styles.tableRow}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + rowIndex * 0.1 }}
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} style={styles.tableCell}>
                  {cellIndex === 0 ? <strong style={{ fontWeight: 600 }}>{cell}</strong> : cell}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );

  // --- ШИНЭ КОМПОНЕНТ: ХАРЬЦУУЛАЛТ РЕНДЭРЛЭГЧ ---
  const ComparisonVisual = ({ comparisonData }) => (
    <div style={styles.comparisonGrid}>
      {['left', 'right'].map((key, index) => (
        <motion.div
          key={key}
          style={styles.comparisonItem}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + index * 0.3, type: "spring", stiffness: 150 }}
        >
          {/* Зургийг рендэрлэх */}
          <img
            src={comparisonData[key].visualHint}
            alt={comparisonData[key].title}
            style={styles.comparisonImage}
          />
          <h3 style={styles.comparisonTitle}>{comparisonData[key].title}</h3>
          <p style={styles.comparisonDescription}>{comparisonData[key].description}</p>
        </motion.div>
      ))}
    </div>
  );

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

        {/* --- MAIN CONTENT SWITCHING LOGIC (Using slide.layout) --- */}
        {slide.layout === 'table' && slide.tableData ? (
          <>
            {/* Table description content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              style={styles.contentAreaTable}
            >
              <p style={{ fontSize: '1.2rem' }}>{slide.content}</p>
            </motion.div>
            <TableVisual tableData={slide.tableData} />
          </>
        ) : slide.layout === 'comparison' && slide.comparisonData ? (
          <>
            {/* Comparison description content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              style={styles.contentAreaTable}
            >
              <p style={{ fontSize: '1.2rem' }}>{slide.content}</p>
            </motion.div>
            <ComparisonVisual comparisonData={slide.comparisonData} />
          </>
        ) : (
          // Dual Column (Content + Visual) - Default Layout
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

            {/* Right Column: Visual Hint/Image Rendering */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
              style={styles.visualHintBox}
            >
              {isImageUrl ? (
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
        )}

        {/* Slide Number (Fixed Position) */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.0, type: "spring" }}
          style={styles.slideNumber}
        >
          {slide.id} / 23
          
        </motion.div>
      </div>
    </motion.div>
  )
}

const styles = {
  slide: {
    width: '100vw',
    height: '100vh',
    borderRadius: 0,
    padding: '5vh 8vw', // Агуулгыг цонхны хэмжээнд харьцуулан төвлөрүүлнэ
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    boxShadow: 'none',
    overflow: 'hidden',
    position: 'absolute',
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
    fontSize: '4.5rem',
    marginBottom: '2.5rem',
    fontWeight: '900',
    lineHeight: 1.1,
    borderBottom: '4px solid rgba(255,255,255,0.2)',
    paddingBottom: '1rem',
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '3rem',
    marginTop: '2rem'
  },
  contentArea: {
    fontSize: '1.4rem',
    lineHeight: 1.8,
  },
  contentAreaTable: {
    fontSize: '1.4rem',
    lineHeight: 1.6,
    marginBottom: '1rem',
  },
  contentList: {
    paddingLeft: '1.5rem',
    listStyleType: 'none',
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
    position: 'fixed', // Цонхны буланд наалдсан
    bottom: '20px',
    right: '20px',
    background: 'rgba(0,0,0,0.3)',
    padding: '0.7rem 1.2rem',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    zIndex: 10, // Controls-ийн дээд талд байлгах
  },
  actualImage: {
    width: '100%',
    height: 'auto',
    maxHeight: '100%',
    objectFit: 'contain',
    borderRadius: '10px'
  },
  // --- TABLE STYLES ---
  tableContainer: {
    width: '100%',
    overflowX: 'auto',
    marginTop: '1rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    borderRadius: '10px',
    backgroundColor: 'rgba(0,0,0,0.1)',
    border: '1px solid rgba(255,255,255,0.2)'
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
  },
  tableHeaderRow: {
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  tableHeader: {
    padding: '1.5rem',
    textAlign: 'left',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    borderBottom: '2px solid rgba(255,255,255,0.2)',
  },
  tableRow: {
    transition: 'background-color 0.3s',
  },
  tableCell: {
    padding: '1.5rem',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    fontSize: '1.1rem',
  },
  // --- COMPARISON STYLES ---
  comparisonGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    marginTop: '2rem',
    height: '450px',
  },
  comparisonItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '15px',
    padding: '1.5rem',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
  },
  comparisonImage: {
    width: '100%',
    maxHeight: '250px',
    objectFit: 'contain',
    borderRadius: '8px',
    marginBottom: '1rem',
    border: '3px solid rgba(255,255,255,0.5)',
  },
  comparisonTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    textAlign: 'center',
  },
  comparisonDescription: {
    fontSize: '1rem',
    textAlign: 'center',
    opacity: 0.7,
  },
   // NEW MEDIA STYLES
  mediaContainer: {
    margin: '1.5rem 0',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    border: '2px solid rgba(255,255,255,0.1)',
  },
  
  media: {
    width: '100%',
    height: 'auto',
    maxHeight: '300px',
    objectFit: 'cover',
    display: 'block',
  },
  
  interactiveFrame: {
    width: '100%',
    height: '400px',
    border: 'none',
    borderRadius: '10px',
  },
  
  embedPlaceholder: {
    padding: '3rem',
    textAlign: 'center',
    background: 'linear-gradient(145deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6))',
    borderRadius: '15px',
    border: '2px dashed rgba(255,255,255,0.2)',
  },
  
  modelLink: {
    display: 'inline-block',
    marginTop: '1rem',
    padding: '0.8rem 1.5rem',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '25px',
    fontWeight: 'bold',
    transition: 'all 0.3s',
  },
  
  // // UPDATE title style for BIGGER TEXT
  // title: {
  //   fontSize: '3.2rem', // INCREASED FROM 2.5rem
  //   marginBottom: '1.5rem',
  //   fontWeight: 'bold',
  //   lineHeight: 1.1,
  //   textShadow: '0 4px 20px rgba(0,0,0,0.5)',
  //   letterSpacing: '0.5px',
  // },
  
  // NEW STATS BOX
  statsBox: {
    background: 'rgba(255,255,255,0.1)',
    padding: '1rem',
    borderRadius: '10px',
    marginTop: '1rem',
    borderLeft: '4px solid #4CAF50',
    fontSize: '1.1rem',
    fontWeight: '500',
  },
}

export default Slide
