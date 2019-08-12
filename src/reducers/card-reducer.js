import { cards as defaultCards } from '../normalized-state';
import { addEntity } from './_utilities';

const cardReducer = (cards = defaultCards, action) => {
  if (action.type === 'CARD_CREATE') {
    const { card, cardId } = action.payload;
    return addEntity(cards, card, cardId);
    // return {
    //   entities: { ...cards.entities, [cardId]: card },
    //   ids: [...cards.ids, cardId],
    // };
  }
  return cards;
};

export default cardReducer;
