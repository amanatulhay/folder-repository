import {Request, Response} from "express";

const getHello = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Success fetch message",
    data: "Hello World",
  });
}

export default getHello