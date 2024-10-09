import mongoose from "mongoose";

// Validation functions
const emailValidator = (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
const passwordValidator = (v) => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
const imageValidator = (v) => v === null || /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(v);

// User schema definition
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
        validate: {
            validator: emailValidator,
            message: 'Please enter a valid email address',
        },
        minlength: [5, 'Email must be at least 5 characters long'],
        maxlength: [255, 'Email cannot exceed 255 characters'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        validate: {
            validator: passwordValidator,
            message: 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character',
        },
    },
    image: {
        type: String,
        default: null,
        validate: {
            validator: imageValidator,
            message: 'Invalid image URL',
        },
    },
    designation: {
        type: String,
        required: [true, 'Designation is required'],
        trim: true,
        minlength: [2, 'Designation must be at least 2 characters long'],
        maxlength: [100, 'Designation cannot exceed 100 characters'],
    },
}, { timestamps: true });

// Create and export the User model
const User = mongoose.model("User", userSchema);
export default User;
