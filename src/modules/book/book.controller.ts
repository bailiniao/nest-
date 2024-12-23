import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('book')
export class BookController {
  @Get(':id')
  getBook(@Param('id', ParseIntPipe) id): string {
    return 'get book' + id;
  }
}
