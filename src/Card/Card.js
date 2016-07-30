import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
  render () {
    const { user, repo } = this.props;

    return (
      <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
          <div className="box github" style={{ 'height': '100%' }}>
            <div
              className="github-card"
              data-width="100%"
              data-user={user}
              data-repo={repo}
            />
          </div>
      </div>
    );
  }
}

export default Card;
