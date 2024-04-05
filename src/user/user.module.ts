import { Module } from '@nestjs/common';
import { UserMongoDBService } from './user.mongodb.service';
import { UserController } from './user.controller';
import { MongodbService } from '../../src/databases/mongodb/mongodb.service';
import { LoggerService } from '@app/common';
import { PostgresService } from '../../src/databases/postgres/postgres.service';
import { UserPostgresService } from './user.postgres.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    ConfigService,
    UserMongoDBService,
    UserPostgresService,
    MongodbService,
    LoggerService,
    PostgresService,
  ],
  controllers: [UserController],
  exports: [UserMongoDBService, UserPostgresService],
})
export class UserModule {}
