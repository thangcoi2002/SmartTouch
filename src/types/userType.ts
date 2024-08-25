import {DeviceType} from './deviceType';

export type UserType = Readonly<{
  id: string | null;
  name: string | null;
  email: string | null;
  userName: string | null;
  password: string | null;
  device: DeviceType[];
}>;
