import { Info } from 'components/BonusCard/Description/Info/Info';
import { Title } from 'components/BonusCard/Description/Title/Title';
import React from 'react';

export const Description = () => {
  return (
    <div className={'bonus_description'}>
      <Title />
      <Info />
    </div>
  );
};
