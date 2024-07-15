import { BooksService } from './book.service';
import { Book } from './entities/book.entities';
import { CreateBookInput } from './dto/create.book.input';
import { UpdateBookInput } from './dto/update.book.input';
export declare class BooksResolver {
    private readonly BooksService;
    constructor(BooksService: BooksService);
    findAll(): Promise<Book[]>;
    findOne(id: string): Promise<Book>;
    createBook(createBookInput: CreateBookInput): Promise<Book>;
    updateBook(updateBookInput: UpdateBookInput): Promise<Book>;
    deleteBook(id: string): Promise<Book>;
}
