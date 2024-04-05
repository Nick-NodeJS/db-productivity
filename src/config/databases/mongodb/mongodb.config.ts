import { registerAs } from '@nestjs/config';

export const mongodbConfig = registerAs('mongodb', () => ({
  host: process.env.MONGODB_URL,
  insert_chunk: process.env.MONGODB_INSERT_CHUNK,
}));
