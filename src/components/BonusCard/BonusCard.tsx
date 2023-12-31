import { ButtonNext } from 'components';
import { Description } from 'components/BonusCard/Description/Description';
import { Plug } from 'components/BonusCard/Plug/Plug';
import { useFetchBonus } from 'hooks';
import React from 'react';

export const BonusCard = () => {
  const { isError, data, isLoading } = useFetchBonus();

  if (isError) {
    return null;
  }

  if (isLoading) {
    return <Plug />;
  }

  return (
    <div className={'bonus'}>
      <Description data={data} />

      <div className={'button_next_container'}>
        <ButtonNext />
      </div>
    </div>
  );
};
