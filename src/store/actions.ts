import { actionTypes, RootState } from './types';
import { fetchData, ISale, IRetailItem } from '../service/api';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

export const creators = {
  fetchDataStart: () => ({
    type: actionTypes.FETCH_DATA_START,
  }),
  fetchDataError: (error: string) => ({
    type: actionTypes.FETCH_DATA_ERROR,
    error: error,
  }),
  receiveData: (data: IRetailItem[]) => ({
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
    dispatch(creators.receiveData(data));
  } catch (err) {
    dispatch(creators.fetchDataError(err));
    throw err;
  }
};

const fetchApi = async () => {
  return await fetchData()
    .then((data) => data as IRetailItem[])
    .catch((err) => {
      throw err;
    });
};
