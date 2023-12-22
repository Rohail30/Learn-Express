// Import the express module
const express = require("express");

// Create an instance of the express application
const app = express();

// Import the fs module for file system operations
const fs = require("fs");

// Enable JSON parsing for incoming requests
app.use(express.json());

// Import user data from the MOCK_DATA.json file
const user = require("./MOCK_DATA.json");

// Define a route to get a specific user by ID
app.get("/users/:id", (req, res) => {
  let id = Number(req.params.id);
  let foundUser = user.find((u) => u.id === id);
  res.json(foundUser);
});

// Define a route to add a new user
app.post("/user/addUser", (req, res) => {
  const body = req.body;
  // Add a new user to the user array
  user.push({ id: user.length + 1, ...body });

  // Write the updated user data to the JSON file
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(user), (err) => {
    if (err) {
      return res.status(500).json({ message: "error occurred" });
    }
    return res.json({ message: "Success" });
  });
});

// Define a route to update a user by ID using HTTP PUT
app.put("/updateUser/:id", (req, res) => {
  const userId = Number(req.params.id);
  const updateUser = req.body;

  // Find the index of the user with the specified ID
  const index = user.findIndex((u) => u.id === userId);

  if (index !== -1) {
    // Update the user data
    user[index] = { ...user[index], ...updateUser };
    // Write the updated user data to the JSON file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(user), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error Occurred" });
      }
      return res.status(200).json({ message: "User Updated" });
    });
  } else {
    return res.json({ message: `User not found with id ${userId}` });
  }
});

// Define a route to partially update a user by ID using HTTP PATCH
app.patch("/patchedUser/:id", (req, res) => {
  const userId = Number(req.params.id);
  const updateUser = req.body;

  // Find the index of the user with the specified ID
  const index = user.findIndex((u) => u.id === userId);

  if (index !== -1) {
    // Partially update the user data
    user[index] = { ...user[index], ...updateUser };
    // Write the updated user data to the JSON file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(user), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error Occurred" });
      }
      return res.status(200).json({ message: "User Updated" });
    });
  } else {
    return res.json({ message: `User not found with id ${userId}` });
  }
});

// Define a route to delete a user by ID
app.delete("/delete/:id", (req, res) => {
  const userId = Number(req.params.id);
  // Find the index of the user with the specified ID
  const index = user.findIndex((u) => u.id === userId);

  if (index !== -1) {
    // Remove the user from the array
    user.splice(index, 1);
    // Write the updated user data to the JSON file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(user), (err, data) => {
      if (err) {
        return res.status(500).json({ message: "Error Occurred" });
      }
      return res.json({ message: `User Deleted with id ${userId}` });
    });
  } else {
    return res.json({ message: `User not found with id ${userId}` });
  }
});

// Start the server and listen on port 3000
app.listen(3000);
