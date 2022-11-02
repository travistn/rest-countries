import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMoon } from 'react-icons/fi';
import { HiSun } from 'react-icons/hi';

import useDarkMode from '../hooks/useDarkMode';

const Header = () => {
  const [colorTheme, setColorTheme] = useDarkMode();
  const navigate = useNavigate();

  return (
    <div className='flex flex-row w-[screen] h-[80px] items-center p-4 lg:pl-12 lg:pr-12 shadow-header dark:bg-color-dark-blue'>
      <h5
        className='text-[14px] lg:text-[24px] leading-[20px] lg:leading-[33px] font-extrabold lg:hover:cursor-pointer dark:text-white'
        onClick={() => navigate('/')}>
        Where in the world?
      </h5>
      <div
        className='flex flex-row items-center ml-auto gap-2 lg:hover:cursor-pointer'
        onClick={() => setColorTheme(colorTheme)}>
        {colorTheme === 'dark' ? (
          <FiMoon className='text-[14px] lg:text-[16px]' />
        ) : (
          <HiSun className='text-[15px] lg:text-[18px] text-white' />
        )}
        <p className='font-semibold text-[12px] lg:text-[16px] leading-[16px] lg:leading-[22px] dark:text-white'>
          {colorTheme === 'dark' ? 'Dark' : 'Light'} Mode
        </p>
      </div>
    </div>
  );
};

export default Header;
