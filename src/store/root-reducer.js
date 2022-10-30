import { combineReducers } from 'redux';

import { customerReducer } from './customer/customer.reducer';
import { shipmentReducer } from './shipment/shipment.reducer'

export const rootReducer = combineReducers({
  customers: customerReducer,
  shipments: shipmentReducer,
});