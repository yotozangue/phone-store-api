import appRoot from 'app-root-path';
import { Request, Response } from "express";

class ListPhone {

    public home(req: Request, res: Response) {
        return res.sendFile(`${appRoot}/assets/json/phones.json`);
    }
}

export const listPhone = new ListPhone();
