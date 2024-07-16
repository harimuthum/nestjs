import { Model } from 'mongoose';
import { Book } from './entities/book.entities';
import { CreateBookInput } from './dto/create.book.input';
import { UpdateBookInput } from './dto/update.book.input';
export declare class BooksService {
    private BookModel;
    constructor(BookModel: Model<Book>);
    create(createBookInput: CreateBookInput): Promise<Book>;
    findAll(): Promise<Book[]>;
    findOne(id: string): Promise<Book>;
    update(updateBookInput: UpdateBookInput): Promise<Book>;
    remove(id: string): Promise<Book>;
}
