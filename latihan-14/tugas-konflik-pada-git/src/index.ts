import express from "express";
import db from "./utils/database";
import routes from "./routes/api";
import bodyParser from "body-parser";
import { Request, Response } from "express";

const PORT = 3000;

async function init() {
  try {
    await db();

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Endpoint untuk menambah produk
app.post('/products', (req: Request, res: Response) => {
  const { name, price } = req.body;
  // Logika untuk menambah produk
  res.send('Product added');
});

// Endpoint untuk mendapatkan semua produk
app.get('/products', (req: Request, res: Response) => {
  // Logika untuk mendapatkan semua produk
  res.send('List of products');
});

    app.use("/api", routes);

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

init();
