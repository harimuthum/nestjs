import { User } from 'src/users/entities/user.entity';
import { Schema as MongooseSchema } from 'mongoose';
export declare class Book {
    _id: MongooseSchema.Types.ObjectId;
    book_name: string;
    author_name: string;
    user: User;
}
