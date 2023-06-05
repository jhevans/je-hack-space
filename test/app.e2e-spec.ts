import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', async () => {
    const response = await request(app.getHttpServer()).get('/').expect(200);
    expect(response.text).toContain('Pages');
    return response;
  });

  it('/cats (POST)', () => {
    return request(app.getHttpServer())
      .post('/cats')
      .send({
        name: 'Ferd',
        age: 2,
        breed: 'Ragdoll',
      })
      .expect(201)
      .expect('Ferd is a 2 year old Ragdoll');
  });
});
