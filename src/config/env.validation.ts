import * as Joi from 'joi';
import { mongodbValidationSchema } from './databases/mongodb/validation.schema';
import { postgresValidationSchema } from './databases/postgres/validation.schema';

export const validationSchema = Joi.object({
  ...mongodbValidationSchema,
  ...postgresValidationSchema,
});

export const validationOptions = {
  abortEarly: false,
};
