/* eslint-disable prettier/prettier */
import { Prisma } from '@prisma/client';

export class Category {
  id: string;
  name: string;
  book?: Prisma.BooksOnCategoryCreateNestedManyWithoutBookInput;
}