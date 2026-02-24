const products = require("./data/products");
const express = require("express");
const app = express();

// Set view engine
app.set("view engine", "ejs");

// Static folder
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => res.render("index"));
app.get("/products/:category", (req, res) => {
  const category = req.params.category;
  const categoryProducts = products[category];

  if (!categoryProducts) {
    return res.status(404).send("Category not found");
  }

  res.render("category", {
    category,
    items: categoryProducts
  });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/terms", (req, res) => res.render("terms"));
app.get("/privacy", (req, res) => res.render("privacy"));
app.get("/refund", (req, res) => res.render("refund"));

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});