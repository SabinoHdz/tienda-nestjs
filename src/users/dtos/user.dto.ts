import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsEmpty()
  @IsEmail()
  readonly email: string;
  @IsString()
  @IsEmpty()
  readonly password: string;
  @IsString()
  @IsEmpty()
  readonly role: string;
}
export class UpdateUserDto extends PartialType(CreateUserDto) {}
