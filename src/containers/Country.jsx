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
      <div className='flex flex-col p-8 lg:p-16 gap-8'>
        <button
          className='w-[104px] h-[32px] lg:w-[136px] lg:h-[40px] flex flex-row items-center justify-center gap-2 text-[14px] lg:text-[16px] leading-[20px] rounded-[2px] shadow-backButton'
          onClick={() => navigate(-1)}>
          <BiArrowBack className='text-[16px] lg:text-[18px]' />
          Back
        </button>
        <div className='flex flex-col lg:flex-row mt-4 gap-8 lg:items-center'>
          <img
            src={country?.flags.png}
            alt='flag'
            className='w-[320px] h-[229px] lg:w-[560px] lg:h-[401px] rounded-md'
          />
          <div className='flex flex-col gap-4 lg:ml-12'>
            <h5 className='text-[22px] lg:text-[32px] leading-[30px] lg:leading-[44px] font-extrabold'>
              {country?.name.common}
            </h5>
            <div className='flex flex-col lg:flex-row gap-4 lg:gap-[6rem] lg:mt-4'>
              <div className='flex flex-col text-[14px] lg:text-[16px] leading-[32px] font-extrabold'>
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
              <div className='flex flex-col text-[14px] lg:text-[16px] leading-[32px] font-extrabold'>
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
            </div>
            <div className='flex flex-col gap-4 lg:mt-6'>
              <h5 className='text-[16px] lg:text-[16px] leading-[24px] font-semibold'>
                Border Countries:
              </h5>
              <div className='flex flex-row flex-wrap gap-2'>
                {borderCountries ? (
                  borderCountries?.map((border) => (
                    <button
                      className='w-[100px] lg:w-[120px] h-[32px] lg:h-[40px] text-[12px] lg:text-[14px] leading-[16px] lg:leading-[19px] shadow-borderCountry rounded-[2px] lg:hover:cursor-pointer lg:hover:bg-gray-100'
                      onClick={() => navigate(`/country/${border?.name.common}`)}>
                      {border?.name.common}
                    </button>
                  ))
                ) : (
                  <p>There are no border countries.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
