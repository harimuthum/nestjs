// src/Books/Books.resolver.ts
import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { BooksService } from './book.service';
import { Book } from './entities/book.entities';
import { CreateBookInput } from './dto/create.book.input';
import { UpdateBookInput } from './dto/update.book.input';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly BooksService: BooksService) {}

  @Query(() => [Book], { name: 'Books' })
  findAll() {
    return this.BooksService.findAll();
  }

  @Query(() => Book, { name: 'Book' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.BooksService.findOne(id);
  }

  @Mutation(() => Book)
  createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    return this.BooksService.create(createBookInput);
  }

  @Mutation(() => Book)
  updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
    return this.BooksService.update(updateBookInput);
  }

  @Mutation(() => Book)
  async deleteBook(@Args('id', { type: () => ID }) id: string): Promise<Book> {
    return this.BooksService.remove(id);
  }
}
