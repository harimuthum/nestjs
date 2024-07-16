"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
const mongoose_1 = require("mongoose");
const user_entity_1 = require("../../users/entities/user.entity");
exports.BookSchema = new mongoose_1.Schema({
    book_name: String,
    author_name: String,
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: user_entity_1.User.name },
});
//# sourceMappingURL=book.schema.js.map