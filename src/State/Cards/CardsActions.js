import axios from "axios";

export const fetchToken = () => {
  const url =
    "https://atr-test-dh1.aiam-dh.com/atr-gateway/identity-management/api/v1/auth/token";
  return axios.post(url, {
    password: "password",
    username: "frontendtest"
  });
};

export function fetchCardsToPage(cachedPage, pages) {
  const fetchPage = cachedPage - 1;
  const url =
    "https://atr-test-dh1.aiam-dh.com/atr-gateway/ticket-management/api/v1/tickets";

  const getCards = (
    page,
    { perPage = 12, sortDirection = "DESC", ticketType = "incident" } = {},
    token
  ) =>
    axios.get(url, {
      params: {
        page,
        perPage,
        sortDirection,
        ticketType
      },
      headers: {
        apiToken: token,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });

  const getCardsWithCache = (cachedPage, cacheSize, token, dispatch) => {
    let tmpPages = [];

    for (let index = cachedPage + 1; index <= cachedPage + cacheSize; index++) {
      tmpPages = [...tmpPages, index];
    }

    const getCardsPromises = tmpPages.map(thisPage =>
      getCards(
        thisPage,
        {
          perPage: 12,
          sortDirection: "DESC",
          ticketType: "incident"
        },
        token
      )
    );

    Promise.all(getCardsPromises).then(response => {
      dispatch({
        type: "NEED_TO_FETCH",
        needToFetch: false
      });
      dispatch({
        type: "SET_PAGES",
        pages: pages.concat(response),
        totalPage: Math.ceil(response[0].headers["x-total-count"] / 12)
      });
      dispatch({
        type: "SET_CACHEDPAGE"
      });
      dispatch({
        type: "SET_LOADING",
        isLoading: false
      });
    });
  };
  return dispatch => {
    return fetchToken().then(response => {
      getCardsWithCache(fetchPage, 4, response.data.token, dispatch);
    });
  };
}
