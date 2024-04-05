import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { EnvEnum } from '../enums/env.enum';

import { HeadersInterceptor } from './headers.interceptor';
import { LOGGER_SERVICE } from '../logger';

export async function setupApp(app: NestExpressApplication): Promise<NestExpressApplication> {
  const logger = app.get(LOGGER_SERVICE);

  app.useLogger(logger);
  app.useGlobalInterceptors(new HeadersInterceptor(logger));
  app.enableVersioning({ type: VersioningType.URI, prefix: 'v', defaultVersion: '1' });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const { NODE_ENV, SERVICE_NAME, SERVICE_PORT, SERVICE_HOST } = process.env;

  if (NODE_ENV !== EnvEnum.production) {
    const config = new DocumentBuilder()
      .setTitle(SERVICE_NAME)
      .setDescription(`${SERVICE_NAME} description`)
      .addBearerAuth()
      .setVersion('v1')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(SERVICE_PORT || 3000, SERVICE_HOST);

  if (NODE_ENV === EnvEnum.development) {
    // eslint-disable-next-line no-console
    process.on('warning', (e) => console.warn(e.stack));
  }

  return app;
}
