import * as React from 'react';

import CardNumber from 'components/CardNumber';

import './Card.module.scss';

export interface Props {
  numberValue: string;
}

function Card({
  numberValue = '',
}: Props): React.ReactElement<HTMLDivElement> {
  return (
    <div className="Card">
      <div className="Card__top">
        <img src="assets/images/chip.png" alt="chip" />
        <div className="Card__card-type">
          <img src="assets/images/visa.png" alt="card-type" />
        </div>
      </div>
      <CardNumber value={numberValue} />
    </div>
  );
}

export default Card;
