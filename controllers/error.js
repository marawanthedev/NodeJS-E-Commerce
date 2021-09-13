exports.get404 = (req, res, next) => {
  // req and res is basic
  // next is function will be based to arrow function
  // so it could function the middleware and allow to move to next middleware
  // html normal way
  //   res.status(404).sendFile(path.join(__dirname, "../", "views", "404.html"));

  // pug way
  res.render("404", { docTitle: "error", path: "/error" });
};
