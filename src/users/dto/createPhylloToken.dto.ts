import {
    IsNotEmpty,
    IsString,
    IsDateString,
    IsInt,
    IsDate,
} from 'class-validator';

export class CreatePhylloTokenRequestDto {
    @IsString()
    @IsNotEmpty()
    readonly user_id: string;

}
