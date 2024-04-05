import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Drivers } from '../../src/databases/enum/driver.enum';
import { ProcessState } from './type/process-state.type';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('start')
  async start(@Query('driver') driver: Drivers, @Query('inserts') inserts: number): Promise<void> {
    await this.appService.start(driver, inserts);
  }

  @Get('stop')
  stop(@Query('driver') driver: Drivers): Promise<void> {
    return this.appService.stop(driver);
  }

  @Get('state')
  getState(): ProcessState {
    return this.appService.getState();
  }
}
