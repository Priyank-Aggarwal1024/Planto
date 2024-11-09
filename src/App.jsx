import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import AddPlant from './components/AddPlant'
import Features from './components/Features'

function App() {
  return (
    <>
      <body className="bg-white font-sans text-gray-900">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />
          <Route path='/add-plant' element={<AddPlant />} />
          <Route path='/features' element={<Features />} />
        </Routes>
        <Footer />
      </body>
    </>
  )
}

export default App
