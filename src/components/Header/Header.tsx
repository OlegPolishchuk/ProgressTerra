import { BonusCard } from 'components';
import { Title } from 'components/Header/Title/Title/Title';
import React from 'react';

export const Header = () => {
  return (
    <header className={'header'}>
      <Title />

      <BonusCard />
    </header>
  );
};
