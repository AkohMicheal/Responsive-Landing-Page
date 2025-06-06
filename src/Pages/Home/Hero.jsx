// src/components/Hero.jsx
import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="bg-indigo-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
            Learn New Skills Online With <span className="text-indigo-600">AkohTech</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Choose from over 100,000 online video courses with new additions published every month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
              Get Started
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition">
              Browse Courses
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            alt="People learning online" 
            className="rounded-lg shadow-xl w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero