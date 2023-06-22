import { ButtonNext } from 'components';
import { Description } from 'components/BonusCard/Description/Description';
import React from 'react';

export const BonusCard = () => {
  return (
    <div className={'bonus'}>
      <Description />
      <ButtonNext />
    </div>
  );
};
