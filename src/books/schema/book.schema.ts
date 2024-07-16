// src/users/schemas/user.schema.ts
import { Schema } from 'mongoose';

export const BookSchema = new Schema({
  book_name: String,
  author_name:String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

