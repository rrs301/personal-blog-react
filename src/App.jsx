import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import BlogDetail from './Pages/BlogDetail'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='p-[20px]'>
    {/* Header */}
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/blog-detail/:id" element={<BlogDetail/>}></Route>

    </Routes>
     
    </div>
     {/* Footer */}
     <Footer/>
    </>
  )
}

export default App
