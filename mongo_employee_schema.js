import express from "express"
import mongoose from "mongoose";
const app = express();


// Define the schema for the employee collection
const userSchema = new mongoose.Schema({
    Fname: String,
    Lname: String,
    email: String,
    Phone: Number,
  });

  const Users = mongoose.model("data", userSchema);

  export default Users