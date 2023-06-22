import { Data } from 'api/types';
import { FireIcon } from 'components/Icons';
import React from 'react';
import { formatBonusWordEnding, formatDate } from 'utils';

interface Props {
  forBurningQuantity: number;
  dateBurning: string;
}
export const Info = ({ dateBurning, forBurningQuantity }: Props) => {
  const burningDate = formatDate(dateBurning);
  const bonusWordTitle = `${forBurningQuantity} ${formatBonusWordEnding(
    forBurningQuantity,
  )}`;

  return (
    <div className={'bonus_info text_body'}>
      <p>
        {burningDate} сгорит
        <span className={'bonus_icon_fire'}>
          <FireIcon />
        </span>
        {bonusWordTitle}
      </p>
    </div>
  );
};
