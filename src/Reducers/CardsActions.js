import axios from "axios";

export function fetchCards() {
  let url1 =
    "https://atr-test-dh1.aiam-dh.com/atr-gateway/identity-management/api/v1/auth/token";
  let url2 =
    "https://atr-test-dh1.aiam-dh.com/atr-gateway/ticket-management/api/v1/tickets?ticketType=incident&sortDirection=DESC&page=0&perPage=12";
  return function(dispatch) {
    axios
      .post(url1, {
        password: "password",
        username: "frontendtest"
      })
      .then(response1 => {
        axios
          .get(url2, {
            headers: {
              apiToken: response1.data.token,
              "Content-Type": "application/json",
              Accept: "application/json"
            }
          })
          .then(response => {
            const totalPage =
              Math.ceil((response.headers["x-total-count"]) / 12);
            dispatch({
              type: "SET_CARDS",
              cards: response.data,
              totalPage: totalPage,
              isLoading: false
            });
          })
          .catch(function(error) {
            console.log(error);
          });
      })
      .catch(response1 => console.log(response1.error));
  };
}
