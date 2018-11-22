import * as actions from "../Cards/CardsActions";

export const goNext = (currPage, cachedPage, pages) => {
  return dispatch => {
    if (currPage < cachedPage - 1) {
      dispatch({
        type: "GO_NEXT"
      });
    } else {
      dispatch({
        type: "NEED_TO_FETCH",
        needToFetch: true
      });
      dispatch({
        type: "SET_LOADING",
        isLoading: true
      });
      actions.fetchCardsToPage(cachedPage, pages);
      dispatch({
        type: "SET_CURRENTPAGE",
        currPage: currPage + 1
      });
    }
  };
};

export const goBack = (currPage, cachedPage) => {
  return dispatch => {
    if (currPage > 1) {
      dispatch({
        type: "GO_BACK"
      });
    }
  };
};
