import { ADD_PLACE, DELETE_PLACE } from '../actions/types';

const initialState = {
  placeName: '',
  places: [],
};

let keyID = 0;

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          // eslint-disable-next-line no-plusplus
          key: keyID++,
          value: action.payload,
        }),
      };
    case DELETE_PLACE:
      // Find index of item with matching ID and then
      // remove it from the array by its' index
      // const index = state.places.findIndex(x => x.id === action.payload);
      console.log(action.payload);
      // return {...state.places.slice(0, action.payload),
      //     ...state.places.slice(action.payload + 1)};

      return { places: state.places.filter((data, i) => i !== action.payload) };

      // console.log(index);

    default:
      return state;
  }
};

export default placeReducer;
