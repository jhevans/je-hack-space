import { Controller, Get, Header, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async getIndex() {
    return {
      title: "Welcome to John's Hack Space",
      content: 'Your stuff goes here',
    };
  }

  @Get('intensity')
  @Header('Content-Type', 'application/json')
  async getIntensity() {
    return (await firstValueFrom(this.appService.getNationalCarbonIntensity()))
      .data;
  }
}
