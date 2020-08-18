import * as React from 'react';
import Card from 'components/Card';
import MainForm from 'components/MainForm';
import { Formik } from 'formik';

import FormValues from 'types/FormValues';

import styles from './Content.module.scss';

function Content(): React.ReactElement {
  const initialValues: FormValues = {
    number: '',
    name: '',
    month: '',
    year: '',
    cvv: '',
  };

  return (
    <main className={styles.Content}>
      <Formik initialValues={initialValues} onSubmit={(): void => {}}>
        {({ values, handleChange }): React.ReactNode => (
          <>
            <Card numberValue={values.number.toString()} />
            <MainForm values={values} onChange={handleChange} />
          </>
        )}
      </Formik>
    </main>
  );
}

export default Content;
