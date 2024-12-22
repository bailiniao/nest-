import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class TestService {
  getTest(Body, query): string {
    if (query.id == 1) {
      throw new HttpException('id is 1', HttpStatus.FORBIDDEN);
    }
    console.log(Body);
    console.log(query);
    return 'Hello World getTest' + JSON.stringify(Body) + JSON.stringify(query);
  }
  getData(Body, query): string {
    console.log(Body);
    console.log(query);
    return 'Hello World getTest' + JSON.stringify(Body) + JSON.stringify(query);
  }
  putData(Body, query): string {
    console.log(Body);
    console.log(query);
    return 'Hello World putData' + JSON.stringify(Body) + JSON.stringify(query);
  }
  DeleteData(Body, query): string {
    console.log(Body);
    console.log(query);
    return (
      'Hello World DeleteData' + JSON.stringify(Body) + JSON.stringify(query)
    );
  }
}
