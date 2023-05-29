import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
// @desc Authenticate user and set tokens
// Route POST /api/users/auth
// @access Public

const authUser = asyncHandler(async (req, res) => {
    // res.status(401);
    // throw new Error("Something broke");
    res.status(200).json({message: "Authenticate User"})
});

// @desc Register new user
// Route POST /api/users
// @access Public   

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Register User"})
});

// @desc Logout user
// Route POST /api/users/logout
// @access Public   

const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Logout User"})
});

// @desc Get user profile
// Route GET /api/users/profile
// @access Private   

const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: "User Profile"})
});

// @desc Update user profile
// Route PUT /api/users/profile
// @access Private   

const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Update User Profile"})
});



export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}