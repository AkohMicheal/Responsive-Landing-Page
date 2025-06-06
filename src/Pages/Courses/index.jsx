// src/pages/Courses/index.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const courses = [
  {
    slug: 'web-development-bootcamp',
    title: 'Web Development Bootcamp',
    description: 'Learn full-stack web development with modern technologies.',
    instructor: 'Sarah Johnson',
    price: '$199',
    duration: '8 weeks',
    students: '1,245',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    slug: 'data-science-fundamentals',
    title: 'Data Science Fundamentals',
    description: 'Introduction to data analysis and machine learning.',
    instructor: 'Michael Chen',
    price: '$149',
    duration: '6 weeks',
    students: '892',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    slug: 'mobile-app-design',
    title: 'Mobile App Design',
    description: 'UI/UX design principles for mobile applications.',
    instructor: 'Emma Wilson',
    price: '$129',
    duration: '4 weeks',
    students: '1,532',
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }
]

const Courses = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Courses</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular courses for self learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{course.duration}</span>
                  <span className="mx-2">•</span>
                  <span>{course.students} students</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-medium">{course.price}</span>
                  <Link 
                    to={`/courses/${course.slug}`} 
                    className="text-primary hover:text-primary-dark font-medium"
                  >
                    View Course
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses