const Cart = require("../models/cart");
const Product = require("../models/product");

const cartObj = new Cart();

exports.getCart = (req, res, next) => {
  renderCart(res);
};

exports.postCart = (req, res, next) => {
  const { productId } = req.body;

  Product.getProductById(productId, (product) => {
    cartObj.addToCart(product);
    renderCart(res);
  });
};

exports.removeItem = (req, res, next) => {
  const { productId } = req.body;
  cartObj.removeCartItem(productId);
  renderCart(res);
};

// utility function

const renderCart = (res) => {
  cartObj.getCartItems((cartItems) =>
    res.render("shop/cart", {
      prods: cartItems,
      docTitle: "Cart",
      path: "/shop/cart",
    })
  );
};
