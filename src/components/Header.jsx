// src/components/Header.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 md:px-12 lg:px-24">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          EduLearn
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link to="/" className="text-gray-800 hover:text-primary">Home</Link></li>
            <li><Link to="/courses" className="text-gray-800 hover:text-primary">Courses</Link></li>
            <li><Link to="/blog" className="text-gray-800 hover:text-primary">Blog</Link></li>
            <li><Link to="/about" className="text-gray-800 hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="text-gray-800 hover:text-primary">Contact</Link></li>
          </ul>
        </nav>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header