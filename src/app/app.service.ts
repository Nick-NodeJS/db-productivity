import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { DriverState, ProcessState } from './type/process-state.type';
import { Drivers } from '../../src/databases/enum/driver.enum';
import { UserPostgresService } from '../../src/user/user.postgres.service';
import { UserMongoDBService } from '../../src/user/user.mongodb.service';
import { LOGGER_SERVICE } from '@app/common';
import { UserService } from '../../src/user/interface/user-service.interface';

@Injectable()
export class AppService {
  constructor(
    @Inject(LOGGER_SERVICE) private readonly logger: LoggerService,
    private readonly userPostgresService: UserPostgresService,
    private readonly userMongodbService: UserMongoDBService,
  ) {}
  private processState: ProcessState;
  initState(): void {
    const initDriverState = {
      insertingUsers: false,
      inserUsersStarts: 0,
      lastOperationDurationMS: 0,
      avarageDurationMS: 0,
    };
    const state = {
      mongodb: initDriverState,
      postgres: { ...initDriverState },
    };
    this.setState(state);
  }
  getState(): ProcessState {
    return this.processState;
  }
  private getDriverState(driver: Drivers): DriverState {
    return this.processState[driver];
  }
  private setState(state: ProcessState): void {
    this.processState = state;
  }
  private setDriverState(driver: Drivers, state: DriverState): void {
    this.processState[driver] = state;
  }
  private updateState(driver: Drivers, duration: number): void {
    const state = this.getDriverState(driver);
    const driverState = this.updateDriverState(duration, state);
    this.setDriverState(driver, driverState);
  }
  private updateDriverState(duration: number, driverState: DriverState): DriverState {
    const { inserUsersStarts, avarageDurationMS } = driverState;
    driverState.inserUsersStarts += 1;
    driverState.lastOperationDurationMS = duration;
    // driverState.insertingUsers = false;
    driverState.avarageDurationMS =
      (avarageDurationMS * inserUsersStarts + duration) / driverState.inserUsersStarts;
    return driverState;
  }

  async start(driver: Drivers, inserts: number): Promise<void> {
    switch (driver) {
      case Drivers.mongodb:
        if (!this.getDriverState(driver).insertingUsers) {
          this.startInserting(driver, this.userMongodbService, inserts);
        }
        break;
      case Drivers.postgres:
        if (!this.getDriverState(driver).insertingUsers) {
          this.startInserting(driver, this.userPostgresService, inserts);
        }
        break;
      default:
        throw Error('Unknown driver');
    }
  }

  async stop(driver: Drivers): Promise<void> {
    const state = this.getDriverState(driver);
    switch (driver) {
      case Drivers.mongodb:
        break;
      case Drivers.postgres:
        break;
      default:
        throw Error('Unknown driver');
    }
    this.logger.log(`Stop ${driver.toUpperCase()} inserting!`);
    state.insertingUsers = false;
    this.setDriverState(driver, state);
  }

  private async startInserting(
    driver: Drivers,
    service: UserService,
    inserts: number,
  ): Promise<void> {
    this.logger.log(`Start ${driver.toUpperCase()} inserting...`);
    const state = this.getDriverState(driver);
    state.insertingUsers = true;
    this.setDriverState(driver, state);
    while (this.getDriverState(driver).insertingUsers) {
      const now = Date.now();
      await new Promise((ok) => {
        service.insertMany(inserts).finally(() => {
          const timeout = setTimeout(() => {
            clearTimeout(timeout);
            return ok(true);
          }, 1);
        });
      });
      const duration = Math.floor(Date.now() - now);
      this.updateState(driver, duration);
    }
  }
}
