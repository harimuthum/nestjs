import { Schema } from 'mongoose';
export declare const BookSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    user?: import("mongoose").Types.ObjectId;
    book_name?: string;
    author_name?: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    user?: import("mongoose").Types.ObjectId;
    book_name?: string;
    author_name?: string;
}>> & import("mongoose").FlatRecord<{
    user?: import("mongoose").Types.ObjectId;
    book_name?: string;
    author_name?: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
