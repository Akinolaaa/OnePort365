import { takeLatest, put, all, call } from 'redux-saga/effects';

import { 
  getAllCustomersSuccess, getAllCustomersFailed,
  getACustomerSuccess, getACustomerFailed } from './customer.action';
import { CUSTOMER_ACTION_TYPES } from './customer.types';

import { getACustomer, getAllCustomers } from '../../utils/api.utils';
//import { getAllShipmentsStart } from '../shipment/shipment.action';


export function* getAllCustomersFromAPI(){
  try {
    const customers = yield call(getAllCustomers);
    yield put(getAllCustomersSuccess(customers));
  } catch (error) {
    put(getAllCustomersFailed(error));
  }
}
export function* getACustomerFromAPI(){
  try {
    const customer = yield call(getACustomer);
    yield put(getACustomerSuccess(customer));
    //yield put(getAllShipmentsStart());
  } catch (error) {
    put(getACustomerFailed(error));
  }
}

//Listeners
export function* onGetAllCustomersStart() {
  //console.log("here");
  yield takeLatest(CUSTOMER_ACTION_TYPES.GET_ALL_CUSTOMERS_START, getAllCustomersFromAPI);
}

export function* onGetACustomerStart() {
  yield takeLatest(CUSTOMER_ACTION_TYPES.GET_A_CUSTOMER_START, getACustomerFromAPI);
}

export function* customerSaga() {
  yield all([call(onGetACustomerStart), call(onGetAllCustomersStart)]);
}