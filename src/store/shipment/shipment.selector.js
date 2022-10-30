import { createSelector } from "reselect";

const selectShipmentReducer = state => state.shipments;

export const selectAllShipments = createSelector(
  [selectShipmentReducer],
  (shipmentSlice) => shipmentSlice.shipments
)

export const selectAShipment = createSelector(
  [selectShipmentReducer],
  (shipmentSlice) => shipmentSlice.shipment
)