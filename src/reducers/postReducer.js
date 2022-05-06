import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [], // items from fetch request
  item: {}, // item to post to store
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
