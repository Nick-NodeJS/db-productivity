export type DriverState = {
  insertingUsers: boolean;
  inserUsersStarts: number;
  lastOperationDurationMS: number;
  avarageDurationMS: number;
};

export type ProcessState = {
  mongodb: DriverState;
  postgres: DriverState;
};
