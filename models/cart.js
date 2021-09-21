const fs = require("fs");
const path = require("path");

// cartFile path
const getCartFilePath = () => {
  return path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "cart.json"
  );
};

//getting previous cartData
const getCartFromFile = (cb) => {
  fs.readFile(getCartFilePath(), (err, fileContent) => {
    if (err) {
      cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};
// writing new cart data
const writeCartToFile = (products) => {
  fs.writeFile(getCartFilePath(), JSON.stringify(products), (err) =>
    console.log(err)
  );
};

module.exports = class Cart {
  constructor() {}

  addToCart(cartItem) {
    // this.items.push(cartItem);

    let cartItems = [];
    // retrieve current product in file
    getCartFromFile((fileData) => {
      if (fileData !== null && fileData !== undefined && fileData !== []) {
        cartItems = fileData;
      }
      cartItems.push(cartItem);
      writeCartToFile(cartItems);
    });
  }

  removeCartItem = (cartItemId) => {
    const itemToBeRemoved = this.items.find((item) => item.id === cartItemId);
    this.items = this.items.filter((item) => item !== itemToBeRemoved);
  };
  getCartItems = (cb) => getCartFromFile(cb);
};
