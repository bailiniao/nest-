import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Query,
  Param,
  Body,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import { TestService } from './test.service';
import { HttpExceptionFilter } from './httpError/http-exception.filter';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly testService: TestService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/data/:id/:name')
  @UseFilters(new HttpExceptionFilter())
  getData(@Param() Param): string {
    console.log(Param);
    return 'data---' + Param.id + '---' + Param.name;
  }

  @Get('/data')
  @UseFilters(new HttpExceptionFilter())
  getDataAll(): string {
    return 'all data';
  }

  @Get('/test')
  @UseFilters(new HttpExceptionFilter())
  getTestAll(@Body() Body, @Query() query): string {
    return this.testService.getTest(Body, query);
  }

  @Post('/data')
  postData(@Body() Body, @Query() query): string {
    console.log(Body);
    console.log(query);
    return this.testService.getData(Body, query);
  }

  @Put('/data')
  @UseFilters(new HttpExceptionFilter())
  putData(@Body() Body, @Query() query): string {
    return this.putData(Body, query);
  }

  @Delete('/data')
  @UseFilters(new HttpExceptionFilter())
  DeleteData(@Body() Body, @Query() query): string {
    return this.DeleteData(Body, query);
  }
}
