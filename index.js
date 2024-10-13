import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Users from "./mongo_employee_schema.js"; 
import Admins from "./mogo_admin_schema.js";
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render(__dirname + "/index.ejs");
});
app.get("/user_login",(req,res)=>{
  res.render(__dirname+"/user_login.ejs")
})
app.get("/admin_login", (req, res) => {
  res.render(__dirname + "/admin.ejs");
});

app.post("/submit", async (req, res) => {
  const { FirstName,LastName,Email,Phone,Address,Gender,Department,State } = req.body;
  console.log(req.body)
  const user = new Users({ FirstName,LastName,Email,Phone,Address,Gender,Department,State,
  });
  try {
    await user.save(); // Save user data to the database
    console.log(user);
    res.send("Form Submission Successful");
  } catch (error) {
    console.error("Error saving user data:", error);
    res.status(500).send("Error saving user data");
  }
});

// MongoDB connection
mongoose.connect("mongodb://0.0.0.0:27017/employee");
const db = mongoose.connection;
db.once("open", () => {
  console.log("MongoDB connection successful");
});

// Admin details route
app.post("/details", async (req, res) => {
  const a = req.body.username; 
  const b = req.body.password;

  try {


    const admin_data = await Admins.find(); // Fetch all admins

    if (admin_data.length === 0) {
      return res.render(__dirname + "/error.ejs"); // No admins found
    }

    const newadmin = admin_data[0]["username"];
    const password = admin_data[0]["password"];

    // Compare credentials using strict equality
    if (a === newadmin && b === password) {
      const users = await Users.find({}); // Fetch all users from the Users collection
      console.log('All documents from the "data" collection:', users);
      res.render(__dirname + "/form_details.ejs", { users });
    } else {
      res.render(__dirname + "/error.ejs"); // Invalid login
    }

  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("Error fetching data");
  }
});

app.listen(port, () => {
  console.log("You are listening on port " + port);
});
