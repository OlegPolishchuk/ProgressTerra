import { Data } from 'api/types';
import { Info } from 'components/BonusCard/Description/Info/Info';
import { Title } from 'components/BonusCard/Description/Title/Title';
import React from 'react';

interface Props {
  data: Data;
}
export const Description = ({ data }: Props) => {
  const { forBurningQuantity, currentQuantity, dateBurning } = data;
  return (
    <div className={'bonus_description'}>
      <Title count={currentQuantity} />

      <Info forBurningQuantity={forBurningQuantity} dateBurning={dateBurning} />
    </div>
  );
};
