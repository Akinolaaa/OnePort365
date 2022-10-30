import { SHIPMENT_ACTION_TYPES } from './shipment.types';

const INITIAL_STATE = {
  shipments: null,
  shipment: null,
  error: null,
  isLoading: false,
}

export const shipmentReducer = (state=INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case SHIPMENT_ACTION_TYPES.GET_ALL_SHIPMENTS_START:
      return {
        ...state, isLoading: true
      }
    case SHIPMENT_ACTION_TYPES.GET_ALL_SHIPMENTS_SUCCESS:
      return {
        ...state, shipments: payload, isLoading: false
      }
    case SHIPMENT_ACTION_TYPES.GET_A_SHIPMENT_SUCCESS:
      return {
        ...state, shipment: payload
      }
    case SHIPMENT_ACTION_TYPES.GET_ALL_SHIPMENTS_FAILED:
    case SHIPMENT_ACTION_TYPES.GET_A_SHIPMENT_FAILED:
      return {
        ...state, error: payload
      }
    default:
      return {
        state
      }
  }
}