import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import Home from './pages/Home'
import Presentation from './pages/Presentation'
import About from './pages/About'

function App() {
  return (
    <Router>
        <Routes>
  <Route path="/" element={<Presentation />} /> 
  <Route path="/presentation" element={<Presentation />} />
</Routes>

    </Router>
  )
}

export default App
