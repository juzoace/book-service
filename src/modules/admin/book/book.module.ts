import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { BooksRepository } from './book.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [BookService, BooksRepository, PrismaService],
  controllers: [BookController],
})
export class BookModule {}
