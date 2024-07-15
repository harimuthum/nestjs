import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    create(createUserInput: CreateUserInput): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(updateUserInput: UpdateUserInput): Promise<User>;
    remove(id: string): Promise<User>;
}
