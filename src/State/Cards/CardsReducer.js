import innitialState from "../innitialState";

function CardsViewReducer(state = innitialState, action) {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      };
    case "SET_CURRENTPAGE":
      return {
        ...state,
        currPage: action.currPage
      };
    case "GO_NEXT":
      return {
        ...state,
        currPage: state.currPage + 1
      };

    case "NEED_TO_FETCH":
      return {
        ...state,
        needToFetch: action.needToFetch
      };
    case "GO_BACK":
      return {
        ...state,
        currPage: state.currPage - 1
      };
    case "SET_CACHEDPAGE":
      return {
        ...state,
        cachedPage: state.cachedPage + 4
      };
    case "SET_PAGES":
      return {
        ...state,
        pages: action.pages,
        totalPage: action.totalPage
      };
    case "SET_CURRENTCARDS":
      return {
        ...state,
        currCardData: action.currCardData
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
}

export default CardsViewReducer;
