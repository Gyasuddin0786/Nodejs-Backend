import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.static("dist")); // Serve static files from the 'dist' directory is not good for production
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title:
        "Why don't scientists trust atoms? Because they make up everything!",
      content: "Here's a classic one for you!",
    },
    {
      id: 2,
      title:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
      content: "A little farm humor for you.",
    },

    {
      id: 3,
      title: "Why don't programmers like nature?",
      content: "A techie joke for you.",
    },

    {
      id: 4,
      title: "Why do cows have hooves instead of feet?",
      content: "A silly animal joke for you.",
    },
    {
      id: 5,
      title: "Why did the bicycle fall over?",
      content: "A light-hearted joke for you.",
    },
  ];
  res.json(jokes);
});

app.get('/api/user',(req, res)=>{
  const user = [
{
  "id": 1,
  "firstName": "Emily",
  "lastName": "Johnson",
  "maidenName": "Smith",
  "age": 28,
  "gender": "female",
  "email": "emily.johnson@x.dummyjson.com",
},
{
  "id": 2,
  "firstName": "Michael",
  "lastName": "Brown",
  "maidenName": "Davis",
  "age": 35,
  "gender": "male",
  "email": "emily.michel@x.dummyjson.com",
}    

  ];
  res.json(user);
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port http://localhost:${port}`);
});
