import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserModule } from './user.module';
import { SharedModule } from '@app/common';
import { AppModule } from '../../src/app/app.module';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      imports: [AppModule, UserModule, SharedModule],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
