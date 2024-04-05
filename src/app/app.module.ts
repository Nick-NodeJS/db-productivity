import { Inject, Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from '@app/common';
import config from '../config';
import configuration from '@app/common/config/configuration';
import { LOGGER_SERVICE, LoggerService } from '@app/common/logger';
import { DatabasesModule } from '../databases/databases.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    SharedModule.register({
      serviceIdentifier: 'db-productivity',
      config: configuration(config),
    }),
    DatabasesModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(
    @Inject(LOGGER_SERVICE) private readonly logger: LoggerService,
    private readonly appService: AppService,
  ) {}

  onModuleInit(): void {
    const { ENV, SERVICE_NAME, SERVICE_PORT, SERVICE_HOST } = process.env;
    this.logger.log(
      {
        env: ENV,
        name: SERVICE_NAME,
        host: SERVICE_HOST,
        port: SERVICE_PORT,
      },
      'App',
    );
    this.appService.initState();
  }
}
