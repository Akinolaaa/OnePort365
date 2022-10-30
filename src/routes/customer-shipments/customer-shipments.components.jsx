import { useState, useEffect } from "react";
import { PageContentWrapper } from "../../components/page-content-wrapper/page-content-wrapper.styles";
import { Link, useNavigate } from 'react-router-dom';
import CustomerCard from '../../components/customer-card/customer-card.component';
import { useDispatch, useSelector } from "react-redux";
import { selectACustomer } from "../../store/customer/customer.selector";
import { selectAllShipments } from "../../store/shipment/shipment.selector";
import { getAShipmentStart } from "../../store/shipment/shipment.action";
import ibackIcon from '../../assets/back-icon.svg';
import iimport from '../../assets/import.svg';
import iexport from '../../assets/export.svg';
import iellipse from '../../assets/ellipse.svg';
import iline from '../../assets/line.svg';
import idown from '../../assets/header-icons/down.svg';
import Header from "../../components/header/header.component";
import Button, {BUTTON_TYPES} from "../../components/button/button.component";
import DropDownButton from "../../components/dropdown-btn/dropdown-btn.component";


export default function CustomerShipments()  {
  const shipments = useSelector(selectAllShipments);
  const [searchText, setSearchText] = useState("");
  const [filteredShipments, setFilteredShipments] = useState(shipments);
  const customer = useSelector(selectACustomer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const onTextChange = (event) => {
    setSearchText(event.target.value.toLowerCase());
  } 

  const filterByShippingType = (choice) => {
    console.log(1, choice);
    if(choice ==='none') {
      setFilteredShipments(shipments);
      return;
    }
    const filtered = shipments.filter(sh => {
      return sh.shipping_type.toLowerCase().includes(choice);
    })
    console.log(2, filtered);
    setFilteredShipments(filtered);
  }

  const viewDetailsButtonHandler = () => {
    dispatch(getAShipmentStart());
    navigate('/shipments');
  }

  //Origin port code, Origin port city, Origin port country, Destination port code, 
      //Destination port city, Destination port country, and shipping ID
  useEffect(() =>{
    if(shipments) {
      const filtered = shipments.filter(shipment => {
        const evry = [shipment.origin_port_code,shipment.origin_port_country
        ,shipment.origin_port_city,shipment.destination_port_code
        ,shipment.destination_port_city,shipment.destination_port_country,
        shipment._id].filter(a => a!==null);

        const searchValues = evry.reduce((str, val) => {
          return str + val
        }, "");
        return searchValues.toLowerCase().includes(searchText);
      })
      //console.log(filtered);
      setFilteredShipments(filtered);
    }
  }, [shipments, searchText]);


  
  return(
    <>
      <Header title={"Shipments"} />
      <PageContentWrapper>
        <Link to='/customers' >
          <img className="mb-7" src={ibackIcon} alt="back"/>
        </Link>
        {customer && <CustomerCard customer={customer}/>}

        <div className="flex justify-between my-3">
          <div className="flex justify-between w-2/4" >
            <Button className="text-sm" > Add New Shipment + </Button>
            <DropDownButton 
              btnTxt={'Shipment Type'} options={['Import', 'Export']}
              doThisWhenSelected={filterByShippingType} 
            />
            <Button buttonType={BUTTON_TYPES.grey} > 
              Shipment Date <img className="p-1" src={idown} alt='i' />
            </Button>
          </div>
          <input type="text" name="search" placeholder="Search by shipment ID, Destination" 
            className="p-2 border border-[#D1D5DB] text-sm w-1/3 rounded-md" onChange={onTextChange} />
        </div>
          
        <table className="w-full table-auto">
          <thead className="text-left text-xs text-[#6B7280] uppercase">
            <tr >
              <th className="px-1">Shipment Type </th>
              <th>Origin</th>
              <th></th>
              <th>Destination</th>
              <th>Shipment Date</th>
              <th>Shipping ID</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              filteredShipments && filteredShipments.map((sh) => 
                <tr key={sh._id} className="capitalize text-sm">
                  <td className="py-4">
                    <img className="inline-block pr-5" src={sh.shipping_type ==="import" ? iimport:iexport} alt='shipment-type' />
                    <span className="text-left">{ sh.shipping_type }</span>
                  </td>
                  <td>
                    <p className="text-bold">{sh.origin_port_code}</p>
                    <p className="text-xs font-light">{sh.origin_port_city}, {sh.origin_port_country}</p>
                  </td>
                  <td className="min-w-min">
                    <span className="flex items-center px-3">
                      <img className="h-2" src={iellipse} alt="trip" /> 
                      <img className="w-12" src={iline} alt="trip" />
                      <img className="h-2" src={iellipse} alt="trip" /> 
                    </span>
                  </td>
                  <td>
                    <p>{sh.destination_port_code}</p>
                    <p>{sh.destination_port_city}, {sh.destination_port_country}</p>
                  </td>
                  <td>{sh.createdAt.slice(0,10)}</td>
                  <td>{sh._id}</td>
                  <td>
                      <Button onClick={viewDetailsButtonHandler} >View Details</Button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
        
      </PageContentWrapper>
    </>
  )
}

