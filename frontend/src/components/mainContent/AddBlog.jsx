import React, { useState } from "react";
import Button from "./Button";
import FormField from "./FormField";

const AddBlog = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the new blog data to your backend
    console.log("New blog post:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 m-4 max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            label="Title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <FormField
            label="Content"
            name="content"
            type="textarea"
            value={formData.content}
            onChange={handleChange}
            required
            rows={6}
          />
          <FormField
            label="Upload Image"
            name="image"
            type="file"
            onChange={handleChange}
            accept="image/*"
          />
          {formData.image && (
            <div className="mt-2">
              <p className="text-sm text-primary">
                Selected file: {formData.image.name}
              </p>
            </div>
          )}
          <div className="flex justify-end space-x-4">
            <Button variant="secondary" onClick={onClose} className="px-4 py-2">
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="px-4 py-2">
              Create Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default AddBlog;
