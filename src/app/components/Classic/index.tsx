'use client';
import React, { useEffect, useState } from 'react';
import Card from '../common/Card';
import { LotteryData } from '@/app/types';
import { fetchClassicData } from '@/app/api/helper-functions';

const Classic = () => {
  const [classicData, setClassicData] = useState<LotteryData>();
  const handleClassicData = () => {
    fetchClassicData().then(({ data }) => {
      console.log(data);
      setClassicData(data);
    });
  };
  useEffect(() => {
    handleClassicData();
  });
  return (
    <>
      <Card lotteryType='classic' lotteryData={classicData as LotteryData} />
    </>
  );
};

export default Classic;
