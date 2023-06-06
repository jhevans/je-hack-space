import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.interface';

class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<string> {
    this.catsService.create(createCatDto);
    return `${createCatDto.name} is a ${createCatDto.age} year old ${createCatDto.breed}`;
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a specific cat named ${id}`;
  }
}
