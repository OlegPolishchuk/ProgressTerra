import { FireIcon } from 'components/Icons';
import React from 'react';

export const Info = () => {
  return (
    <div className={'bonus_info text_body'}>
      <p>
        29.03 сгорит
        <span className={'bonus_icon_fire'}>
          <FireIcon />
        </span>
        250 бонусов
      </p>
    </div>
  );
};
