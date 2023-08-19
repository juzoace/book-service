import { Injectable } from '@nestjs/common';
import { BooksRepository } from './book.repository';
import { CreateBooksDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
  constructor(private booksRepository: BooksRepository) {}

  async createBooks(data: CreateBooksDto) {
    return await this.booksRepository.createBooks(data);
  }
}
