import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigModuleOptions } from './config';
import { LoggerModule } from './logger';
import { WinstonModule } from 'nest-winston';
import { getWinstonParams } from './logger/logger.config';
import { ContextModule } from './context/context.module';

export { LOGGER_SERVICE } from './logger/logger.module';
export { LoggerService } from './logger/logger.service';
export * from './common.module';

export type SharedModuleOptions = {
  serviceIdentifier: string;
  config?: ConfigModuleOptions;
};

@Global()
@Module({})
export class SharedModule {
  static register(options: SharedModuleOptions): DynamicModule {
    return {
      global: true,
      module: SharedModule,
      imports: [
        ConfigModule.forRoot({
          ...options?.config,
          isGlobal: true,
        }),
        ContextModule,
        LoggerModule,
        WinstonModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (config: ConfigService) =>
            getWinstonParams(options.serviceIdentifier, config),
        }),
      ],
      providers: [],
      exports: [ConfigModule, ContextModule, LoggerModule],
    };
  }
}
