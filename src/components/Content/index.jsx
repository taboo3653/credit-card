import React from 'react';
import Card from 'components/Card';
import MainForm from 'components/MainForm';
import { Formik } from 'formik';

import './Content.module.scss';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="Content">
        <Formik
          initialValues={{
            number: '123',
            name: '',
            month: '',
            year: '',
            cvv: '',
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <>
              <Card numberValue={values.number} />
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
}

export default Content;
