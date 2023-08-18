import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';

@Module({
  providers: [],
  controllers: [],
  imports: [BookModule],
})
export class AdminModule {}
