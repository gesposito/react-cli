import React, { PropTypes } from 'react';

import Card from './Card';

const CLIS = [
  'facebookincubator/create-react-app',
  'infinitered/ignite',
  'insin/nwb',

  'mattdesl/budo',
  'eanplatter/enclave',
  'petehunt/rwb',

  'motion/motion',
  'saguijs/sagui',
  'mzabriskie/rackt-cli',

  'satya164/quik',
  'rocjs/roc',
  'kriasoft/react-app',
  
  'd4rkr00t/aik',
];

class CardList extends React.Component {
  render() {
    return (
      <section className="row">
        {(CLIS).map((cli) => {
          const chunks = cli.split('/');
          const user = chunks[0];
          const repo = chunks[1];

          return (
            <Card key={cli} user={user} repo={repo} />
          );
        })}
      </section>
    );
  }
}

export default CardList;
