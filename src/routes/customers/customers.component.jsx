import './customers.styles.scss';

import { PageContentWrapper } from "../../components/page-content-wrapper/page-content-wrapper.styles";

function Customers() {
  return (
    <PageContentWrapper> 
      <div className="customer-header">
        <div className="header-block">
          <span> First Name</span>
        </div>
        <div className="header-block">
          <span> Last Name </span>
        </div>
        <div className="header-block">
          <span> Email Address </span>
        </div>
        <div className="header-block">
          <span> Phone Number </span>
        </div>
        <div className="header-block">
          <span> Last Login </span>
        </div>
        <div className="header-block">
          <span> btns </span>
        </div>
      </div>

    </PageContentWrapper>
  )
}

export default Customers;