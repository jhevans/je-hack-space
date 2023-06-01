import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<a href="https://jhevans.github.io/je-hack-space/">Pages</a>';
  }
}
