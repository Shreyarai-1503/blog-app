import React from 'react'

const BlogPost = ({ post }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
    <div className="flex justify-center items-center h-48">
      <img src={post.image} alt={post.title} className="w-3/4 h-3/4 object-cover" />
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{post.content}</p>
      <p className="text-gray-400 text-xs uppercase mt-auto">{post.date}</p>
    </div>
  </div>
)

export default BlogPost
