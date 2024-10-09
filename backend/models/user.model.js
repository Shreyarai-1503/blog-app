import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: [2, 'Name must be at least 2 characters long'],
        maxlength: [50, 'Name cannot exceed 50 characters'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    image: {
        type: String,
        default: null,
    },
    designation: {
        type: String,
        required: [true, 'Designation is required'],
        trim: true,
        minlength: [2, 'Designation must be at least 2 characters long'],
        maxlength: [100, 'Designation cannot exceed 100 characters'],
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
