import { createAction } from '../../utils/reducer.utils';
import { CUSTOMER_ACTION_TYPES } from './customer.types';


export const getAllCustomersStart = () => createAction(CUSTOMER_ACTION_TYPES.GET_ALL_CUSTOMERS_START);
export const getAllCustomersSuccess = (customers) => createAction(CUSTOMER_ACTION_TYPES.GET_ALL_CUSTOMERS_SUCCESS, customers);
export const getAllCustomersFailed = (error) => createAction(CUSTOMER_ACTION_TYPES.GET_ALL_CUSTOMERS_FAILED, error);

//GET A Customer
export const getACustomerStart = (customerId) => createAction(CUSTOMER_ACTION_TYPES.GET_A_CUSTOMER_START, customerId);
export const getACustomerSuccess = (customer) => createAction(CUSTOMER_ACTION_TYPES.GET_A_CUSTOMER_SUCCESS, customer);
export const getACustomerFailed = (error) => createAction(CUSTOMER_ACTION_TYPES.GET_A_CUSTOMER_FAILED, error);