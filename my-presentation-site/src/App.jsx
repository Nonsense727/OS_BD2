import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navigation/Navbar'
import Home from './pages/Home'
import Presentation from './pages/Presentation'
import About from './pages/About'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App