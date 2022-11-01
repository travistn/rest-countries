import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';

import Header from '../components/Header';
import CountryCard from '../components/CountryCard';

const Home = () => {
  const [search, setSearch] = useState('');
  const [countryCount, setCountryCount] = useState(10);
  const [countries, setCountries] = useState();

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => setCountries(res.data));
  }, []);

  return (
    <div className='w-screen min-h-screen'>
      <Header />
      <div className='flex flex-col items-center'>
        <form className='flex flex-row items-center pl-8 w-[343px] h-[48px] mt-8 rounded-[5px] gap-4 shadow-search'>
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
        <select className='w-[200px] h-[48px] mt-8 shadow-search text-[12px] leading-[20px] font-normal p-4 rounded-[5px] mr-auto ml-4'>
          <option>Filter by Region</option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
        <div className='flex flex-col gap-8 mt-8'>
          {countries?.slice(0, countryCount)?.map((country) => (
            <CountryCard country={country} />
          ))}
        </div>
        <button
          className='w-[264px] h-[50px] mt-8 mb-8 bg-[#1eb3df] text-white text-[18px] font-semibold rounded-md'
          onClick={() => setCountryCount((prevCount) => prevCount + 10)}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Home;
