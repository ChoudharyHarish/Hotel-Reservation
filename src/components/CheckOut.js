import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import '../datepicker.css';
import { BsCalendar } from 'react-icons/bs';

const CheckOut = () => {
  const [CheckOutDate, setCheckOutDate] = useState(false);
  return (
    <div className="relative flex items-center justify-end h-full">
      <div className="absolute z-10 pr-8">
        <BsCalendar />
      </div>
      <DatePicker
        className='w-full h-full'
        selected={CheckOutDate}
        placeholderText="Check Out"
        onChange={(date) => setCheckOutDate(date)}
      />
    </div>
  )
};

export default CheckOut;




