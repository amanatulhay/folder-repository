import express from "express";
import { Request, Response } from "express";
const upload = require("../middlewares/upload.middleware")
const router = express.Router();
require('dotenv').config();

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Route single file upload
 router.post('/upload/single', upload.single('file'), function (req: Request, res: Response) {
  if (req.file){
    cloudinary.uploader.upload(req.file!.path, function (err:any, result:any){
      if(err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Error"
        })
      }
  
      res.status(200).json({
        success: true,
        message:"Uploaded!",
        data: result
      })
    })
  } else {
      res.status(400).json({
        success: false,
        message:"no file detected",
      })
  }
});

// Route multiple file upload
// router.post("/upload/multiple", multiple, async (req, res) => {

// });
  
module.exports = router;