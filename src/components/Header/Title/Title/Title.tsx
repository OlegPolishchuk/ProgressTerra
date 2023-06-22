import { ButtonInfo, Logo } from 'components';
import React from 'react';

export const Title = () => {
  return (
    <div className={'container header_title'}>
      <Logo />
      <ButtonInfo />
    </div>
  );
};
