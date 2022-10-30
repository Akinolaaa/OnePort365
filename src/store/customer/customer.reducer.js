import { CUSTOMER_ACTION_TYPES } from './customer.types';

const INITIAL_STATE = {
  customers: null,
  isLoadingAllCustomers: false,
  customer: null,
  isLoadingACustomer: false,
  error: null
}

export const customerReducer = (state=INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case CUSTOMER_ACTION_TYPES.GET_ALL_CUSTOMERS_START:
      return {
        ...state, isLoadingAllCustomers:true
      }
    case CUSTOMER_ACTION_TYPES.GET_A_CUSTOMER_START:
      return {
        ...state, isLoadingACustomer:true
      }
    case CUSTOMER_ACTION_TYPES.GET_ALL_CUSTOMERS_SUCCESS:
      return {
        ...state, customers:payload, isLoadingAllCustomers:false
      }
    case CUSTOMER_ACTION_TYPES.GET_A_CUSTOMER_SUCCESS:
      return {
        ...state, customer:payload, isLoading:false
      }
    case CUSTOMER_ACTION_TYPES.GET_ALL_CUSTOMERS_FAILED:
    case CUSTOMER_ACTION_TYPES.GET_A_CUSTOMER_FAILED:
      return {
        ...state, error: payload, isLoading:false
      }
    default:
      return state;
  }
}