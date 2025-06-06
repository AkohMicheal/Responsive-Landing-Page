// src/pages/Blog/index.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const blogs = [
  {
    id: 1,
    title: 'The Future of Online Education',
    excerpt: 'How technology is transforming the way we learn online.',
    date: 'May 15, 2023',
    author: 'Jane Smith',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    title: 'Top 10 Programming Languages in 2023',
    excerpt: 'Discover which languages are most in-demand this year.',
    date: 'April 28, 2023',
    author: 'John Doe',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    title: 'How to Stay Productive While Learning Online',
    excerpt: 'Practical tips for maintaining focus in digital learning environments.',
    date: 'April 10, 2023',
    author: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }
]

const Blog = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and news about online education and learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{blog.date} • {blog.author}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <Link 
                  to={`/blog/${blog.id}`} 
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog