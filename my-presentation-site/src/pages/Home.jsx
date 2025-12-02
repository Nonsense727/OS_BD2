import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
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
        style={styles.hero}
      >
        <h1 style={styles.title}>Interactive Presentation Website</h1>
        <p style={styles.subtitle}>
          Create and present slides with React - Just like PowerPoint, but with web magic! ✨
        </p>
        
        <div style={styles.features}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            style={styles.featureCard}
          >
            <h3>🎯 Interactive Slides</h3>
            <p>Click through slides with smooth animations</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            style={styles.featureCard}
          >
            <h3>🚀 Real-time Updates</h3>
            <p>Update content without refreshing</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            style={styles.featureCard}
          >
            <h3>🎨 Customizable</h3>
            <p>Easy to customize with React components</p>
          </motion.div>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/presentation" style={styles.ctaButton}>
            Start Presentation →
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

const styles = {
  container: {
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  hero: {
    maxWidth: '1200px',
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontSize: '3.5rem',
    marginBottom: '1.5rem',
    background: 'linear-gradient(45deg, #fff, #f0f0f0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '3rem',
    opacity: 0.9,
    maxWidth: '800px',
    margin: '0 auto 3rem',
    lineHeight: 1.6,
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  },
  featureCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '2rem',
    borderRadius: '15px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    cursor: 'pointer',
  },
  ctaButton: {
    display: 'inline-block',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    color: 'white',
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: 'bold',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
    transition: 'all 0.3s ease',
  }
}

export default Home