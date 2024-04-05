import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../prizma/mongodb/client';

@Injectable()
export class MongodbService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
