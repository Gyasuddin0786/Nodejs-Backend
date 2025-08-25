import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [jokes, setJoke] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJoke(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  });

  useEffect(() => {
    axios
      .get("/api/user")
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log("Error frthing users:", err);
      });
  });
  return (
    <>
      <div
        style={{ backgroundColor: "white", color: "black", padding: "20px" }}
      >
        <h1 style={{ textAlign: "center" }}>Full Stack Development</h1>
        <h2>Jokes is: {jokes.length}</h2>
        {jokes.map((joke) => (
          <div key={joke.id} className="joke-card">
            <ol type="I">
              <li>{joke.title}</li>
              <li>{joke.content}</li>
            </ol>
          </div>
        ))}
      </div>

      {/* user data printing  */}
      <div  style={{ backgroundColor: "white", color: "black", padding: "20px" }}>
              <h2>User is: {user.length}</h2>
        {user.map((users) => (
          <div key={users.id}>
            <ol>
              <li> Fitsrt Name: {users.firstName}</li>
              <li>Last Name: {users.lastName}</li>
              <li>Middle Name: {users.maidenName}</li>
              <li>Age: {users.age}</li>
              <li>Gender: {users.gender}</li>
              <li>Email: {users.email}</li>
            </ol>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
