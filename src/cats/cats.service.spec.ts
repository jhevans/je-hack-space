import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should add a cat and then return it', () => {
    const cat = { name: 'Ferd', age: 2, breed: 'Ragdoll' };
    service.create(cat);
    expect(service.findAll()).toContain(cat);
  });
});
