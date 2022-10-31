import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import Header from '../components/Header';

const Home = () => {
  const [search, setSearch] = useState('');

  return (
    <div className='w-screen min-h-screen'>
      <Header />
      <div className='flex flex-col items-center'>
        <form className='flex flex-row items-center justify-center pl-8 w-[343px] h-[48px] mt-8 rounded-[5px] gap-4 shadow-search'>
          <label>
            <AiOutlineSearch className='text-[#B2B2B2]' />
          </label>
          <input
            className='text-[12px] w-[100%] outline-none'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search for a country...'
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
