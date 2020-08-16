import * as React from 'react';

import CardNumber from 'components/CardNumber';

import styles from './Card.module.scss';

export interface Props {
  numberValue: string;
}

function Card({
  numberValue = '',
}: Props): React.ReactElement<HTMLDivElement> {
  return (
    <div className={styles.Card}>
      <div className={styles.Top}>
        <img src="assets/images/chip.png" alt="chip" />
        <img src="assets/images/visa.png" alt="card-type" />
      </div>
      <CardNumber value={numberValue} />
    </div>
  );
}

export default Card;
