import { Controller, Get, Query } from '@nestjs/common';
import { UserMongoDBService } from './user.mongodb.service';
import { Drivers } from '../../src/databases/enum/driver.enum';
import { UserPostgresService } from './user.postgres.service';
import { GetUsersDTO } from './dto/get-users.dto';
import { UserDTO } from './dto/user.dto';
import { InsertUserDTO } from './dto/insert-user.dto';
import { InsertManyUsersDTO } from './dto/insert-many-users.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userMongoDBService: UserMongoDBService,
    private readonly userPostgresService: UserPostgresService,
  ) {}

  @Get()
  getHello(@Query() query: GetUsersDTO): Promise<UserDTO[]> {
    const { driver, take, skip } = query;
    switch (driver) {
      case Drivers.postgres:
        return this.userPostgresService.getAll(take, skip);
      default:
        return this.userMongoDBService.getAll(take, skip);
    }
  }

  @Get('/insert')
  insertOne(@Query() query: InsertUserDTO): Promise<UserDTO> {
    const { driver } = query;
    switch (driver) {
      case Drivers.postgres:
        return this.userPostgresService.insertOne();
      default:
        return this.userMongoDBService.insertOne();
    }
  }

  @Get('/insert-many')
  insertMany(@Query() query: InsertManyUsersDTO): Promise<number> {
    const { driver, inserts } = query;
    switch (driver) {
      case Drivers.postgres:
        return this.userPostgresService.insertMany(inserts);
      default:
        return this.userMongoDBService.insertMany(inserts);
    }
  }
}
