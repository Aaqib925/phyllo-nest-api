import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto, UpdateUserDto } from './dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { IUser } from './interfaces/user.interface';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor() { }

    // public async findAll(
    //     paginationQuery: PaginationQueryDto,
    // ): Promise<User[]> {
    //     const { limit, offset } = paginationQuery;

    //     return await this.userModel
    //         .find()
    //         .skip(offset)
    //         .limit(limit)
    //         .exec();
    // }


}
