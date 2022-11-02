import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMoon } from 'react-icons/fi';

const Header = () => {
  const [darkModeToggle, setDarkModeToggle] = useState(false);
  const navigate = useNavigate();

  console.log(darkModeToggle);

  return (
    <div className={`${darkModeToggle && 'dark'}`}>
      <div className='flex flex-row w-[screen] h-[80px] items-center p-4 lg:pl-12 lg:pr-12 shadow-header dark:bg-color-dark-blue'>
        <h5
          className='text-[14px] lg:text-[24px] leading-[20px] lg:leading-[33px] font-extrabold lg:hover:cursor-pointer dark:text-white'
          onClick={() => navigate('/')}>
          Where in the world?
        </h5>
        <div
          className='flex flex-row items-center ml-auto gap-2 lg:hover:cursor-pointer'
          onClick={() => setDarkModeToggle(!darkModeToggle)}>
          <FiMoon className='text-[14px] lg:text-[16px] dark:fill-white' />
          <p className='font-semibold text-[12px] lg:text-[16px] leading-[16px] lg:leading-[22px] dark:text-white'>
            Dark Mode
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
