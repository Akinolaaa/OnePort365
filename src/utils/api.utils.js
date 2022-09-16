export const getAllCustomers = async() => {
  try{
    const res  = await fetch(
      "https://demo3522726.mockable.io/get_customers",{method:'GET'}
    );
    const customers = await res.json();
    console.log(customers);
  } catch(err) {
    console.log(err);
  }
} 

export const getACustomer = async(id) => {
  try {
  const res = await fetch(`https://demo3522726.mockable.io/get_single_customer/${id}`, {method:'GET'});
  const customer = res.json();
  return customer;
  } catch(error) {
    console.log(error);
  }
}

export const getShipmentsOfSingleCustomer = async(id) => {
  try {
    const res = await fetch(`https://demo3522726.mockable.io/get_single_customer_shipments/${id}`,{method:'GET'});
    const shipment = res.json();
    return shipment;
  } catch (error) {
    console.log(error)
  }
}

export const getShipmentDetails = async(id) => {
  try {
    const res = await fetch(`https://demo3522726.mockable.io/get_single_shipment_details/${id}`,{method:'GET'})
    const shipmentDetails = await res.json();
    return shipmentDetails;
  } catch (error) {
    console.log(error);
  }
  }