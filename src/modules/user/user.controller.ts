import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get(':id')
  // getUser(@Param() Param) {
  //   return 'get user' + Param.id;
  // }
  getUser(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return 'get user:' + id;
  }
}
