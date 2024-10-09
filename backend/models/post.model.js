import mongoose from "mongoose";

const formatDate = (date) => {
    const options = { day: '2-digit', month: 'long' };
    return date.toLocaleDateString('en-US', options).replace(' ', '-');
};

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        minlength: [3, 'Title must be at least 3 characters long'],
        maxlength: [255, 'Title cannot exceed 255 characters'],
    },
    content: {
        type: String,
        required: [true, 'Content is required'],
        minlength: [10, 'Content must be at least 10 characters long'],
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
    },
    date: {
        type: Date,
        default: Date.now,
        get: formatDate,
    },
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);
export default Post;
