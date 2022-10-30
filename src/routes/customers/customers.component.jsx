
import { Route, Routes } from 'react-router-dom';
import CustomersPage from '../../components/customers-page/customers-page.component';
import CustomerShipments from '../customer-shipments/customer-shipments.components';


function Customers() {
  return (
    <Routes>
      <Route index element={<CustomersPage />} />
      <Route path='/shipments' element={<CustomerShipments />} />
    </Routes>
  )
}

export default Customers;