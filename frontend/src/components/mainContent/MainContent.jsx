import React, { useState, useEffect } from "react";
import { blogPosts } from "../../constants/data";
import Button from "./Button";
import BlogPost from "./BlogPost";
import AddBlog from "./AddBlog";
import postService from "../../services/postService";

const MainContent = () => {
  const [isAddBlogOpen, setIsAddBlogOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const posts = await postService.getAllPosts();
      setBlogPosts(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleAddNew = () => {
    setIsAddBlogOpen(true);
    setEditingPost(null);
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setIsAddBlogOpen(true);
  };

  const handleDelete = async (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await postService.deletePost(postId);
        fetchPosts();
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  const handleAddBlogSuccess = () => {
    setIsAddBlogOpen(false);
    setEditingPost(null);
    fetchPosts();
  };

  return (
    <div className="p-6 w-full">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">Blogs</h1>
        <div className="space-x-2 sm:space-x-3">
          <Button variant="secondary" onClick={handleAddNew}>Add New</Button>
          <Button variant="primary">Preview</Button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {blogPosts.map((post) => (
          <BlogPost 
            key={post._id} 
            post={post} 
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
      {isAddBlogOpen && (
        <AddBlog 
          onClose={() => {
            setIsAddBlogOpen(false);
            setEditingPost(null);
          }} 
          onSuccess={handleAddBlogSuccess}
          editingPost={editingPost}
        />
      )}
    </div>
  );
};

export default MainContent;
