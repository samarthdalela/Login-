import express from "express"
import mongoose from "mongoose";
const app = express();


// Define the schema for the employee collection
const userSchema = new mongoose.Schema({
  FirstName:String,
  LastName:String,
  Email:String,
  Phone:Number,
  Address:String,
  Gender:String,
  Department:String,
  State:String,
  });

  const Users = mongoose.model("data", userSchema);

  export default Users