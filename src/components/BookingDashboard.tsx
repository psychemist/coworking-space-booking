import React from 'react';
import { Booking } from '../models/Booking';

interface BookingDashboardProps {
  bookings: Booking[];
}

const BookingDashboard: React.FC<BookingDashboardProps> = ({ bookings }) => {
  const totalRevenue = bookings.reduce((sum, booking) => sum + booking.totalCost, 0);

  return (
    <div className="booking-dashboard">
      <h3>Booking Dashboard</h3>
      <p>Total Revenue: ${totalRevenue.toFixed(2)}</p>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
            {booking.memberName} booked Desk {booking.deskId} for {booking.hours} hours ({booking.memberTier}) - ${booking.totalCost.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingDashboard;
