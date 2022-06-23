import config from 'config';
import { App } from "./app";

const port = process.env.PORT || config.get("port")
new App().server.listen(port);
