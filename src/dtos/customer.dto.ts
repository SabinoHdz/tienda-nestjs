import { PartialType } from '@nestjs/mapped-types';
import { IsEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsEmpty()
  readonly name: string;
  @IsString()
  @IsEmpty()
  readonly lastName: string;
  @IsString()
  @IsEmpty()
  @IsPhoneNumber()
  readonly phone: string;
}
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
