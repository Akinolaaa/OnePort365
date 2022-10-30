import { createSelector } from "reselect";

const selectCustomersReducer = (state) => state.customers;

export const selectCustomers = createSelector(
  [selectCustomersReducer],
  (customersSlice) => customersSlice.customers
);

export const selectACustomer = createSelector(
  [selectCustomersReducer],
  (customersSlice) => customersSlice.customer
);

export const selectIsLoadingAllCustomers = createSelector(
  [selectCustomersReducer],
  (customersSlice) => customersSlice.isLoadingAllCustomers
);