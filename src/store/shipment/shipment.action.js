import { SHIPMENT_ACTION_TYPES } from "./shipment.types";
import { createAction } from "../../utils/reducer.utils";

export const getAllShipmentsStart = (customerId) => 
  createAction(SHIPMENT_ACTION_TYPES.GET_ALL_SHIPMENTS_START,customerId);
export const getAllShipmentsSuccess = (shipments) => 
  createAction(SHIPMENT_ACTION_TYPES.GET_ALL_SHIPMENTS_SUCCESS,shipments);
export const getAllShipmentsFailed = (error) => 
  createAction(SHIPMENT_ACTION_TYPES.GET_ALL_SHIPMENTS_FAILED,error);

export const getAShipmentStart = (shipmentId) => 
  createAction(SHIPMENT_ACTION_TYPES.GET_A_SHIPMENT_START, shipmentId);
export const getAShipmentSuccess = (shipment) => 
  createAction(SHIPMENT_ACTION_TYPES.GET_A_SHIPMENT_SUCCESS, shipment);
export const getAShipmentFailed = (error) => 
  createAction(SHIPMENT_ACTION_TYPES.GET_A_SHIPMENT_START, error);