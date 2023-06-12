import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return '<a href="https://jhevans.github.io/je-hack-space/">Pages</a> <a href="http://localhost:3000/intensity">Intensity</a>';
  }

  async getNationalCarbonIntensity(): Promise<NationalIntensity> {
    const payload: AxiosResponse<NationalIntensityResponse> =
      await firstValueFrom(
        this.httpService.get('https://api.carbonintensity.org.uk/intensity'),
      );

    return payload.data.data[0];
  }
}

export type NationalIntensityResponse = {
  data: NationalIntensity;
};

export type NationalIntensity = {
  from: Date;
  to: Date;
  intensity: Intensity;
};

export type Intensity = {
  forecast: number;
  actual: number;
  index: Index;
};

export enum Index {
  veryLow = 'very low',
  low = 'low',
  moderate = 'moderate',
  high = 'high',
  veryHigh = 'very high',
}
