import './App.scss';
import { Route, Routes } from 'react-router-dom'
import NavxHeader from './routes/navxheader/navxheader.component';
import RandomPage from './routes/randompage/randompage.component';
import Customers from './routes/customers/customers.component'; 

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavxHeader />}>
        <Route index element={<RandomPage name={'Dashboard'}/>}> </Route>
        <Route path='/customers' element={<Customers />}> </Route>
      </Route>
    </Routes> 
  );
}

export default App;
