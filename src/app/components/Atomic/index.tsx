'use client';
import React, { useEffect, useState } from 'react';
import Card from '../common/Card';
import { LotteryData } from '@/app/types';
import { fetchAtomicData } from '@/app/api/helper-functions';

const Atomic = () => {
  const [atomicData, setAtomicData] = useState<LotteryData>();
  const handleAtomicData = () => {
    fetchAtomicData().then(({ data }) => {
      console.log(data);
      setAtomicData(data);
    });
  };
  useEffect(() => {
    handleAtomicData();
  });
  return (
    <>
      <Card lotteryType='atomic' lotteryData={atomicData as LotteryData} />
    </>
  );
};

export default Atomic;
