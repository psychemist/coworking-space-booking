import React, { useState } from 'react';
import Desk from './components/Desk';
import BookingForm from './components/BookingForm';
import BookingDashboard from './components/BookingDashboard';
import { Desk as DeskModel } from './models/Desk';
import { Booking } from './models/Booking';
import { Tier as MembershipTier } from './models/Tier';

const App: React.FC = () => {
  const [desks, setDesks] = useState<DeskModel[]>(initialDesks);
  const [bookings, setBookings] = useState<Booking[]>([]);

  const handleBook = (deskId: number, memberName: string, memberTier: MembershipTier, hours: number) => {
    const desk = desks.find((d) => d.id === deskId);
    if (desk && !desk.isBooked) {
      const deskPrice = desk.type === 'individual'
        ? memberTier === 'Basic'
          ? 10
          : memberTier === 'Premium'
            ? 15
            : 20
        : 25;

      const totalCost = hours > 3
        ? hours * deskPrice * 0.9
        : hours * deskPrice;

      setDesks((prevDesks) => prevDesks.map((d) => d.id === deskId ? { ...d, isBooked: true, bookedBy: memberName } : d));
      setBookings((prevBookings) => [...prevBookings, { deskId, memberName, memberTier, hours, totalCost }]);
    }
  };

  return (
    <div className="App">
      <h1>Co-Working Space Booking System</h1>
      <div className="desks">
        {desks.map((desk) => (
          <Desk key={desk.id} desk={desk} onBook={(deskId) => handleBook(deskId, '', 'Basic', 1)} />
        ))}
      </div>
      <BookingForm desks={desks} onBook={handleBook} />
      <BookingDashboard bookings={bookings} />
    </div>
  );
};

export default App;

const initialDesks: DeskModel[] = [
  { id: 1, type: 'individual', isBooked: false },
  { id: 2, type: 'individual', isBooked: false },
  { id: 3, type: 'individual', isBooked: false },
  { id: 4, type: 'individual', isBooked: false },
  { id: 5, type: 'individual', isBooked: false },
  { id: 6, type: 'individual', isBooked: false },
  { id: 7, type: 'individual', isBooked: false },
  { id: 8, type: 'individual', isBooked: false },
  { id: 9, type: 'individual', isBooked: false },
  { id: 10, type: 'individual', isBooked: false },
  { id: 11, type: 'team', isBooked: false },
  { id: 12, type: 'team', isBooked: false },
  { id: 13, type: 'team', isBooked: false },
  { id: 14, type: 'team', isBooked: false },
  { id: 15, type: 'team', isBooked: false },
];
