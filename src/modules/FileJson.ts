import fs from 'fs';

export class FileJson {

    public writeJson(phones: []) {
        let json = JSON.stringify(phones);


        let exist = this.readJson().toString();
        if (exist === "") {

            let lineForWrite = `[${json}]`;
            fs.writeFileSync('./json/phones.json', lineForWrite, 'utf8');

        } else {
            exist = exist.replace('[', '').replace(']', '');
            let lineForWrite = `[${exist},${json}]`;
            fs.writeFileSync('./src/json/phones.json', lineForWrite, 'utf8');
        }


    }
    public readJson() {
        let json = fs.readFileSync('./src/json/phones.json');
        return json;
    }
}
