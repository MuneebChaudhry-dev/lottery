'use client';
import React, { useEffect, useState } from 'react';
import Card from '../common/Card';
import { fetchCosmicData } from '@/app/api/helper-functions';
import { LotteryData } from '@/app/types';

const Cosmic = () => {
  const [cosmicData, setCosmicData] = useState<LotteryData>();
  const handleCosmicData = () => {
    fetchCosmicData().then(({ data }) => {
      console.log(data);
      setCosmicData(data);
    });
  };
  useEffect(() => {
    handleCosmicData();
  });
  return (
    <>
      <Card lotteryType='cosmic' lotteryData={cosmicData as LotteryData} />
    </>
  );
};

export default Cosmic;
