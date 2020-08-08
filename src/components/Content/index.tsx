import * as React from 'react';
import Card from 'components/Card';
import MainForm from 'components/MainForm';
import { Formik } from 'formik';

import styles from './Content.module.scss';

function Content(): React.ReactElement {
  return (
    <main className={styles.Content}>
      <Formik
        initialValues={{
          number: '',
          name: '',
          month: '',
          year: '',
          cvv: '',
        }}
        onSubmit={(): void => {}}
      >
        {({ values, handleChange }): React.ReactNode => (
          <>
            <Card numberValue={values.number.toString()} />
            <MainForm
              numberValue={values.number}
              onChange={handleChange}
            />
          </>
        )}
      </Formik>
    </main>
  );
}

export default Content;
