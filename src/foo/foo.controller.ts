import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('foo')
export class FooController {
  @Get()
  getFoo(@Res() response: Response): Response {
    return response.send(418);
  }
}
