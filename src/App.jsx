import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/header/NavBar'
import GenreMovieList from './components/content/GenreMovieList'
import { Route, Routes } from 'react-router-dom'
import ContactForm from './components/ContactForm'
import MovieDetail from './components/content/MovieDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<GenreMovieList />} />
        <Route path="/watch-list" element={<GenreMovieList />} />
        <Route path="/movies" element={<GenreMovieList />} />
        <Route path="/cartoon" element={<GenreMovieList />} />
        <Route path="/help" element={<ContactForm />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </>
  )
}

export default App
