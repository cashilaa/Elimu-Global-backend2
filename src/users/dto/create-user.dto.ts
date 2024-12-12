import { IsEmail, IsNotEmpty, MinLength, IsIn, IsOptional, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly firstName: string;

  @IsNotEmpty()
  readonly lastName: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  @IsNotEmpty()
  @IsIn(['student', 'instructor', 'admin'])
  readonly role: string;

  @IsOptional()
  @IsBoolean()
  readonly isApproved?: boolean;
}
