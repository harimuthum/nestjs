"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
const mongoose_1 = require("mongoose");
exports.BookSchema = new mongoose_1.Schema({
    book_name: String,
    author_name: String,
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
});
//# sourceMappingURL=book.schema.js.map