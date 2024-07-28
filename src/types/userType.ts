import { DeviceType } from "./deviceType";

export type UserType = Readonly<{
  id: string;
  name: string;
  email: string;
  userName: string;
  password: string;
  device: DeviceType[];
}>;
