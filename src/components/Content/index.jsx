import React from 'react';
import Card from 'components/Card';
import MainForm from 'components/MainForm';

import './Content.module.scss';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="Content">
        <Card />
        <MainForm />
      </main>
    );
  }
}

export default Content;
