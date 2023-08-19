/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Book, CreateBooksDto } from './dto/create-book.dto';
import { BookService } from './book.service';

@Controller('admin')
@ApiTags('admin')
export class BookController {
  constructor(private bookService: BookService) {}

  @Post('books')
  @ApiOperation({ summary: 'Create a new book' })
  @ApiBody({ type: () => ({
    books: [Book],
  }), description: 'Array of books in the order' })
  async createBooks(@Body() data: CreateBooksDto) {
    return await this.bookService.createBooks(data);
  } 
}
