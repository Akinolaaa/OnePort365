import { useSelector } from 'react-redux';
//import { getAllCustomersStart } from '../../store/customer/customer.action';
import { selectCustomers } from '../../store/customer/customer.selector';


import { PageContentWrapper } from "../../components/page-content-wrapper/page-content-wrapper.styles";
import Button from '../../components/button/button.component';
import CustomerDetails from '../../components/customer-detail/customer-details.component';
import Header from '../header/header.component';
import Spinner from '../spinner/spinner.component';


function CustomersPage() {
  const customers = useSelector(selectCustomers);
  return (
    <div>
      <Header title={"Customers"}/>
      <PageContentWrapper> 
        <Button>Add A Customer + </Button>
        <br></br>
        {
          customers ? 
          <table className='w-full'>
            <thead>
              <tr>
                <th className='text-left'>First Name</th>
                <th className='text-left'>Last Name</th>
                <th className='text-left'>Email Address</th>
                <th className='text-left'>Phone Number</th>
                <th className='text-left'>Last Login</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                customers.map((customer) => <CustomerDetails key={customer.id} customer={customer}/>)
              }
            </tbody>
          </table>
          : <Spinner />
        }
      </PageContentWrapper>
    </div>
  )
}

export default CustomersPage;