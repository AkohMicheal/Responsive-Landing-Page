// src/pages/Blog/[id].jsx
import React from 'react'
import { useParams } from 'react-router-dom'

const blogs = [
  {
    id: 1,
    title: 'The Future of Online Education',
    content: `
      <p>Online education has come a long way since its inception. What started as simple text-based courses has evolved into immersive learning experiences with video, interactive exercises, and even virtual reality.</p>
      <p>One of the most exciting developments in online education is the use of artificial intelligence to personalize learning experiences. AI algorithms can now analyze a student's strengths and weaknesses and adapt the curriculum accordingly.</p>
      <p>Another trend is the rise of microlearning - short, focused lessons that can be completed in just a few minutes. This approach is particularly effective for busy professionals who need to fit learning into their schedules.</p>
    `,
    date: 'May 15, 2023',
    author: 'Jane Smith',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  // ... other blog posts
]

const BlogDetails = () => {
  const { id } = useParams()
  const blog = blogs.find(blog => blog.id === parseInt(id))

  if (!blog) {
    return <div>Blog post not found</div>
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <img src={blog.image} alt={blog.title} className="w-full h-64 md:h-96 object-cover rounded-lg" />
          </div>
          <div className="text-sm text-gray-500 mb-4">{blog.date} • {blog.author}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{blog.title}</h1>
          <div
            className="prose max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </section>
  )
}

export default BlogDetails