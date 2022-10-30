import { SHIPMENT_ACTION_TYPES } from './shipment.types';
import { 
  getAllShipmentsSuccess, getAllShipmentsFailed,
  getAShipmentSuccess, getAShipmentFailed } from './shipment.action';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import {getShipmentsOfSingleCustomer, getShipmentDetails } from '../../utils/api.utils'


export function* getAllShipmentsByCustomer() {
  try {
    const shipments = yield call(getShipmentsOfSingleCustomer);
    yield put(getAllShipmentsSuccess(shipments));
  } catch (error) {
    yield put(getAllShipmentsFailed(error));
  }
}

export function* getAShipment() {
  try {
    const shipment = yield call(getShipmentDetails);
    yield put(getAShipmentSuccess(shipment));
  } catch (error) {
    yield put(getAShipmentFailed(error));
  }
}

//Listener
export function* onGetAllShipmentsByCustomer() {
  yield takeLatest(SHIPMENT_ACTION_TYPES.GET_ALL_SHIPMENTS_START, getAllShipmentsByCustomer);
}
export function* onGetAShipment() {
  yield takeLatest(SHIPMENT_ACTION_TYPES.GET_A_SHIPMENT_START, getAShipment);
}

export function* shipmentSaga() {
  yield all([call(onGetAShipment), call(onGetAllShipmentsByCustomer)]);
}