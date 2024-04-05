import { Global, Module } from '@nestjs/common';
import { MongodbService } from './mongodb/mongodb.service';
import { PostgresService } from './postgres/postgres.service';

@Global()
@Module({
  providers: [MongodbService, PostgresService],
})
export class DatabasesModule {}
