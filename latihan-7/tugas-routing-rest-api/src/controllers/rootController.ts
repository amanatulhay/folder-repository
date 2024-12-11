import {Request, Response} from "express";

const getRoot = (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  }

export default getRoot