import { Request, Response } from "express";
import path from "path";

class ListPhone {

    public home(req: Request, res: Response) {

        return res.sendFile('phones.json', { root: path.join(__dirname, '../json') });
    }
}

export const listPhone = new ListPhone();

