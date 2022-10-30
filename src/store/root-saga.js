import { all, call } from 'redux-saga/effects';
import { customerSaga } from './customer/customer.saga';
import { shipmentSaga } from './shipment/shipment.saga';

export function* rootSaga() {
  yield all([call(customerSaga), call(shipmentSaga)]);
}