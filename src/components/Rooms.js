import React, { useContext } from 'react';
import { SpinnerDotted } from 'spinners-react';
import Room from './Room';
import { RoomContext } from "../context/RoomContext";

const Rooms = () => {
  const { rooms, loading } = useContext(RoomContext);
  console.log(loading);
  return (
    <section className='bg-red py-24'>
      {loading && (
        <div className='h-screen fixed bottom-0 bg-black/90 w-full z-50f flex justify-center items-center'>
          <SpinnerDotted />
        </div>
      )
      }
      <div className="container mx-auto lg:px-0">
        <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] md:grid-cols-2 md:max-w-none md:mx-0 lg:grid-cols-3 lg:max-w-none lg:mx-0'>
          {rooms.map((room) => {
            return <Room room={room} key={room.id} />
          })}
        </div>
      </div>
    </section>
  )
};

export default Rooms;
