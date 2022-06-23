import { Request, Response, Router } from "express";
import appRoot from 'app-root-path';
import multer from "multer";
import express from "express";

//Controller
import { listPhone } from "./controllers/ListPhone";
import { upload } from "./controllers/Upload";
import { uploadImage } from "./middleware/upload/imagem";

const router: Router = Router();

//Routers
router.get('/list-phone', listPhone.home);

router.post('/send',
    multer(uploadImage.getConfig).single("image"),
    upload.uploadImage
);

router.use(
    '/static',
    express.static(`${appRoot}/assets/uploads`)
)

export { router };
