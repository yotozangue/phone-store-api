import config from 'config';
import { App } from "./app";

new App().server.listen(config.get("port"));
