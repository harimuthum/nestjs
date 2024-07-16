import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Schema as MongooseSchema } from 'mongoose';


@ObjectType()
export class Book {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId;

  @Field()
  book_name: string;

  @Field()
  author_name: string;

  @Field(() => User)
  user: User;
}