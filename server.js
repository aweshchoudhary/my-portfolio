const express = require("express");
const app = express();
const port = process.env.PORT || 80;
const path = require("path");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(expressLayouts);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => console.log(`Server is listening on port : ${port}`));
