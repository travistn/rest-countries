import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div className='w-[264px] h-[336px] flex flex-col rounded-[5px] shadow-countryCard'>
      <img
        src={country?.flags.png}
        alt='flag'
        className='w-[264px] h-[160px] rounded-t-[5px] overflow-hidden'
      />
      <div className='flex flex-col gap-4 p-6'>
        <h5 className='text-[18px] font-extrabold leading-[26px]'>{country?.name.common}</h5>
        <div className='flex flex-col text-[14px] leading-[16px] font-semibold gap-2'>
          <p className='flex flex-row gap-1'>
            Population: <span className='font-normal'>{country?.population}</span>
          </p>
          <p className='flex flex-row gap-1'>
            Region: <span className='font-normal'>{country?.region}</span>
          </p>
          <p className='flex flex-row gap-1'>
            Capital: <span className='font-normal'>{country?.capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
