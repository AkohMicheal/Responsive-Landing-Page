// src/App.js
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import BlogDetails from './Pages/Blog/BlogDetails'
import Courses from './Pages/Courses'
import CourseDetails from './Pages/Courses/CourseDetails'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/blog/:id" element={<Layout><BlogDetails /></Layout>} />
        <Route path="/courses" element={<Layout><Courses /></Layout>} />
        <Route path="/courses/:slug" element={<Layout><CourseDetails /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App