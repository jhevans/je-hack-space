import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<a href="https://jhevans.github.io/je-hack-space/">Pages</a> <a href="http://localhost:3000/foo">Foo</a> <a href="http://localhost:3000/cats">Cats</a>';
  }
}
