/* eslint-disable prettier/prettier */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateBooksDto } from './dto/create-book.dto';

@Injectable()
export class BooksRepository {
  constructor(private prisma: PrismaService) {}
 
  async createBooks(books: CreateBooksDto) {
    try {
        const booksToCreate = books.books.map(bookData => ({
            title: bookData.title,
            description: bookData.description,
            imageUrl: bookData.imageUrl,
            price: bookData.price,
            discount: bookData.discount,
          }));
          
          const createdBooks = await this.prisma.book.createMany({
            data: booksToCreate,
            skipDuplicates: true,
          });
          
          return createdBooks;
    } catch(error) {
        // Log error for error
        // console.log(error)
        throw new InternalServerErrorException('Error creating books');
    }
  }
}

