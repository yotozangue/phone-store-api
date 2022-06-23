import multer from "multer";

class UploadImage {

    constructor() { }

    private storage(): multer.StorageEngine {

        return multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, 'assets/uploads/')
            },
            filename: (req, file, cb) => {
                const extensaoAquivo = file.originalname.split('.')[1];
                let novoNome = require('crypto').randomBytes(32).toString('hex');
                let fileName = `${novoNome}.${extensaoAquivo}`;
                cb(null, fileName);
            },
        });
    }

    get getConfig(): multer.Options {

        return {
            storage: this.storage(),
        };
    }

}

export const uploadImage = new UploadImage();
