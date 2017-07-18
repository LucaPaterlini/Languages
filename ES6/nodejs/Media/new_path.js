const fs = require('fs');
const path = require('path');

const MEDIA_SAVE_PATH = "/home/pater92/Desktop/nodejs/Media/DATA";
const mkdirSync = function (dirPath) {
    try {
        fs.mkdirSync(dirPath)
    } catch (err) {
        if (err.code !== 'EEXIST') throw err
    }
}

mkdirSync(path.resolve(MEDIA_SAVE_PATH));