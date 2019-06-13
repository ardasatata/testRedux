import axios from 'axios';
import { apiBaseUrl } from '../utils/Constans';
import { FETCH_COIN, FETCH_COIN_SUCCESS, FETCH_COIN_FAILURE } from './types';

// eslint-disable-next-line import/prefer-default-export
export function FetchCoinData() {
  return {
    type: FETCH_COIN,
  };
}

// export function FetchCoinData(limit) {
//     return (dispatch) => {
//         dispatch({ type: FETCH_COIN });
//         return axios.get(`${apiBaseUrl}/v1/ticker/?limit=${limit}`)
//             .then((respond) => {
//                 console.log(respond.data);
//                 dispatch({ type: FETCH_COIN_SUCCESS, payload: respond.data });
//             })
//             .catch(((error) => {
//                 console.log(error.data);
//                 dispatch({ type: FETCH_COIN_FAILURE, payload: error.data });
//             }));
//     };
// }
