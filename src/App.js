import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllCustomersStart } from './store/customer/customer.action';
//import NavxHeader from './routes/navxheader/navxheader.component';
import RandomPage from './routes/randompage/randompage.component';
import Customers from './routes/customers/customers.component';
import { useEffect } from 'react';
import Navigation from './components/navigation/navigation.component';
import Shipments from './routes/shipments/shipments.components';

function App() {
  const dispatch  = useDispatch();
  useEffect(() => {
    dispatch(getAllCustomersStart());
  })
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<RandomPage />}> </Route>
        <Route path='/customers/*' element={<Customers />}> </Route>
        <Route path='/shipments' element={<Shipments />}> </Route>
        {/* <Route path='/*' element={<RandomPage />}> </Route> */}
      </Route>
    </Routes> 
  );
}

export default App;
