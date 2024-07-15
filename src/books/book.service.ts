// src/Books/Books.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './entities/book.entities';
import { CreateBookInput } from './dto/create.book.input';
import { UpdateBookInput } from './dto/update.book.input';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private BookModel: Model<Book>) {}

  async create(createBookInput: CreateBookInput): Promise<Book> {
    const createdBook = new this.BookModel(createBookInput);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.BookModel.find().populate('user').exec();
  }
  
  async findOne(id: string): Promise<Book> {
    const Book = await this.BookModel.findById(id).exec();
    if (!Book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return Book;
  }

  async update(updateBookInput: UpdateBookInput): Promise<Book> {
    const { id, ...updateData } = updateBookInput;
    return this.BookModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }
  
  async remove(id: string): Promise<Book> {
    return this.BookModel.findOneAndDelete({ _id: id }).exec();
  }
}
