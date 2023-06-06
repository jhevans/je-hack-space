import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { create } from 'domain';
import { Cat } from './cat.interface';

describe('CatsController', () => {
  let controller: CatsController;
  let service: CatsService;
  const inputCat = { name: 'Ferd', age: 2, breed: 'Ragdoll' };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    controller = module.get<CatsController>(CatsController);
    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a cat', () => {
    let cat: Cat;
    jest
      .spyOn(service, 'create')
      .mockImplementation((actualCat: Cat) => (cat = actualCat));
    controller.create(inputCat);
    expect(cat).toBe(inputCat);
  });
});
