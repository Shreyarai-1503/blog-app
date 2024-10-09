import React from "react";
import Button from "./Button";

const formatDate = (dateString) => {
  const options = { day: "2-digit", month: "long", year: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

const BlogPost = ({ post, onEdit, onDelete }) => {
  const imagePath = post.image.split('uploads\\').pop();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="flex justify-center items-center h-48">
        <img
          src={imagePath}
          alt={post.title}
          className="w-3/4 h-3/4 object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{post.content}</p>
        <p className="text-gray-400 text-xs uppercase">
          {formatDate(post.date)}
        </p>
        <div className="mt-4 flex justify-end space-x-2">
          <Button variant="secondary" onClick={() => onEdit(post)}>
            Edit
          </Button>
          <Button variant="primary" onClick={() => onDelete(post._id)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
