import React, { useState } from "react";
import { blogPosts } from "../../constants/data";
import Button from "./Button";
import BlogPost from "./BlogPost";
import AddBlog from "./AddBlog";

const MainContent = () => {
  const [isAddBlogOpen, setIsAddBlogOpen] = useState(false);

  const handleAddNew = () => {
    setIsAddBlogOpen(true);
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
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
      {isAddBlogOpen && <AddBlog onClose={() => setIsAddBlogOpen(false)} />}
    </div>
  );
};

export default MainContent;
