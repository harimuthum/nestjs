import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field(() => ID)
  id: string;

  @Field()
  book_name: string;

  @Field()
  author_name: string;

  @Field()
  user: object;
}