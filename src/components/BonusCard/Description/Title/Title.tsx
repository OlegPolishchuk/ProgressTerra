import React from 'react';
import { formatBonusWordEnding } from 'utils';

interface Props {
  count: number;
}
export const Title = ({ count }: Props) => {
  const title = `${count} ${formatBonusWordEnding(count)}`;

  return <h2 className={'bonus_title text_headline'}>{title}</h2>;
};
