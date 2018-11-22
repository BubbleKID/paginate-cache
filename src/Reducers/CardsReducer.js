
import innitialState from "../State/innitialState";

function CardsViewReducer(state = innitialState, action) {
  switch (action.type) {
    case "SET_CARDS":
      return {
        ...state,
        cards: action.cards,
        totalPage: action.totalPage,
        isLoading: action.isLoading
      };
    case "SET_CURRENTCARDS":
      return {
        ...state,
        currCardData: action.currCardData
      };
    default:
      return state;
  }
}

export default CardsViewReducer;
