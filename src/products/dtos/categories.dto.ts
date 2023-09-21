import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
// readonly name?: string;
