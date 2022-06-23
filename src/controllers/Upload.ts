import appRoot from 'app-root-path';
import { Request, Response } from "express";
import { Phone } from "../classes/Phone";
import { FileJson } from "../modules/FileJson";

class Upload {

    public uploadImage(req: Request, res: Response) {

        let phone = req.body;
        let image = req.file;

        phone = new Phone(phone, image?.filename);
        new FileJson().writeJson(phone);

        return res.sendFile(`${appRoot}/assets/pages/complete.html`);
    }
}


export const upload = new Upload();
