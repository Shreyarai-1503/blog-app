import mongoose from "mongoose";

const formatDate = (date) => {
    const options = { day: '2-digit', month: 'long' };
    return date.toLocaleDateString('en-US', options).replace(' ', '-');
};

const imageValidator = (v) => v === null || /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(v);

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
        default: null,
        validate: {
            validator: imageValidator,
            message: 'Invalid image URL',
        },
    },
    date: {
        type: Date,
        default: Date.now,
        get: formatDate,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'Author is required'],
    },
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);
export default Post;
