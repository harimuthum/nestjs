"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const book_service_1 = require("./book.service");
const book_entities_1 = require("./entities/book.entities");
const create_book_input_1 = require("./dto/create.book.input");
const update_book_input_1 = require("./dto/update.book.input");
let BooksResolver = class BooksResolver {
    constructor(BooksService) {
        this.BooksService = BooksService;
    }
    findAll() {
        return this.BooksService.findAll();
    }
    findOne(id) {
        return this.BooksService.findOne(id);
    }
    createBook(createBookInput) {
        return this.BooksService.create(createBookInput);
    }
    updateBook(updateBookInput) {
        return this.BooksService.update(updateBookInput);
    }
    async deleteBook(id) {
        return this.BooksService.remove(id);
    }
};
exports.BooksResolver = BooksResolver;
__decorate([
    (0, graphql_1.Query)(() => [book_entities_1.Book], { name: 'Books' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BooksResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => book_entities_1.Book, { name: 'Book' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => book_entities_1.Book),
    __param(0, (0, graphql_1.Args)('createBookInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_input_1.CreateBookInput]),
    __metadata("design:returntype", void 0)
], BooksResolver.prototype, "createBook", null);
__decorate([
    (0, graphql_1.Mutation)(() => book_entities_1.Book),
    __param(0, (0, graphql_1.Args)('updateBookInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_book_input_1.UpdateBookInput]),
    __metadata("design:returntype", void 0)
], BooksResolver.prototype, "updateBook", null);
__decorate([
    (0, graphql_1.Mutation)(() => book_entities_1.Book),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BooksResolver.prototype, "deleteBook", null);
exports.BooksResolver = BooksResolver = __decorate([
    (0, graphql_1.Resolver)(() => book_entities_1.Book),
    __metadata("design:paramtypes", [book_service_1.BooksService])
], BooksResolver);
//# sourceMappingURL=book.resolver.js.map