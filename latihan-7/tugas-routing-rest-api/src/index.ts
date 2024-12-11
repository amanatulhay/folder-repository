import express, { Request, Response } from "express";
import getUser from "./controllers/userController";
import getHello from "./controllers/helloController";
import getRoot from "./controllers/rootController";
const {getAllCategories, getCategoryById, postCategory, updateCategoryById, deleteCategoryById, getProductByName, getProductByCategoryIdAndName} = require("./controllers/categoryController");
const path = require('path');

const PORT = 3000;

function init() {
  const app = express();
  app.use(express.json());

  // Route Tugas - 6 - Framework Express  
  app.use('/static-file', express.static(path.join(__dirname, 'public'))); // Melayani file statis dari direktori "public" dan route untuk /static-file
  app.get("/", getRoot); // Route untuk root path 
  app.get("/hello", getHello);  // Route untuk /hello 
  app.get("/user", getUser);  // Route untuk /user

  // Route Tugas - 7 - Routing REST API
  app.get('/api/categories', getAllCategories); // soal 1 - route GET semua kategori
  app.get('/api/categories/:id', getCategoryById); // soal 2 - route GET detail kategori
  app.post('/api/categories', postCategory); // soal 3 - route POST tambah kategori
  app.put('/api/categories/:id', updateCategoryById); // soal 4 - route PUT update kategori
  app.delete('/api/categories/:id', deleteCategoryById); // soal 5 - route DELETE kategori
  
  app.get('/api/search-product-by-name', getProductByName); // soal 6 - route GET query string cari produk by name
  app.get('/api/search-product-by-category-and-name/:categoryId', getProductByCategoryIdAndName); // soal 7 - route GET parameter dan query string cari produk by name and category id

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
