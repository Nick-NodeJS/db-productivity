import { json, urlencoded } from 'express';

import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app/app.module';
import { setupApp } from '@app/common/app';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
    bodyParser: true,
    abortOnError: false,
  });

  const configService = app.get<ConfigService>(ConfigService);
  app.use(json({ limit: configService.get<string>('app.bodyLimit') }));
  app.use(urlencoded({ extended: true, limit: configService.get<string>('app.urlLimit') }));

  await setupApp(app);
}

bootstrap();
