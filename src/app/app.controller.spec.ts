import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppModule } from './app.module';
import { UserPostgresService } from '../../src/user/user.postgres.service';
import { UserMongoDBService } from '../../src/user/user.mongodb.service';
import { LoggerService, SharedModule } from '@app/common';
import { PostgresService } from '../../src/databases/postgres/postgres.service';
import { MongodbService } from '../../src/databases/mongodb/mongodb.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule, SharedModule],
      controllers: [AppController],
      providers: [
        AppService,
        UserPostgresService,
        UserMongoDBService,
        LoggerService,
        PostgresService,
        MongodbService,
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });
});
