import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={styles.navbar}
    >
      <div style={styles.navContent}>
        <Link to="/" style={styles.logo}>
          PPT Website
        </Link>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/presentation" style={styles.navLink}>Presentation</Link>
          <Link to="/about" style={styles.navLink}>About</Link>
        </div>
      </div>
    </motion.nav>
  )
}

const styles = {
  navbar: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '1rem 2rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    transition: 'background 0.3s ease',
  }
}

export default Navbar