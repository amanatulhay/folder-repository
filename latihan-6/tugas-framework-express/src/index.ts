import express, { Request, Response } from "express";
const path = require('path');

const PORT = 3000;

function init() {
  const app = express();

  // Melayani file statis dari direktori "public" dan route untuk /static-file
  app.use('/static-file', express.static(path.join(__dirname, 'public')));

  // Route untuk root path
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });

  // Route untuk /hello
  app.get("/hello", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch message",
      data: "Hello World",
    });
  });

  // Route untuk /user
  app.get("/user", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch user",
      data: {
        "id": 1,
        "name": "Budi",
        "username": "budidu",
        "email": "budidu@mail.com"
      },
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
