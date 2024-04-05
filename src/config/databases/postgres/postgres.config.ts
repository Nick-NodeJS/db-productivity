import { registerAs } from '@nestjs/config';

export const postgresConfig = registerAs('postgres', () => ({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DATABASE,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  synchronize: JSON.parse(process.env.POSTGRES_SYNC),
  schema: process.env.POSTGRES_SCHEMA,
  logging: JSON.parse(process.env.POSTGRES_LOGGING),
  insert_chunk: process.env.POSTGRES_INSERT_CHUNK,
}));
