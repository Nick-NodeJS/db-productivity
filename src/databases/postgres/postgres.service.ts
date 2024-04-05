import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../prizma/postgres/client';

@Injectable()
export class PostgresService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
