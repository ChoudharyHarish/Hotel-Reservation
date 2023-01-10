import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RoomContext } from '../context/RoomContext';
import AdultsDropDown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
// import ScrollTop from "../components/ScrollToTop";
import { FaCheck } from 'react-icons/fa';

const RoomDetails = () => {
  const { id } = useParams();
  const { rooms } = useContext(RoomContext);
  const room = rooms.filter((room) => room.id === Number(id));
  const { name, description, imageLg, price, facilities } = room[0];
  return (
    <section>
      <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>
        <div className='absolute w-full h-full bg-black/70'></div>
        <h1 className='text-6xl text-white z-20 font-primary text-center'>{name} Details</h1>
      </div>
      <div className='container mx-auto'>
        <div className="flex flex-col lg:flex-row h-full py-24">
          <div className="w-full h-full lg:w-[60%] px-6">
            <h2 className='h2'>{name}</h2>
            <p className="mb-8">{description}</p>
            <img className='mb-8' src={imageLg} alt="" />
            <div className='my-12'>
              <h3 className='h3 mb-3'>Room Facilities</h3>
              <p className='mb-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quas, enim animi asperiores architecto adipisci voluptatum corrupti nemo quia eos harum maiores obcaecati vel quidem autem velit hic? Quasi!</p>
              <div className='grid grid-cols-3 gap-6'>
                {facilities.map((item, index) => {
                  const { icon, name } = item;
                  return (
                    <div key={index} className='flex items-center gap-x-3 flex-1'>
                      <div className="text-3xl text-accent">{icon}</div>
                      <div className="text-base">{name}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='w-full h-full lg:w-[40%]'>
            <div className='py-8 px-6 bg-accent/20 mb-12'>
              <div className='flex flex-col space-y-4 mb-4'>
                <h3>Your Reservation</h3>
                <div className='h-[60px]'>
                  <CheckIn />
                </div>
                <div className='h-[60px]'>
                  <CheckOut />
                </div>
                <div className='h-[60px]'>
                  <AdultsDropDown />
                </div>
                <div className='h-[60px]'>
                  <KidsDropdown />
                </div>
              </div>
              <button className='btn btn-primary btn-lg w-full'>Book Now for ${price}</button>
            </div>
            <div>
              <h3 className='h3'>Hotel Rules</h3>
              <p className='mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ratione voluptatibus consequuntur aliquid debitis recusandae magni molestias, sit dolorum praesentium.
              </p>
              <ul className='flex flex-col  gap-y-4'>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-acent' />
                  Check-in : 3:00 PM - 9:00 PM
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-acent' />
                  Check-out : 10:30 AM
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-acent' />
                  No Smoking
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-acent' />
                  No Pets Allowed
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
export default RoomDetails;
