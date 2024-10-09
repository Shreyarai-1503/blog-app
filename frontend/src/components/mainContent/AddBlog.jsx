import React, { useState, useEffect } from "react";
import Button from "./Button";
import FormField from "./FormField";
import postService from "../../services/postService";

const AddBlog = ({ onClose, onSuccess, editingPost }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (editingPost) {
      setFormData({
        title: editingPost.title,
        content: editingPost.content,
        image: null, 
      });
    }
  }, [editingPost]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("content", formData.content);
      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      if (editingPost) {
        await postService.updatePost(editingPost._id, formDataToSend);
      } else {
        await postService.createPost(formDataToSend);
      }
      onSuccess();
    } catch (error) {
      console.error("Error submitting post:", error);
      setError(error.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 m-4 max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {editingPost ? "Edit Blog Post" : "Add New Blog"}
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
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
            required={!editingPost}
          />
          {formData.image && (
            <div className="mt-2">
              <p className="text-sm text-primary">
                Selected file: {formData.image.name}
              </p>
            </div>
          )}
          <div className="flex justify-end space-x-4">
            <Button variant="secondary" onClick={onClose} className="px-4 py-2" disabled={isSubmitting}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="px-4 py-2" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : (editingPost ? "Update" : "Create")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
