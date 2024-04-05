import { IsNumber } from 'class-validator';
import { BaseQueryDTO } from './base-query.dto';
import { Transform } from 'class-transformer';

export class GetUsersDTO extends BaseQueryDTO {
  @IsNumber()
  @Transform(({ value }) => +value)
  take: number;
  @IsNumber()
  @Transform(({ value }) => +value)
  skip: number;
}
