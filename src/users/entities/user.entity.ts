import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Int)
  age: number;

  @Field()
  email: string;
}
