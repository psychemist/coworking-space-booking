import React, { useState } from 'react';
import { Desk } from '../models/Desk';
import { Tier } from '../models/Tier';

interface BookingFormProps {
  desks: Desk[];
  onBook: (deskId: number, memberName: string, memberTier: Tier, hours: number) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ desks, onBook }) => {
  const [selectedDesk, setSelectedDesk] = useState<number>(1);
  const [memberName, setMemberName] = useState<string>('');
  const [membershipTier, setMembershipTier] = useState<Tier>('Basic');
  const [hours, setHours] = useState<number>(1);

  const handleBooking = () => {
    onBook(selectedDesk, memberName, membershipTier, hours);
  };

  return (
    <div className="booking-form">
      <h3>Book a Desk</h3>
      <form>
        <div className="form-group">
          <label htmlFor="desk">Desk</label>
          <select
            id="desk"
            value={selectedDesk}
            onChange={(e) => setSelectedDesk(Number(e.target.value))}
          >
            {desks.map((desk) => (
              <option key={desk.id} value={desk.id}>
                Desk {desk.id} ({desk.type})
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="memberName">Name</label>
          <input
            type="text"
            id="memberName"
            value={memberName}
            onChange={(e) => setMemberName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="membershipTier">Membership Tier</label>
          <select
            id="membershipTier"
            value={membershipTier}
            onChange={(e) => setMembershipTier(e.target.value as Tier)}
          >
            <option value="Basic">Basic</option>
            <option value="Premium">Premium</option>
            <option value="Executive">Executive</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="hours">Hours</label>
          <input
            type="number"
            id="hours"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
          />
        </div>
        <button type="button" onClick={handleBooking}>
          Book Desk
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
