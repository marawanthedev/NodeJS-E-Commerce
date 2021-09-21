const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  // req and res is basic
  // next is function will be based to arrow function
  // so it could function the middleware and allow to move to next middleware
  // html normal way
  // res.sendfile(path.join(rootDir, "views", "add-product.html"));

  // pug way
  // adding a / to go a different file
  res.render("admin/add-product", {
    docTitle: "Add product",
    path: "/admin/add",
  });
};

//admin related

exports.postAddProduct = (req, res, next) => {
  // body is now parsed because of body parser package
  //   it will parsed as object with each name of each input
  // if its only post it will display the res send
  const product = new Product(req.body);
  product.save();
  res.redirect("/shop/product-list");

  //   if its not post it will redirect to /
};

exports.getAdminProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      docTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};
