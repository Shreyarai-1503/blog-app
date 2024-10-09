import Post from '../models/post.model.js';
import upload from '../utils/uploadConfig.js';

// Create a new post
export const createPost = [
    upload.single('image'), 
    async (req, res) => {
        try {
            const { title, content } = req.body;
            const image = req.file ? `/uploads/${req.file.filename}` : null;

            const newPost = new Post({
                title,
                content,
                image
            });

            const savedPost = await newPost.save();
            res.status(201).json(savedPost);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
]

// Get all posts
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().lean();
        const formattedPosts = posts.map(post => ({
            ...post,
            date: post.date // This will now be the formatted date
        }));
        res.status(200).json(formattedPosts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single post by ID
export const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a post
export const updatePost = [
    upload.single('image'),
    async (req, res) => {
        try {
            const { title, content } = req.body;
            const image = req.file ? req.file.path : undefined;

            const updatedPost = await Post.findByIdAndUpdate(
                req.params.id,
                { title, content, ...(image && { image }) },
                { new: true, runValidators: true }
            );

            if (!updatedPost) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.status(200).json(updatedPost);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
];

// Delete a post
export const deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
