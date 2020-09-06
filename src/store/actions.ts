import { actionTypes, RootState } from './types';
import { fetchData } from '../service/api';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { ISales } from './reducers';

export const creators = {
  fetchDataStart: () => ({
    type: actionTypes.FETCH_DATA_START,
  }),
  fetchDataError: (error: string) => ({
    type: actionTypes.FETCH_DATA_ERROR,
    error: error,
  }),
  receiveData: (data: ISales[]) => ({
    type: actionTypes.FETCH_DATA_COMPLETED,
    data: data,
  }),
};

export const getApiData = (): ThunkAction<
  void,
  RootState,
  null,
  Action<string>
> => async (dispatch) => {
  dispatch(creators.fetchDataStart());
  try {
    const data = await fetchApi();
    dispatch(creators.receiveData(data as ISales[]));
  } catch (err) {
    dispatch(creators.fetchDataError(err));
    throw err;
  }
};

const fetchApi = async () => {
  return await fetchData()
    .then((data) => data as ISales[])
    .catch((err) => {
      console.log(err);
    });
};
