import React from 'react';

import Card from './Card';

import { CLIS } from '../clis';

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
