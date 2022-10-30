export const getAllCustomers = async() => {
  try{
    const res  = await fetch(
      "https://demo3522726.mockable.io/get_customers",{method:'GET'}
    );
    const customers = await res.json();
    return customers;
  } catch(err) {
    console.log({err});
  }
} 

export const getACustomer = async() => {
  try {
  const res = await fetch(`https://demo3522726.mockable.io/get_single_customer/123456789`, {method:'GET'});
  //const res = await fetch(`https://demo3522726.mockable.io/get_single_customer/${id}`, {method:'GET'});
  const customer = res.json();
  return customer;
  } catch(error) {
    console.log(error);
  }
}

export const getShipmentsOfSingleCustomer = async() => {
  try {
    //const res = await fetch(`https://demo3522726.mockable.io/get_single_customer_shipments/${id}`,{method:'GET'});
    const res = await fetch(`https://demo3522726.mockable.io/get_single_customer_shipments/123456789`,{method:'GET'});
    const shipment = res.json();
    return shipment;
  } catch (error) {
    console.log(error)
  }
}

export const getShipmentDetails = async() => {
  try {
    const res = await fetch(`https://demo3522726.mockable.io/get_single_shipment_details/987654321`,{method:'GET'})
    //const res = await fetch(`https://demo3522726.mockable.io/get_single_shipment_details/${id}`,{method:'GET'})
    const shipmentDetails = await res.json();
    return shipmentDetails;
  } catch (error) {
    console.log(error);
  }
  }