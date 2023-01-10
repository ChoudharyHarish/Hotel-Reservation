import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import '../datepicker.css';
import { BsCalendar } from 'react-icons/bs';
const CheckIn = () => {
  const [CheckInDate, setCheckInDate] = useState(false);
  return (
    <div className="relative flex items-center justify-end h-full">
      <div className="absolute z-10 pr-8">
        <BsCalendar />
      </div>
      <DatePicker
        className='w-full h-full'
        selected={CheckInDate}
        placeholderText="Check In"
        onChange={(date) => setCheckInDate(date)}
      />
    </div>
  )
};

export default CheckIn;
