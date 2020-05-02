import * as React from 'react';
import './CardNumber.module.scss';

export interface Props {
  value?: string;
}

function CardNumber({
  value = '',
}: Props): React.ReactElement<HTMLDivElement> {
  const items = Array(16)
    .fill(0)
    .map((_, key) => {
      let val;

      if (value[key] === undefined) val = '#';
      else if (key >= 4 && key <= 11) val = '*';
      else val = value[key];

      return (
        <span key={key}>
          <div className="CardNumber__numberItem">{val}</div>
        </span>
      );
    });

  return <div className="CardNumber">{items}</div>;
}

export default CardNumber;
