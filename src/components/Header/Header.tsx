import { BonusCard } from 'components';
import { Title } from 'components/Header/Title/Title/Title';
import { useFetchBonus } from 'hooks';
import React from 'react';

export const Header = () => {
  const { isError, data, isLoading, isSuccess } = useFetchBonus();

  if (isError) {
    return null;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <header className={'header'}>
      <Title />

      <BonusCard />
    </header>
  );
};
