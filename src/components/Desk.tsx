import React from 'react';
import { Desk as DeskModel } from '../models/Desk';

interface DeskProps {
  desk: DeskModel;
  onBook: (deskId: number) => void;
}

const Desk: React.FC<DeskProps> = ({ desk, onBook }) => {
  return (
    <div className={`desk ${desk.isBooked ? 'booked' : ''}`}>
      <p>Desk {desk.id} ({desk.type})</p>
      <button onClick={() => onBook(desk.id)} disabled={desk.isBooked}>
        {desk.isBooked ? 'Booked' : 'Book'}
      </button>
    </div>
  );
};

export default Desk;
