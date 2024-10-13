import express from "express"
import mongoose from "mongoose"
// Define the schema for the admin collection
const adminSchema = new mongoose.Schema({
    username: String, // Fixed typo from "userName" to "username"
    password: String,
  });
  
  // Define models
  const Admins = mongoose.model("admin", adminSchema); // Use the correct collection name

  export default Admins