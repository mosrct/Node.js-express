const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const app = express();
const PORT = process.env.PORT;
const productRouter = express.Router();

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

productRouter.route("/").get((req, res) => {
  res.send("Hello Products");
});

app.use("/about", productRouter);

app.get("/", (req, res) => {
  res.render("index", {
    username: "Rutchata.H",
    customers: ["Mos", "Joy", "Bass"],
  });
});
app.listen(PORT, () => {
  debug("Listening on PORT " + chalk.green(PORT));
});
