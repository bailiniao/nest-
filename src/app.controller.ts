import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Query,
  Param,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/data/:id/:name')
  getData(@Param() Param): string {
    console.log(Param);
    return 'data---' + Param.id + '---' + Param.name;
  }

  @Get('/data')
  getDataAll(): string {
    return 'all data';
  }

  @Post('/data')
  postData(@Body() Body, @Query() query): string {
    console.log(Body);
    console.log(query);
    return 'postData' + JSON.stringify(Body) + JSON.stringify(query);
  }

  @Put('/data')
  putData(): string {
    return 'putData';
  }

  @Delete('/data')
  DeleteData(): string {
    return 'putData';
  }
}
