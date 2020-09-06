import { ISales } from './reducers';

export const actionTypes = {
  FETCH_DATA_START: 'FETCH_DATA_START',
  FETCH_DATA_ERROR: 'FETCH_DATA_ERROR',
  FETCH_DATA_COMPLETED: 'FETCH_DATA_COMPLETED',
};

export interface IFetchDataStartAction {
  type: typeof actionTypes.FETCH_DATA_START;
}
export interface IFetchDataErrorAction {
  type: typeof actionTypes.FETCH_DATA_ERROR;
}
export interface IFetchDataCompletedAction {
  type: typeof actionTypes.FETCH_DATA_COMPLETED;
  data: ISales[];
}

export type AppActionTypes =
  | IFetchDataStartAction
  | IFetchDataErrorAction
  | IFetchDataCompletedAction;

export enum FetchStatus {
  Idle,
  Pending,
  Error,
  Completed,
}

export interface RootState {
  status: FetchStatus;
  sales: ISales[];
}
