import { Link } from "react-router-dom";
import Header from "../../components/header/header.component";
import { PageContentWrapper } from "../../components/page-content-wrapper/page-content-wrapper.styles";
import ibackIcon from '../../assets/back-icon.svg';
import iellipse from '../../assets/ellipse.svg';
import iline from '../../assets/line.svg';
import Button, {BUTTON_TYPES} from "../../components/button/button.component";

export default function Shipments() {

  return(
    <>
      <Header title={"Shipments"} />
      <PageContentWrapper>
        <div className="w-4/6">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center space-x-3">
              <Link to='/customers' >
                <img className="py-auto" src={ibackIcon} alt="back"/>
              </Link>
              <h2> Shipment Details </h2>
            </div>
            <div className="flex space-x-3">
              <Button buttonType={BUTTON_TYPES.white}>Invoice</Button>
              <Button buttonType={BUTTON_TYPES.white}>Track/Update Shipment</Button>
            </div>
          </div>

          {/** Card */}
          <div className="flex items-center justify-between p-3 rounded-t-xl bg-[#3AB44A] text-white">
            <h2> Export</h2>
            <p>Date</p>
            <p>Shipment ID<span className="block">101234</span></p>
          </div>
          <div className="flex bg-[#F0FDF4] p-3" >
            <div>
              <p>Port of Discharge</p>
              <h2>NGApP<span className="block">Lagos, Nigeria</span></h2>
            </div>
            <div className="flex items-center">
              <img className="h-2" src={iellipse} alt="trip" /> 
              <img className="w-20" src={iline} alt="trip" />
              <img className="h-2" src={iellipse} alt="trip" /> 
            </div>
          </div>
        </div>
      </PageContentWrapper>
    </>
  )
}