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
  { description: "Beschreibung 1", amount: -2, category: "Essen/Trinken", date:"Beispiel" },
  { description: "Beschreibung 2", amount: 5, category: "Taschengeld", date:"Beispiel" },
  { description: "Beschreibung 3", amount: -3, category: "Genussmittel", date:"Beispiel" }
];

// ROUTES
app.get("/api/data", (req, res) => {
  res.render("entries", { entries: data });
});

app.post("/api/data", (req, res) => {
  console.log(req.body)
  console.log(req.params)
  const { description, amount, category, date} = req.body;
  data.push({ description, amount, category, date});
  res.render("entries", { entries: data });
});

// INIT
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
