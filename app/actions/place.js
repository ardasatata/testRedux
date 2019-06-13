import { ADD_PLACE, DELETE_PLACE } from './types';


export const addPlace = placeName => ({
  type: ADD_PLACE,
  payload: placeName,
});

export const deletePlace = key => ({
  type: DELETE_PLACE,
  payload: key,
});

