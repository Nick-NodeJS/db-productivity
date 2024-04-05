export interface UserService {
  insertMany(inserts: number): Promise<number>;
}
