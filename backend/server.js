const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// TEMPLATE ENGINE
app.set("views", __dirname + "/views");
app.set("view engine", "pug");

// MIDDLEWARES
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// STATISCHE DATEIEN
app.use(express.static("public"));

const data = [
  { description: "Beschreibung 1", amount: -12, category: "Essen/Trinken" },
  { description: "Beschreibung 2", amount: 45, category: "Taschengeld" },
  { description: "Beschreibung 3", amount: -3, category: "Genussmittel" }
];

// ROUTES
app.get("/api/data", (req, res) => {
  res.render("entries", { entries: data });
});

app.post("/api/data", (req, res) => {
  console.log(req.body)
  console.log(req.params)
  const { description, amount, category } = req.body;
  data.push({ description, amount, category });
  res.render("entries", { entries: data });
});

// INIT
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
