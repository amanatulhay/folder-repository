import {Request, Response} from "express";

const getUser = (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch user",
      data: {
        "id": 1,
        "name": "Budi",
        "username": "budidu",
        "email": "budidu@mail.com"
      },
    });
}

export default getUser