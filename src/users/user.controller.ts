import {
    Controller,
    Get,
    Res,
    HttpStatus,
    Post,
    Body,
    Put,
    NotFoundException,
    Delete,
    Param,
    Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';
import { PhylloHelper } from 'src/common/utils/phyllo-helper';

@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    public async getAllUsers(
        @Res() res: any,
    ) {
        const users = await PhylloHelper.getInstance().getAllUsers();

        return res.status(HttpStatus.OK).json(users);
    }

    @Post()
    public async createUser(
        @Res() res: any,
        @Body() createUserDto: CreateUserDto,
    ) {
        const createdUser = await PhylloHelper.getInstance().createUser(createUserDto);
        return res.status(HttpStatus.OK).json(createdUser);
    }

    @Get('/create-phyllo-token')
    public async createUserToken(
        @Res() res: any,
        @Query('userId') userId: string,
    ) {
        const createdSdkToken = await PhylloHelper.getInstance().createUserToken(userId);
        return res.status(HttpStatus.OK).json(createdSdkToken);
    }

    @Get('/get-user-accounts')
    public async getUserAccounts(
        @Res() res: any,
        @Query('userId') userId: string,
    ) {
        const userAccounts = await PhylloHelper.getInstance().getUserAccountDetails(userId);
        return res.status(HttpStatus.OK).json(userAccounts);
    }
}
