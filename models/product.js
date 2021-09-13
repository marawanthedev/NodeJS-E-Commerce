const fs = require("fs");
const path = require("path");

const getProductsFilePath = () => {
  return path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "products.json"
  );
};

const getProductsFromFile = (cb) => {
  // i need to use a callback
  // since that this async so it will cause rendering error
  fs.readFile(getProductsFilePath(), (err, fileContent) => {
    if (err) {
      // running the callback
      // so we could access data within the context of rendering
      //returning an empty array of books
      cb([]);
    }
    // so we could access data within the context of rendering
    // returning array full of fetched books
    cb(JSON.parse(fileContent));
  });
};

const writeProductToFile = (products) => {
  fs.writeFile(getProductsFilePath(), JSON.stringify(products), (err) =>
    console.log(err)
  );
};
module.exports = class Product {
  constructor(title) {
    this.title = title;
  }
  save() {
    // this will get to main module         folder name  file name
    let products = [];

    // retrieve current product in file
    getProductsFromFile((fileData) => {
      if (fileData !== null && fileData !== undefined && fileData !== []) {
        products = fileData;
      }
      
      products.push(this);

      writeProductToFile(products);

    });
  }

  //   making it static so it can be called without having to create an object
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
  
};
