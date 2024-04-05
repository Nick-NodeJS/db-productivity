import { Injectable } from '@nestjs/common';
// import { ObjectId } from 'bson';
import { LoggerService } from '@app/common';
import { ConfigService } from '@nestjs/config';
import { PostgresService } from '../../src/databases/postgres/postgres.service';
import { Prisma, User } from '../databases/prizma/postgres/client';
import { UserService } from './interface/user-service.interface';

@Injectable()
export class UserPostgresService implements UserService {
  constructor(
    private readonly logger: LoggerService,
    private readonly config: ConfigService,
    private readonly postgres: PostgresService,
  ) {}

  async getAll(take: number, skip: number): Promise<User[]> {
    this.logger.log(`...getting ${take} users on position ${skip}`);
    const result = await this.postgres.user.findMany({ take, skip });
    this.logger.log(`Result of getting is ok!`);
    return result;
  }

  async insertOne(): Promise<User> {
    const newUser = this.postgres.user.create({
      data: this.generateNewUserData(),
      include: {
        cyberSherlock: true,
      },
    });
    return newUser;
  }

  async insertMany(inserts: number): Promise<number> {
    const newUsers = Array(inserts).fill(this.generateNewUserData());
    const insertsPart = this.config.get<number>('postgres.insert_chunk');
    const promises = [];
    let restInserts = newUsers.length;
    while (restInserts > 0) {
      this.logger.log(
        `...put next ${insertsPart < restInserts ? insertsPart : restInserts} promises of ${restInserts} inserts`,
      );
      promises.push(this.postgres.user.createMany({ data: newUsers.splice(0, insertsPart) }));
      restInserts = newUsers.length;
    }
    this.logger.log(`Insert ${inserts} into Data Storage`);
    const result = (await Promise.all(promises)).reduce((acc, curr) => acc + curr.count, 0);
    this.logger.log(`...Result: ${result}`);
    return result;
  }

  private generateNewUserData(): Prisma.UserCreateInput {
    return {};
    // return {
    //   cyberSherlock: {
    //       create: {
    //       name: "RandomUser" + Math.random(),
    //       email: "randomuser" + Math.random() + "@gmail.com",
    //       emailVerified: false,
    //       phone: "+380669756666",
    //       // TODO: fix naming
    //       phone_verified: false,
    //       picture: "",
    //       hash: "RandomHash" + Math.random(),
    //       }
    //   }
    // }
  }
}
