import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMoon } from 'react-icons/fi';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-row w-[screen] h-[80px] items-center p-4 lg:pl-12 lg:pr-12 shadow-header'>
      <h5
        className='text-[14px] lg:text-[24px] leading-[20px] lg:leading-[33px] font-extrabold lg:hover:cursor-pointer'
        onClick={() => navigate('/')}>
        Where in the world?
      </h5>
      <div className='flex flex-row items-center ml-auto gap-2'>
        <FiMoon className='text-[14px] lg:text-[16px]' />
        <p className='font-semibold text-[12px] lg:text-[16px] leading-[16px] lg:leading-[22px]'>
          Dark Mode
        </p>
      </div>
    </div>
  );
};

export default Header;
