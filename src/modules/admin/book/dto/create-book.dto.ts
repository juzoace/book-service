/* eslint-disable prettier/prettier */
import { IsArray, IsString, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class Book {
  // @IsNumber()
  // @ApiPropertyOptional({
  //   example: 1,
  //   type: String,
  //   required: true,
  //   description: 'ID of Book',
  // })
  // id: string;

  // Other book properties if needed
  @IsString()
  @ApiPropertyOptional({
    example: 'Harry potter and deathy hallow',
    type: String,
    required: true,
    description: 'Title of Book',
  })
  title: string;

  @IsString()
  @ApiPropertyOptional({
    example: 'Harry potter series',
    type: String,
    required: true,
    description: 'Description of Book',
  })
  description: string;

  @IsString()
  @ApiPropertyOptional({
    example:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564',
    type: String,
    required: true,
    description: 'Url of the Book image',
  })
  imageUrl: string;

  @IsNumber()
  @ApiPropertyOptional({
    example: 10,
    type: Number,
    required: true,
    description: 'Price of Book',
  })
  price: number;

  @IsNumber()
  @ApiPropertyOptional({
    example: 10,
    type: Number,
    required: true,
    description: 'Discount Price of Book',
  })
  discount: number;
}

export class CreateBooksDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Book)
  @ApiPropertyOptional({
    type: Book,
    isArray: true,
    description: 'Array of books',
  })
  books: Book[];
}