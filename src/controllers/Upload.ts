import { Request, Response } from "express";
import path from "path";
import { Phone } from "../classes/Phone";
import { FileJson } from "../modules/FileJson";

class Upload {

    public uploadImage(req: Request, res: Response) {

        let phone = req.body;
        let image = req.file;

        phone = new Phone(phone, image?.filename);
        new FileJson().writeJson(phone);


        return res.sendFile('complete.html', { root: path.join(__dirname, '../pages') });
    }
}


export const upload = new Upload();
