import React, { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import AdultsDropDown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";

const BookForm = () => {
  const { handleClick } = useContext(RoomContext);
  return (
    <form className='h-[300px] bg-green-100 w-full lg:h-[70px]'>
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className='flex-1 border-r'>
          <CheckIn />
        </div>
        <div className='flex-1 border-r'>
          <CheckOut />
        </div>
        <div className='flex-1 border-r'>
          <AdultsDropDown />
        </div>
        <div className='flex-1 border-r'>
          <KidsDropdown />
        </div>
        <button className='btn btn-primary' onClick={(e) => handleClick(e)}>Check Now</button>
      </div>
    </form>
  )
};
export default BookForm;
