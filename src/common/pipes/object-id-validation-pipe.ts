import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { Types } from 'mongoose';
import { plainToClass } from 'class-transformer';
import { IsMongoId, validate } from 'class-validator';


class ObjectIdDto {
    @IsMongoId()
    id: string;
}



@Injectable()
export class ObjectIdValidationPipe implements PipeTransform {
    async transform(value: any) {
        if (!Types.ObjectId.isValid(value)) {
            throw new BadRequestException('Invalid MongoDB ObjectId');
        }

        const object = plainToClass(ObjectIdDto, { id: value });
        const errors = await validate(object);

        if (errors.length) {
            throw new BadRequestException('Validation failed');
        }

        return value;
    }
}
