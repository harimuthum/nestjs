// src/users/schemas/user.schema.ts
import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: String,
  age: Number,
  email: String,
});
