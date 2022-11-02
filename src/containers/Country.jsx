import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

import Header from '../components/Header';

const Country = () => {
  const [country, setCountry] = useState();
  const [borderCountries, setBorderCountries] = useState();
  const { countryName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => setCountry(res?.data[0]));
  }, [countryName]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha?codes=${country?.borders}`)
      .then((res) => setBorderCountries(res.data));
  }, [country?.borders]);

  return (
    <div className='w-screen min-h-screen'>
      <Header />
      <div className='flex flex-col p-8 gap-8'>
        <button
          className='w-[104px] h-[32px] flex flex-row items-center justify-center gap-2 text-[14px] leading-[20px] rounded-[2px] shadow-backButton'
          onClick={() => navigate(-1)}>
          <BiArrowBack className='text-[16px]' />
          Back
        </button>
        <div className='flex flex-col mt-4 gap-8'>
          <img src={country?.flags.png} alt='flag' className='w-[320px] h-[229px] rounded-md' />
          <div className='flex flex-col gap-4'>
            <h5 className='text-[22px] leading-[30px] font-extrabold'>{country?.name.common}</h5>
            <div className='flex flex-col text-[14px] leading-[32px] font-extrabold'>
              <p>
                Official Name: <span className='font-normal'>{country?.name.official}</span>
              </p>
              <p>
                Population:{' '}
                <span className='font-normal'>{country?.population.toLocaleString()}</span>
              </p>
              <p>
                Region: <span className='font-normal'>{country?.region}</span>
              </p>
              <p>
                Sub Region: <span className='font-normal'>{country?.subregion}</span>
              </p>
              <p>
                Capital: <span className='font-normal'>{country?.capital}</span>
              </p>
            </div>
            <div className='flex flex-col text-[14px] leading-[32px] font-extrabold'>
              <p>
                Top Level Domain: <span className='font-normal'>{country?.tld}</span>
              </p>
              <p>
                Currencies:{' '}
                {country?.currencies &&
                  Object.values(country?.currencies)?.map((currency, index) => (
                    <span className='font-normal' key={currency?.name}>
                      {(index ? ', ' : '') + currency?.name}
                    </span>
                  ))}
              </p>
              <p>
                Languages:{' '}
                {country?.languages &&
                  Object.values(country?.languages).map((language, index) => (
                    <span className='font-normal' key={language}>
                      {(index ? ', ' : '') + language}
                    </span>
                  ))}
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h5 className='text-[16px] leading-[24px] font-semibold'>Border Countries:</h5>
              <div className='flex flex-row flex-wrap gap-2'>
                {borderCountries?.map((border) => (
                  <button
                    className='w-[96px] h-[28px] text-[12px] leading-[16px] shadow-borderCountry rounded-[2px]'
                    onClick={() => navigate(`/country/${border?.name.common}`)}>
                    {border?.name.common}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
