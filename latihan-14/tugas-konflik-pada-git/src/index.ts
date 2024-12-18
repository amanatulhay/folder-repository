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

    // Endpoint untuk register user
    app.post('/register', (req: Request, res: Response) => {
      const { username, password } = req.body;
      // Logika untuk register user
      res.send('User registered');
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
