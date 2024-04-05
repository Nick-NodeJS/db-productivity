import { Profiles } from 'src/databases/prizma/mongodb/client';

export class UserDTO {
  id: string | number;
  activeProfile: Profiles;
  createdAt: Date;
  updatedAt: Date;
}
