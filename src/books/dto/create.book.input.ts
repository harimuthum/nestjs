import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field()
  book_name: string;

  @Field()
  author_name: string;

  @Field()
   user: string;
}