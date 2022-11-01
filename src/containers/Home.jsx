import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';

import Header from '../components/Header';
import CountryCard from '../components/CountryCard';

const Home = () => {
  const [search, setSearch] = useState('');
  const [countryCount, setCountryCount] = useState(8);
  const [countries, setCountries] = useState();
  const [region, setRegion] = useState('All');
  const [filteredCountries, setFilteredCountries] = useState();

  useEffect(() => {
    const filterByRegion = () => {
      setFilteredCountries(countries?.filter((country) => country?.region === region));
    };

    filterByRegion();
  }, [region, countries]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => setCountries(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${search}`)
      .then((res) => setCountries(res.data));
  }, [search]);

  return (
    <div className='w-screen min-h-screen'>
      <Header />
      <div className='flex flex-col items-center'>
        <div className='flex flex-col lg:flex-row lg:w-screen'>
          <div className='lg:pl-12'>
            <form className='flex flex-row items-center pl-8 w-[343px] lg:w-[480px] h-[48px] lg:h-[56px] mt-8 rounded-[5px] gap-4 shadow-search'>
              <label>
                <AiOutlineSearch className='text-[#B2B2B2] lg:text-[18px]' />
              </label>
              <input
                className='text-[12px] lg:text-[14px] w-[100%] outline-none'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search for a country...'
              />
            </form>
          </div>
          <div className='lg:ml-auto lg:pr-12'>
            <select
              className='w-[200px] h-[48px] lg:h-[56px] mt-8 shadow-search text-[12px] lg:text-[14px] leading-[20px] lg:leading-[20px] font-normal p-4 rounded-[5px] mr-auto'
              onChange={(e) => {
                setRegion(e.target.value);
              }}>
              <option>Filter by Region</option>
              <option value='Africa'>Africa</option>
              <option value='Americas'>America</option>
              <option value='Asia'>Asia</option>
              <option value='Europe'>Europe</option>
              <option value='Oceania'>Oceania</option>
              <option value='All'>All</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-[6rem] mt-12 lg:flex-wrap lg:p-12'>
          {(region === 'All' ? countries : filteredCountries)
            ?.slice(0, countryCount)
            ?.map((country) => (
              <CountryCard country={country} key={country?.cca3} />
            ))}
        </div>
        <button
          className='w-[264px] lg:w-[400px] h-[55px] mt-8 mb-8 bg-[#1eb3df] text-white text-[18px] lg:text-[22px] font-semibold rounded-md'
          onClick={() => setCountryCount((prevCount) => prevCount + 8)}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Home;
