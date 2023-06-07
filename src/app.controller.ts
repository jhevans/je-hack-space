import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    return this.appService.getHello();
  }

  @Get('intensity')
  @Header('Content-Type', 'application/json')
  async getIntensity() {
    return (await firstValueFrom(this.appService.getNationalCarbonIntensity()))
      .data;
  }
}
