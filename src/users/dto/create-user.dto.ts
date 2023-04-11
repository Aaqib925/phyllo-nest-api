import {
  IsNotEmpty,
  IsString,
  IsDateString,
  IsInt,
  IsDate,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly external_id: string;

}
