import React from 'react';
import { FiMoon } from 'react-icons/fi';

const Header = () => {
  return (
    <div className='flex flex-row w-screen h-[80px] items-center p-4 bg-gray-200'>
      <h5 className='text-[14px] leading-[20px] font-extrabold '>Where in the world?</h5>
      <div className='flex flex-row items-center ml-auto gap-2'>
        <FiMoon size='14' />
        <p className='font-semibold text-[12px] leading-[16px]'>Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
