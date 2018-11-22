import reducer from "./CardsReducer";

describe("cards reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: true,
      currPage: 1,
      pages: [],
      totalPage: 0,
      currCardData: {},
      cachedPage: 1,
      needToFetch: true
    });
  });

  it("should handle SET_TOKEN", () => {
    expect(
      reducer([], {
        type: "SET_TOKEN",
        token: "Run the tests"
      })
    ).toEqual({
      token: "Run the tests"
    });

    expect(
      reducer([], {
        type: "SET_CURRENTPAGE",
        currPage: 2
      })
    ).toEqual({
      currPage: 2
    });

    expect(
      reducer([], {
        type: "NEED_TO_FETCH",
        needToFetch: true
      })
    ).toEqual({
      needToFetch: true
    });

    expect(
      reducer([], {
        type: "SET_CURRENTCARDS",
        currCardData: "current page data"
      })
    ).toEqual({
      currCardData: "current page data"
    });

    expect(
      reducer([], {
        type: "SET_LOADING",
        isLoading: true
      })
    ).toEqual({
      isLoading: true
    });
  });
});
