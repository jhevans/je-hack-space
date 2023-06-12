import { Controller, Get, Header, Render } from '@nestjs/common';
import { AppService, Index, NationalIntensity } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async getIndex(): Promise<{
    title: string;
    content: string;
    pagesLink: string;
    intensityIndex: Index;
    intensityActual: number;
  }> {
    const intensity = (await this.appService.getNationalCarbonIntensity())
      .intensity;
    return {
      title: "Welcome to John's Hack Space",
      content: 'Your stuff goes here',
      pagesLink: 'http://localhost:4000/je-hack-space/',
      intensityIndex: intensity.index,
      intensityActual: intensity.actual,
    };
  }

  @Get('intensity')
  @Header('Content-Type', 'application/json')
  async getIntensity(): Promise<NationalIntensity> {
    return await this.appService.getNationalCarbonIntensity();
  }
}
