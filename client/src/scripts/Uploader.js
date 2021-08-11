const multer = require("multer");

export class Uploader {
    storage = null;
    path = null;

    validTypes = [
        "image/png",
        "image/jpg",
        "image/jpeg"
    ]

    constructor(path) {
        this.storage = multer.diskStorage({
            destination(req, file, callback) {
                callback(null, `/uploads/${path}`);
            },
            filename(req, file, callback) {
                callback(null, Date.now());
            }
        })
    }

    fileFilter(req, file, callback) {
        if (this.validTypes.includes(file.mimetype)) {
            callback(null, true);
            return;
        }
        callback(null, false);
    }
}

export const createMulter = (uploader) => {
    return multer({
        storage: uploader.storage,
        fileFilter: uploader.fileFilter
    })
}