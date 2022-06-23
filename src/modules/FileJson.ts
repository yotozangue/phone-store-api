import appRoot from 'app-root-path';
import fs from 'fs';

export class FileJson {

    path: string;

    constructor() {
        this.path = `${appRoot}/assets/json/phones.json`;
    }

    public writeJson(phones: []) {
        let json = JSON.stringify(phones);
        let exist = this.readJson().toString();

        if (exist === "") {
            const lineForWrite = `[${json}]`;
            fs.writeFileSync(this.path, lineForWrite, 'utf8');

        } else {
            exist = exist.replace('[', '').replace(']', '');
            const lineForWrite = `[${exist},${json}]`;
            fs.writeFileSync(this.path, lineForWrite, 'utf8');
        }
    }

    public readJson() {
        return fs.readFileSync(this.path);
    }
}
