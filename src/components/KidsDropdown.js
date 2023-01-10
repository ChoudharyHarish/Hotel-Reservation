import React, { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';
import { Menu } from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs';

const list = [
  { name: '0 Kids' },
  { name: '1 Kids' },
  { name: '2 Kids' },
  { name: '3 Kids' },
  { name: '4 Kids' }
]

const KidsDropdown = () => {
  const { kids, setkids } = useContext(RoomContext);

  return (
    <Menu as='div' className="bg-white relative w-full h-full">
      <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
        {kids === 0 ? 'No Kids' : kids + " Kids"}
        <BsChevronDown
          className='text-base text-accent-hover'
        />
      </Menu.Button>
      <Menu.Items as='ul' className='bg-white absolute w-full flex flex-col z-40 px-8'>
        {list.map((item, index) => <Menu.Item as='li' key={index}
          className="border-b last-of-type:border-b-0 h-12 hover:text-white hover:bg-accent w-full  flex justify-center text-center items-center cursor-pointer"
          onClick={() => setkids((Number(item.name[0])))}
        >{item.name}</Menu.Item>)}

      </Menu.Items>
    </Menu>

  )
};

export default KidsDropdown;

