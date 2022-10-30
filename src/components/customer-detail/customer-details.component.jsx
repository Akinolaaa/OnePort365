import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getACustomerStart } from '../../store/customer/customer.action';
import { getAllShipmentsStart } from '../../store/shipment/shipment.action';
import Button, { BUTTON_TYPES } from '../button/button.component';
//import './customer-detail.styles.scss';

const CustomerDetails = ({customer}) => {
  const { Avatar, email, first_name, last_name } = customer;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shipmentsButtonHandler = () => {
    dispatch(getACustomerStart());
    dispatch(getAllShipmentsStart());
    navigate('/customers/shipments');
  }
  return(
    <tr>
      <td className='py-2 text-left'>
          <img className='inline-block w-10 h-10 rounded-full mx-auto b-solid' src={Avatar} alt='avatar'/>
          <span className='inline-block'>{first_name}</span>
      </td>
      <td>
        <span>{last_name}</span>
      </td>
      <td>
        <span>{email}</span>
      </td>
      <td>
        <span>08975436789</span>
      </td>
      <td>
        <span>Aug 16, 2024</span>
      </td>
      <td>
        <span className='flex justify-center align-center'>
          <Button className='inline-block mx-2' buttonType={ BUTTON_TYPES.white } onClick={shipmentsButtonHandler}>
            Shipments
          </Button>
          <Button className='inline-block'>Edit</Button>
        </span>
      </td>
    </tr>
  )
}

export default CustomerDetails;