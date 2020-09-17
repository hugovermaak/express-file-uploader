"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageFilter = exports.loadCollection = void 0;
const loadCollection = function (colName, db) {
    return new Promise(resolve => {
        db.loadDatabase({}, () => {
            const _collection = db.getCollection(colName) || db.addCollection(colName);
            resolve(_collection);
        });
    });
};
exports.loadCollection = loadCollection;
const imageFilter = function (req, file, cb) {
    // accept image only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only images files are allowed!'), false);
    }
    cb(null, true);
};
exports.imageFilter = imageFilter;
//# sourceMappingURL=utils.js.map