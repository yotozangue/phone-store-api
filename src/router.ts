import { Request, Response, Router } from "express";
import multer from "multer";

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

export { router };
