import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

import Header from '../components/Header';

const Country = () => {
  const [country, setCountry] = useState();
  const { countryName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => setCountry(res.data[0]));
  }, [countryName]);

  useEffect(() => {
    console.log(country);
  }, [country]);

  return (
    <div className='w-screen min-h-screen'>
      <Header />
      <div className='flex flex-col p-8'>
        <button
          className='w-[104px] h-[32px] flex flex-row items-center justify-center gap-2 text-[14px] leading-[20px] rounded-[2px] shadow-backButton'
          onClick={() => navigate(-1)}>
          <BiArrowBack className='text-[16px]' />
          Back
        </button>
        <div>
          <h5>{country?.region}</h5>
        </div>
      </div>
    </div>
  );
};

export default Country;
