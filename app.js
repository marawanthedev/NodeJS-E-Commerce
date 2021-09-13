const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
// global config values
// that could be used app.get which retrieves all values
// we can set some config items to different values

// we are going to be working with views and views engine and probably view cache

// setting view engine to pug js
app.set("view engine", "ejs");

// specifying the views older by
// second param is value and first is key
app.set("views", "views");

const adminRouter = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorRouter = require("./routes/error");

// static files loading
// specifying the folder name to load statically
app.use(express.static(path.join(__dirname, "public")));

// parse middleware to parse req data body
app.use(bodyParser.urlencoded({ extended: false }));

//using sub routers
app.use("/admin", adminRouter);

//redirection to shop index
app.get("/", (req, res) => {
  res.redirect("/shop");
});
// order matter as well when there is "/" usecase
app.use("/shop", shopRoutes);

//error router
app.use(errorRouter);
// app use works for all requests
// we can specify app .get for get and similary to post
app.listen(4000);
