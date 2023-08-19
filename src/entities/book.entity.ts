/* eslint-disable prettier/prettier */
import { Prisma } from '@prisma/client';

export class Book {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  discount: number;
  category?: Prisma.BooksOnCategoryCreateNestedManyWithoutBookInput;
}
