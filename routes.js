app.get("/", (req, res) => {
    res.render(__dirname + "/index.ejs");
  });
  app.get("/user_login", (req, res) => {
    res.render(__dirname + "/user_login.ejs");
  });
  app.get("/admin_login", (req, res) => {
    res.render(__dirname + "/admin.ejs");
  });

export default {
    
}