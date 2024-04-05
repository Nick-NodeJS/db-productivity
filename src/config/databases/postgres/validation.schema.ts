import * as joi from 'joi';

export const postgresValidationSchema = {
  POSTGRES_HOST: joi.string().default('localhost'),
  POSTGRES_PORT: joi.number().default(5432),
  POSTGRES_DATABASE: joi.string().required(),
  POSTGRES_USERNAME: joi.string().required(),
  POSTGRES_PASSWORD: joi.string().required(),
  POSTGRES_SYNC: joi.boolean().default(true),
  POSTGRES_LOGGING: joi.boolean().default(false),
  POSTGRES_SCHEMA: joi.string().default('public'),
  POSTGRES_INSERT_CHUNK: joi.number().default(5000),
};
