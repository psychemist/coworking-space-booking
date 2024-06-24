import { Tier } from './Tier';

export interface Booking {
  deskId: number;
  memberName: string;
  memberTier: Tier;
  hours: number;
  totalCost: number;
}
