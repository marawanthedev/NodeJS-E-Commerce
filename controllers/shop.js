const Product = require("../models/product");

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    const maxProductsLength = 3;
    products.length = maxProductsLength;

    res.render("shop/index", {
      prods: products,
      docTitle: "Shop",
      path: "/shop",
    });
  });
};

exports.getProduct = (req, res, next) => {
  console.log(req);
  res.render("shop/product-detail", {
    product: { title: "hello" },
    docTitle: "Product detail",
    path: "/shop/product-detail",
  });
};

exports.getShop = (req, res, next) => {
  // req and res is basic
  // next is function will be based to arrow function
  // so it could function the middleware and allow to move to next middleware
  // dir name then go to correct folder level and then folder name and then file name

  // this works for html files
  // res.sendFile(path.join(rootDir, "views", "shop.html"));

  // using pug makes things different as we will have to use render
  // entering the name of the file only as we have already defined the views folder
  // we can also remove the .pug as we have already specified in app js that view engine is set to pug
  // we can pass data to the render as well
  // data shall be passed in a form of object

  // since that is a static function
  // it could  be called directly from the class itself
  // we now converted the rendering to be done using a callback
  // since that reading files is async and it might take some time
  // we are only going to be rendering once the callback is called

  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      docTitle: "Products List",
      path: "/shop/product-list",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    product: { title: "hello" },
    docTitle: "Cart",
    path: "/shop/cart",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    docTitle: "checkout",
    path: "/shop/checkout",
  });
};
