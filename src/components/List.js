import React, { Component } from 'react';

import CreateCardContainer from '../containers/CreateCardContainer';
import CardContainer from '../containers/CardContainer';

class List extends Component {
  state = { showOptions: false };

  toggleOptions = () => {};

  createCard = () => {};

  removeList = () => {};

  render() {
    const { list = {} } = this.props;
    const { showOptions } = this.state;

    return (
      <article className="List">
        <h2>{list.title}</h2>
        <CreateCardContainer listId={list.id} />
        {/* {showOptions && (
          <div className="List-options">
            <CreateCardContainer listId={list.id} />
            <button className="List-remove danger" onClick={this.removeList}>
              Remove List
            </button>
          </div>
        )}
        <button
          className="List-toggle toggle-options"
          onClick={this.toggleOptions}
        >
          Toggle Options
        </button> */}
        <div>
          {/* Iterate over cards here. */}
          {list.cards.map(cardId => (
            <CardContainer key={cardId} cardId={cardId} />
          ))}
        </div>
      </article>
    );
  }
}

export default List;
