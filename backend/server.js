const express = require("express");
const app = express();

// STATISCHE DATEIEN
app.use(express.static("public"));

// ROUTES

// INIT
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
