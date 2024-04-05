import * as joi from 'joi';

export const mongodbValidationSchema = {
  MONGODB_URL: joi.string().required(),
  MONGODB_INSERT_CHUNK: joi.number().default(5000),
};
