import { join } from 'path';
import { mongodbConfig } from './databases/mongodb/mongodb.config';
import { postgresConfig } from './databases/postgres/postgres.config';
import * as validations from './env.validation';
import { appConfig } from './app.config';

const config = {
  envFileDir: join(__dirname, '../env'),
  ...validations,
  load: [appConfig, mongodbConfig, postgresConfig],
};

export default config;
