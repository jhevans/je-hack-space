import { Body, Controller, Get, Param, Post } from '@nestjs/common';

class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return `${createCatDto.name} is a ${createCatDto.age} year old ${createCatDto.breed}`;
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a specific cat named ${id}`;
  }
}
