export interface Desk {
  id: number;
  type: 'individual' | 'team';
  isBooked: boolean;
  bookedBy?: string;
}
