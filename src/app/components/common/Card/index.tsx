'use client';

import Image from 'next/image';
import { useState } from 'react';
import Cosmic from '../../../assets/svgs/cosmic.svg';
import Atomic from '../../../assets/svgs/atomic.svg';
import Classic from '../../../assets/svgs/classic.svg';
import Clock from '../../../assets/svgs/timer.svg';
import Expand from '../../../assets/svgs/expand.svg';
import Close from '../../../assets/svgs/closeExpanded.svg';

import { formatTime } from '@/app/utils';
import { LotteryData } from '@/app/types';

interface ICard {
  lotteryType: string;
  lotteryData: LotteryData;
}

const Card = ({ lotteryType, lotteryData }: ICard) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isZoomIn, setIsZoomIn] = useState(false);
  const showAccordian = () => {
    setIsExpanded(true);
  };
  const hideAccordian = () => {
    setIsExpanded(false);
  };

  let primaryColor: string, secondaryColor: string;

  switch (lotteryType) {
    case 'cosmic':
      primaryColor = '#961A88';
      secondaryColor = '#EEE1F0';
      break;
    case 'classic':
      primaryColor = '#191978';
      secondaryColor = '#E9EEF6';
      break;
    case 'atomic':
      primaryColor = '#00AEB1';
      secondaryColor = '#EAF9F7';
      break;
    default:
      primaryColor = 'classic-primary';
      secondaryColor = 'classic-secondary';
      break;
  }

  return (
    <div
      className={` bg-${secondaryColor} m-4 rounded-lg`}
      style={{ backgroundColor: secondaryColor }}
    >
      <div className='card-header p-4 w-full flex justify-between items-center'>
        <div className='flex gap-2 justify-end items-center'>
          <div className='Logo'>
            <Image
              src={
                lotteryType === 'cosmic'
                  ? Cosmic
                  : lotteryType === 'classic'
                  ? Classic
                  : lotteryType === 'atomic'
                  ? Atomic
                  : ''
              }
              width={93}
              height={14}
              alt='Logo'
            />
          </div>
          <div>
            <p
              className={`text-sm mt-1 text-${primaryColor} font-medium`}
              style={{ color: primaryColor }}
            >
              {lotteryData?.roundNumber}
            </p>
          </div>
        </div>
        <div className='btn'>
          <button
            onClick={() => {
              setIsZoomIn((prevState) => !prevState);
            }}
          >
            {isZoomIn ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill={primaryColor}
              >
                <path
                  d='M0 6.50746C0 7.40583 0.169358 8.25018 0.508073 9.04051C0.846789 9.82516 1.31755 10.516 1.92034 11.113C2.52314 11.71 3.22067 12.1763 4.01292 12.5117C4.80517 12.8472 5.65483 13.0149 6.56189 13.0149C7.25655 13.0149 7.91676 12.9126 8.54252 12.7079C9.16828 12.5032 9.74525 12.2189 10.2734 11.855L14.1485 15.7015C14.2519 15.8038 14.3724 15.8778 14.5102 15.9232C14.648 15.9744 14.7887 16 14.9322 16C15.1389 16 15.3226 15.9517 15.4833 15.855C15.6441 15.764 15.7704 15.6361 15.8622 15.4712C15.9541 15.312 16 15.1272 16 14.9168C16 14.7804 15.9742 14.6468 15.9225 14.516C15.8708 14.3852 15.7962 14.2658 15.6986 14.1578L11.8493 10.3369C12.2569 9.80242 12.5727 9.21109 12.7966 8.5629C13.0205 7.90903 13.1324 7.22388 13.1324 6.50746C13.1324 5.6091 12.963 4.76759 12.6243 3.98294C12.2856 3.19261 11.8149 2.50178 11.2121 1.91045C10.6093 1.31343 9.91173 0.847193 9.11948 0.511727C8.32723 0.170576 7.4747 0 6.56189 0C5.65483 0 4.80517 0.170576 4.01292 0.511727C3.22067 0.847193 2.52314 1.31343 1.92034 1.91045C1.31755 2.50178 0.846789 3.19261 0.508073 3.98294C0.169358 4.76759 0 5.6091 0 6.50746ZM1.56728 6.50746C1.56728 5.82516 1.69645 5.1855 1.95479 4.58849C2.21313 3.98579 2.57194 3.45984 3.03122 3.01066C3.49049 2.55579 4.02153 2.20043 4.62433 1.94456C5.22713 1.6887 5.87298 1.56077 6.56189 1.56077C7.25081 1.56077 7.89666 1.6887 8.49946 1.94456C9.108 2.20043 9.63904 2.55579 10.0926 3.01066C10.5518 3.45984 10.9107 3.98579 11.169 4.58849C11.4273 5.1855 11.5565 5.82516 11.5565 6.50746C11.5565 7.18976 11.4273 7.83227 11.169 8.43497C10.9107 9.03198 10.5518 9.55792 10.0926 10.0128C9.63904 10.462 9.108 10.8145 8.49946 11.0704C7.89666 11.3262 7.25081 11.4542 6.56189 11.4542C5.87298 11.4542 5.22713 11.3262 4.62433 11.0704C4.02153 10.8145 3.49049 10.462 3.03122 10.0128C2.57194 9.55792 2.21313 9.03198 1.95479 8.43497C1.69645 7.83227 1.56728 7.18976 1.56728 6.50746ZM4.46932 7.12153H8.66308C8.83531 7.12153 8.9817 7.06183 9.10226 6.94243C9.22282 6.81734 9.2831 6.67235 9.2831 6.50746C9.2831 6.34257 9.22282 6.20043 9.10226 6.08102C8.9817 5.95593 8.83531 5.89339 8.66308 5.89339H4.46932C4.30283 5.89339 4.15644 5.95593 4.03014 6.08102C3.90958 6.20043 3.8493 6.34257 3.8493 6.50746C3.8493 6.67235 3.90958 6.81734 4.03014 6.94243C4.15644 7.06183 4.30283 7.12153 4.46932 7.12153Z'
                  fill={primaryColor}
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill={primaryColor}
              >
                <path
                  d='M0 6.50746C0 7.40583 0.169358 8.25018 0.508073 9.04051C0.846789 9.82516 1.31755 10.516 1.92034 11.113C2.52314 11.71 3.22067 12.1763 4.01292 12.5117C4.80517 12.8472 5.65483 13.0149 6.56189 13.0149C7.25655 13.0149 7.91676 12.9126 8.54252 12.7079C9.16828 12.5032 9.74525 12.2189 10.2734 11.855L14.1485 15.7015C14.2519 15.8038 14.3724 15.8778 14.5102 15.9232C14.648 15.9744 14.7887 16 14.9322 16C15.1389 16 15.3226 15.9517 15.4833 15.855C15.6441 15.764 15.7704 15.6361 15.8622 15.4712C15.9541 15.312 16 15.1272 16 14.9168C16 14.7804 15.9742 14.6468 15.9225 14.516C15.8708 14.3852 15.7962 14.2658 15.6986 14.1578L11.8493 10.3369C12.2569 9.80242 12.5727 9.21109 12.7966 8.5629C13.0205 7.90903 13.1324 7.22388 13.1324 6.50746C13.1324 5.6091 12.963 4.76759 12.6243 3.98294C12.2856 3.19261 11.8149 2.50178 11.2121 1.91045C10.6093 1.31343 9.91173 0.847193 9.11948 0.511727C8.32723 0.170576 7.4747 0 6.56189 0C5.65483 0 4.80517 0.170576 4.01292 0.511727C3.22067 0.847193 2.52314 1.31343 1.92034 1.91045C1.31755 2.50178 0.846789 3.19261 0.508073 3.98294C0.169358 4.76759 0 5.6091 0 6.50746ZM1.56728 6.50746C1.56728 5.82516 1.69645 5.1855 1.95479 4.58849C2.21313 3.98579 2.57194 3.45984 3.03122 3.01066C3.49049 2.55579 4.02153 2.20043 4.62433 1.94456C5.22713 1.6887 5.87298 1.56077 6.56189 1.56077C7.25081 1.56077 7.89666 1.6887 8.49946 1.94456C9.108 2.20043 9.63904 2.55579 10.0926 3.01066C10.5518 3.45984 10.9107 3.98579 11.169 4.58849C11.4273 5.1855 11.5565 5.82516 11.5565 6.50746C11.5565 7.18976 11.4273 7.83227 11.169 8.43497C10.9107 9.03198 10.5518 9.55792 10.0926 10.0128C9.63904 10.462 9.108 10.8145 8.49946 11.0704C7.89666 11.3262 7.25081 11.4542 6.56189 11.4542C5.87298 11.4542 5.22713 11.3262 4.62433 11.0704C4.02153 10.8145 3.49049 10.462 3.03122 10.0128C2.57194 9.55792 2.21313 9.03198 1.95479 8.43497C1.69645 7.83227 1.56728 7.18976 1.56728 6.50746ZM3.8493 6.50746C3.8493 6.67804 3.90958 6.82303 4.03014 6.94243C4.1507 7.06183 4.29709 7.12153 4.46932 7.12153H5.94187V8.58849C5.94187 8.75906 6.00215 8.90405 6.12271 9.02345C6.24327 9.13717 6.39254 9.19403 6.57051 9.19403C6.74273 9.19403 6.88626 9.13717 7.00108 9.02345C7.12164 8.90405 7.18192 8.75906 7.18192 8.58849V7.12153H8.66308C8.83531 7.12153 8.9817 7.06183 9.10226 6.94243C9.22282 6.82303 9.2831 6.67804 9.2831 6.50746C9.2831 6.33689 9.22282 6.1919 9.10226 6.07249C8.9817 5.95309 8.83531 5.89339 8.66308 5.89339H7.18192V4.43497C7.18192 4.26439 7.12164 4.1194 7.00108 4C6.88626 3.87491 6.74273 3.81237 6.57051 3.81237C6.39254 3.81237 6.24327 3.87491 6.12271 4C6.00215 4.1194 5.94187 4.26439 5.94187 4.43497V5.89339H4.46932C4.29709 5.89339 4.1507 5.95309 4.03014 6.07249C3.90958 6.1919 3.8493 6.33689 3.8493 6.50746Z'
                  fill={primaryColor}
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isZoomIn ? (
        <div className='card-body px-4 w-full py-3'>
          <table className='table-auto w-full'>
            <tbody className='text-sm font-bold'>
              <tr>
                <td>2302123</td>
                <td className='text-center' style={{ color: primaryColor }}>
                  99 99 99 99 99
                </td>
                <td className=' text-end'>14,934,000,000</td>
              </tr>
              <tr>
                <td>2302123</td>
                <td className='text-center' style={{ color: primaryColor }}>
                  99 99 99 99 99
                </td>
                <td className=' text-end'>14,934,000,000</td>
              </tr>
              <tr>
                <td>2302123</td>
                <td className='text-center' style={{ color: primaryColor }}>
                  99 99 99 99 99
                </td>
                <td className=' text-end'>14,934,000,000</td>
              </tr>
              <tr>
                <td>2302123</td>
                <td className='text-center' style={{ color: primaryColor }}>
                  99 99 99 99 99
                </td>
                <td className=' text-end'>14,934,000,000</td>
              </tr>
              <tr>
                <td>2302123</td>
                <td className='text-center' style={{ color: primaryColor }}>
                  99 99 99 99 99
                </td>
                <td className=' text-end'>14,934,000,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className='card-body px-4 w-full py-3'>
          <div className='flex gap-2'>
            {lotteryData?.previousWinningticket.map((number) => {
              return (
                <div
                  className=' w-9 h-9 flex justify-center items-center bg-[#595857] rounded-full'
                  style={{ background: primaryColor }}
                  key={number}
                >
                  <p className=' text-white  font-semibold text-lg'>{number}</p>
                </div>
              );
            })}
          </div>
          <div className='flex justify-between gap-2 pt-4 -pb-6'>
            <div>
              <p className='text-sm  font-medium'>Winning Pot</p>
            </div>
            <div className='flex items-center gap-1 pb-4'>
              <h3 className='text-xl font-semibold break-words'>
                {lotteryData?.winningPot}
              </h3>
              <p className='text-sm font-medium'>LUCK!</p>
            </div>
          </div>
        </div>
      )}

      <div
        className='w-full px-4 py-4 z-10 bg-${primaryColor}'
        style={{ backgroundColor: primaryColor }}
      >
        <div className='flex items-center justify-between'>
          <div className='flex justify-evenly gap-4 items-center'>
            <p className='text-white text-sm font-semibold'>Next Draw</p>
            <Image src={Clock} alt='Clock Icon' width={18} height={18} />
            <p className='text-white text-xl font-semibold'>
              {formatTime(lotteryData?.nextDraw)}
            </p>
          </div>
          <div>
            <button
              className=' bg-white text-cosmic-primary w-20 rounded-md font-semibold'
              style={{ color: primaryColor }}
            >
              Play
            </button>
          </div>
        </div>
      </div>

      <div className={`${!isExpanded ? 'hidden' : ''} px-4`}>
        <p>Current Pool Status</p>
        <table className='table-auto w-full'>
          <tbody>
            {lotteryData?.poolAmount?.map((coinsData) => {
              return (
                <tr key={coinsData?.coinId}>
                  <td>
                    <Image
                      src={`/${coinsData.coinName}.png`}
                      width={16}
                      height={16}
                      alt='coin'
                    />
                  </td>
                  <td className='text-right'>
                    {coinsData.poolAmount} &nbsp;
                    {coinsData.coinSymbol}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr className=' border-black border-1 my-2' />
        <div className='w-full flex justify-end items-center gap-1 pb-4'>
          <p className=' text-2xl text-[#4A3838]'>≈</p>
          <h3 className='text-xl font-semibold break-words'>
            {lotteryData?.poolAmount?.reduce(
              (sum, coinsData) => sum + parseFloat(coinsData?.poolAmount),
              0
            )}
          </h3>
          <p className='text-sm font-normal'>LUCK!</p>
        </div>
      </div>
      <div className='accordian flex justify-center '>
        {isExpanded ? (
          <button
            onClick={hideAccordian}
            className='flex justify-center items-center gap-2 pt-2'
          >
            <Image src={Close} alt='expand icon' width={12} height={9} />
            <h4>Close</h4>
          </button>
        ) : (
          <button
            onClick={showAccordian}
            className='flex justify-center items-center gap-2 pt-2'
          >
            <Image src={Expand} alt='expand icon' width={12} height={9} />
            <h4>Current Pool Status</h4>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
