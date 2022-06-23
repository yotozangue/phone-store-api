import express from "express";
import bodyparser from "body-parser";
import { router } from "./router";
import cors from "cors";

export class App {

    public server: express.Application;

    constructor() {
        this.server = express();
        this.cors();
        this.middleware();
        this.router();
        this.bodyparser();
    }

    private middleware() {
        this.server.use(express.json());
    }

    private cors() {
        this.server.use(cors());
    }

    public router() {
        this.server.use(router);
    }

    public bodyparser() {
        this.server.use(bodyparser.urlencoded({ extended: false }));
        this.server.use(bodyparser.json());
    }

}
