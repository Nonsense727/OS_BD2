import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={styles.container}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={styles.content}
      >
        <h1 style={styles.title}>About This Project</h1>
        
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🎯 Project Overview</h2>
          <p style={styles.cardText}>
            This is an interactive presentation website built with React and Vite. 
            It mimics PowerPoint functionality but with the power of modern web technologies.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🚀 Technologies Used</h2>
          <ul style={styles.techList}>
            <li style={styles.techListItem}>
              <span style={styles.techListBullet}>▸</span>React - UI library
            </li>
            <li style={styles.techListItem}>
              <span style={styles.techListBullet}>▸</span>Vite - Build tool and dev server
            </li>
            <li style={styles.techListItem}>
              <span style={styles.techListBullet}>▸</span>React Router - Navigation
            </li>
            <li style={styles.techListItem}>
              <span style={styles.techListBullet}>▸</span>Framer Motion - Animations
            </li>
            <li style={styles.techListItem}>
              <span style={styles.techListBullet}>▸</span>CSS-in-JS - Styling
            </li>
          </ul>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>✨ Features</h2>
          <div style={styles.featuresGrid}>
            <div style={styles.featureItem}>
              <h3>Interactive Slides</h3>
              <p>Navigate through slides with smooth transitions</p>
            </div>
            <div style={styles.featureItem}>
              <h3>Responsive Design</h3>
              <p>Works on all device sizes</p>
            </div>
            <div style={styles.featureItem}>
              <h3>Keyboard Support</h3>
              <p>Use arrow keys for navigation</p>
            </div>
            <div style={styles.featureItem}>
              <h3>Animations</h3>
              <p>Beautiful animations using Framer Motion</p>
            </div>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          style={styles.ctaCard}
        >
          <h2>Ready to Create Your Presentation?</h2>
          <p>Start building amazing presentations with React!</p>
          <a 
            href="https://github.com/yourusername/my-presentation-site" 
            style={styles.githubButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </motion.div>
      </motion.div>
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
  content: {
    color: 'white',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '2rem',
    background: 'linear-gradient(45deg, #fff, #f0f0f0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '2rem',
    borderRadius: '15px',
    marginBottom: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  techList: {
    listStyle: 'none',
    paddingLeft: '1rem',
  },
  techListItem: {
    marginBottom: '0.5rem',
    fontSize: '1.1rem',
    paddingLeft: '1rem',
    position: 'relative',
  },
  techListBullet: {
    position: 'absolute',
    left: 0,
    color: '#667eea',
    marginRight: '0.5rem',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginTop: '1rem',
  },
  featureItem: {
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '1.5rem',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  ctaCard: {
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    padding: '3rem',
    borderRadius: '20px',
    textAlign: 'center',
    marginTop: '3rem',
  },
  githubButton: {
    display: 'inline-block',
    background: 'white',
    color: '#667eea',
    padding: '1rem 2rem',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '1.5rem',
    fontSize: '1.1rem',
  }
}

export default About