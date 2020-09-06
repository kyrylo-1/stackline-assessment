import {
  RootState,
  AppActionTypes,
  actionTypes,
  FetchStatus,
  IFetchDataCompletedAction,
} from './types';

export interface ISales {
  weekEnding: Date;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}
const initialState: RootState = {
  status: FetchStatus.Idle,
  sales: [] as ISales[],
};

export function appReducer(
  state = initialState,
  action: AppActionTypes
): RootState {
  switch (action.type) {
    case actionTypes.FETCH_DATA_START: {
      return {
        ...state,
        status: FetchStatus.Pending,
      };
    }
    case actionTypes.FETCH_DATA_ERROR: {
      return {
        ...state,
        status: FetchStatus.Error,
      };
    }
    case actionTypes.FETCH_DATA_COMPLETED: {
      return {
        ...state,
        status: FetchStatus.Completed,
        sales: (action as IFetchDataCompletedAction).data,
      };
    }
    default:
      return state;
  }
}
