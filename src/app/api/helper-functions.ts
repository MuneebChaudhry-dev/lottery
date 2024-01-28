import { ATOMIC_API, CLASSIC_API, COSMIC_API } from './variables';

export const fetchCosmicData = async () => {
  const data = await fetch(COSMIC_API).then((res) => {
    return res.json();
  });
  return data;
};
export const fetchClassicData = async () => {
  const data = await fetch(CLASSIC_API).then((res) => {
    return res.json();
  });
  return data;
};
export const fetchAtomicData = async () => {
  const data = await fetch(ATOMIC_API).then((res) => {
    return res.json();
  });
  return data;
};
