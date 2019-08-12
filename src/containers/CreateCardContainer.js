import { connect } from 'react-redux';
import CreateCard from '../components/CreateCard';
import { createCard } from '../actions/card-actions';

//Even BETTER, DON'T NEED VARIABLE, pass directly into connect call
// const mapDispatchToProps = { createCard };

//Why You DO NOT want to pass OWNPROPS TO DISPATCHES
// const defaultCardData = {
//   title: '',
//   description: '',
//   assignedTo: '',
// };

// const mapDispatchToProps = dispatch => {
//   console.log(dispatch);
//   return {
//     createCard(listId, cardData) {
//       const cardId = Date.now().toString();
//       const card = {
//         id: cardId,
//         ...defaultCardData,
//         ...cardData,
//       };
//       dispatch({
//         type: 'CARD_CREATE',
//         payload: { card, listId, cardId },
//       });
//     },
//   };
// };

export default connect(
  null,
  { createCard },
)(CreateCard);
