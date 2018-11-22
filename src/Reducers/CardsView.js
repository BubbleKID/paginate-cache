const innitialState = {
  currPage: 1,
  cards: [],
  totalPage: 0,
  currCardData: {}
};

function CardsViewReducer(state = innitialState, action) {
  switch (action.type) {
    case "SET_CARDS":
      return {
        ...state,
        cards: action.cards,
        totalPage: action.totalPage
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
