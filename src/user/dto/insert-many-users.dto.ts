import { IsNumber } from 'class-validator';
import { BaseQueryDTO } from './base-query.dto';
import { Transform } from 'class-transformer';

export class InsertManyUsersDTO extends BaseQueryDTO {
  @IsNumber()
  @Transform(({ value }) => +value)
  inserts: number;
}
