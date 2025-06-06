// src/pages/About/index.jsx
import React from 'react'

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About AkohTech</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing online education with cutting-edge courses and expert instructors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, AkohTech started with a simple mission: to make quality education accessible to everyone.
              We believe that learning should be flexible, affordable, and available to all.
            </p>
            <p className="text-gray-600 mb-4">
              Our mission is to make high-quality education accessible to everyone, everywhere.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Our team" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About