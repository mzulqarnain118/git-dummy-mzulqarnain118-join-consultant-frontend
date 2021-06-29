import React from "react";
import moment from "moment";
import Header from "./Header";

class ConfirmDetailsDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      //width for the mobile view
      width: 0,
    };
  }

  //update width for mobile view
  componentDidMount = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { userData } = this.props;
    return (
      <React.Fragment>
        {/* header displayed for mobile view */}
        {this.state.width <= 550 ? <Header step={0} agreement={false} /> : null}
        <div
          className={
            this.state.width >= 550 ? "componentMargin3 " : "mobileComponent"
          }
        >
          <span className="head1">
            GOOD MOVE, {userData.firstname.toUpperCase()}!
          </span>
          <div className="staticText3">
            We love it when our customers become consultants. We have most of
            your details on file.
          </div>
          <div className="staticText4">
            Take a quick look over and we'll move forward.
          </div>
          {/* Display tab to show all user details */}
          <div className="displayArea">
            <div className="row">
              {/* first name */}
              <div className="col-lg-3 offset-lg-1 col-md-3 offset-md-1 mobileDisplayWidth">
                <span className="head3">FIRST NAME</span>
                <div className="dataText">{userData.firstname}</div>
              </div>
              {/* last name */}
              <div className="col-lg-3  col-md-2 mobileDisplayWidth">
                <span className="head3">LAST NAME</span>
                <div className="dataText">{userData.lastname}</div>
              </div>
              {/* date of birth */}
              <div className="col-lg-2 offset-lg-1  col-md-3 offset-md-2 mobileDisplayWidth">
                <span className="head3">DATE OF BIRTH</span>
                <div className="dataText">
                  {moment(
                    new Date(
                      userData.dob.year,
                      userData.dob.month,
                      userData.dob.day
                    )
                  ).format("MM/DD/YYYY")}
                </div>
              </div>
              {this.state.width <= 550 ? (
                <div className="col-lg-3 offset-lg-1 col-md-3 offset-md-1 mobileDisplayWidth">
                  <span className="head3">CELL NUMBER</span>
                  <div className="dataText">{userData.cellno}</div>
                </div>
              ) : null}
            </div>
            {/* cell number */}
            <div className="row marginHead">
              {this.state.width >= 550 ? (
                <div className="col-lg-3 offset-lg-1 col-md-3 offset-md-1 mobileDisplayWidth">
                  <span className="head3">CELL NUMBER</span>
                  <div className="dataText">{userData.cellno}</div>
                </div>
              ) : null}
              {/* address */}
              <div className="col-lg-3 col-md-4 mobileDisplayWidth">
                <span className="head3">SHIPPING ADDRESS</span>
                <div className="dataText">
                  {userData.address.street}, {userData.address.city},{" "}
                  {userData.address.state} {userData.address.zipcode}
                </div>
              </div>
              {/* working with */}
              <div className="col-lg-2 offset-lg-1 col-md-3 mobileDisplayWidth">
                <span className="head3">WORKING WITH</span>
                <div className="dataText">{userData.workingwith}</div>
              </div>
            </div>
          </div>
          {/* static text displatey at the bottom of text area */}
          <div className="displayNote">
            <b>Note:</b> If you want to change any of the Information provided,
            click on the '<b>Mange Changes</b>' button.
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ConfirmDetailsDisplay;