require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const githubData = {
  name: "Gyasuddin",
  username: "Gyasuddin0786",
  profileUrl: "https://github.com/Gyasuddin0786",
};
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/about", (req, res) => {
  res.send(
    "<h2>About Page</h2><br><p>This is the about page of our simple Express app.</p>"
  );
});
app.get("/github", (req, res) => {
  res.send(
    '<h2>GitHub Page</h2>' +
   '<p>Visit our GitHub repository for more information.</p>' +
   + '<a href="https://github.com/Gyasuddin0786"target="_blank">GitHub Repository</a>'
  );
});
app.get("/github-data", (req, res) => {
  res.json(githubData);
});
app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
