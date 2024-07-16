// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksService } from './book.service';
import { BooksResolver } from './book.resolver';
import {BookSchema } from './schema/book.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
  providers: [BooksService, BooksResolver],
})
export class BooksModule {}
