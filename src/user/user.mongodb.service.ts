import { Injectable } from '@nestjs/common';
import { MongodbService } from '../../src/databases/mongodb/mongodb.service';
import { User, Prisma } from '../databases/prizma/mongodb/client';
// import { ObjectId } from 'bson';
import { LoggerService } from '@app/common';
import { ConfigService } from '@nestjs/config';
import { UserDTO } from './dto/user.dto';
import { UserService } from './interface/user-service.interface';

@Injectable()
export class UserMongoDBService implements UserService {
  constructor(
    private readonly mongodb: MongodbService,
    private readonly logger: LoggerService,
    private readonly config: ConfigService,
  ) {}

  async getAll(take: number, skip: number): Promise<UserDTO[]> {
    this.logger.log(`...getting ${take} users on position ${skip}`);
    const result = await this.mongodb.user.findMany({
      take,
      skip,
      select: {
        id: true,
        activeProfile: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    this.logger.log(`Result of getting is ok!`);
    return result;
  }

  async insertOne(): Promise<User> {
    const newUser = this.mongodb.user.create({
      data: this.generateNewUserData(),
    });
    return newUser;
  }

  async insertMany(inserts: number): Promise<number> {
    const newUsers = Array(inserts).fill(this.generateNewUserData());
    const insertsPart = this.config.get<number>('mongodb.insert_chunk');
    const promises = [];
    let restInserts = newUsers.length;
    while (restInserts > 0) {
      this.logger.log(
        `...put next ${insertsPart < restInserts ? insertsPart : restInserts} promises of ${restInserts} inserts`,
      );
      promises.push(this.mongodb.user.createMany({ data: newUsers.splice(0, insertsPart) }));
      restInserts = newUsers.length;
    }
    this.logger.log(`Insert ${inserts} into Data Storage`);
    const result = (await Promise.all(promises)).reduce((acc, curr) => acc + curr.count, 0);
    this.logger.log(`...Result: ${result}`);
    return result;
  }

  private generateNewUserData(): Prisma.UserCreateManyInput {
    return {};
    // return {
    //   cyberSherlock: {
    //     userId: new ObjectId().toString(),
    //     name: 'RandomUser' + Math.random(),
    //     email: 'randomuser' + Math.random() + '@gmail.com',
    //     emailVerified: false,
    //     phone: '+380669756666',
    //     // TODO: fix naming
    //     phone_verified: false,
    //     picture: '',
    //     hash: 'RandomHash' + Math.random(),
    //   },
    // };
  }
}
