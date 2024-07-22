import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, isNotEmpty } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty()
  @IsString()
  task: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty()
  @IsEmail()
  userEmail: string;
}
