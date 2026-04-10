const express = require("express");
const products = require("./data/products");

const app = express();

// Set view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.static("public"));
app.use(express.json());

// Routes

// Home
app.get("/", (req, res) => {
  res.render("index");
});

// Category pages
app.get("/products/:category", (req, res) => {
  const category = req.params.category;
  const categoryProducts = products[category];

  if (!categoryProducts) {
    return res.status(404).send("Category not found");
  }

  res.render("category", {
    category,
    items: categoryProducts,
  });
});

// About
app.get("/about", (req, res) => {
  res.render("about");
});

// Legal pages
app.get("/terms", (req, res) => res.render("terms"));
app.get("/privacy", (req, res) => res.render("privacy"));
app.get("/refund", (req, res) => res.render("refund"));

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});