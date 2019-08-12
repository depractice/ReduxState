import { lists as defaultLists } from '../normalized-state';
import { addIdToChildren } from './_utilities';
// import set from 'lodash/fp/set';

const listReducer = (lists = defaultLists, action) => {
  if (action.type === 'CARD_CREATE') {
    const { cardId, listId } = action.payload;
    //Best
    return addIdToChildren(lists, listId, 'cards', cardId);
    //Better
    // const entities = { ...lists.entities };
    // const cards = lists.entities[listId].cards.concat(cardId);
    // return set(['entities', listId, 'cards'], cards, lists);
    //Worst
    // entities[listId] = {
    //   ...entities[listId],
    //   cards: entities[listId].cards.concat(cardId),
    // };
    // return {
    //   ...lists,
    //   entities,
    // };
  }
  if (action.type === 'LIST_CREATE') {
    const { list, listId } = action.payload;
    return addIdToChildren(lists, list, listId);
  }
  return lists;
};

export default listReducer;
