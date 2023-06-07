import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return '<a href="https://jhevans.github.io/je-hack-space/">Pages</a> <a href="http://localhost:3000/intensity">Intensity</a>';
  }

  getNationalCarbonIntensity(): Observable<AxiosResponse> {
    return this.httpService.get(
      'https://api.carbonintensity.org.uk/regional/postcode/s10',
    );
  }
}
