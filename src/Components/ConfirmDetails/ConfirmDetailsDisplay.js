import React from "react";
import moment from "moment";
import Header from "../MobileHeader/Header";

class ConfirmDetailsDisplay extends React.Component {
  render() {
    const { userData } = this.props;
    return (
      <React.Fragment>
        {/* header displayed for mobile view */}
        {window.innerWidth <= 550 ? (
          <Header step={0} agreement={false} />
        ) : null}
        <div
          className={
            window.innerWidth >= 550 ? "componentMargin3 " : "mobileComponent"
          }
        >
          <span className="head1">
            GOOD MOVE, {userData.first_name.toUpperCase()}!
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
              <div className="col-lg-3 col-md-3 col-sm-4 col-5 mobileDisplayWidth">
                <span className="head3">FIRST NAME</span>
                <div className="dataText">{userData.first_name}</div>
              </div>
              {/* last name */}
              <div className="col-lg-3 col-md-3 col-sm-4 col-5  mobileDisplayWidth">
                <span className="head3">LAST NAME</span>
                <div className="dataText">{userData.last_name}</div>
              </div>
              {/* email*/}
              <div className="col-lg-3 col-md-3 col-sm-4 col-5  mobileDisplayWidth">
                <span className="head3">EMAIL</span>
                <div className="dataText">{userData.email}</div>
              </div>
              {/* date of birth */}
              <div className="col-lg-3 col-md-3 col-sm-4 col-5 mobileDisplayWidth">
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
              {window.innerWidth <= 550 ? (
                <div className="col-lg-3 offset-lg-1 col-md-3 offset-md-1 mobileDisplayWidth">
                  <span className="head3">CELL NUMBER1</span>
                  <div className="dataText">
                    {maskingPhoneNumber(userData.phonenumber)}
                  </div>
                </div>
              ) : null}
            </div>

            {/* cell number */}
            <div className="row marginHead">
              {window.innerWidth >= 550 ? (
                <div className="col-lg-3 col-md-3 col-sm-4 col-5 mobileDisplayWidth">
                  <span className="head3">CELL NUMBER2</span>
                  <div className="dataText">
                    {maskingPhoneNumber(userData.phonenumber)}
                  </div>
                </div>
              ) : null}
              {/* address */}
              <div className="col-lg-3 col-md-3 col-sm-4 col-5  mobileDisplayWidth">
                <span className="head3">SHIPPING ADDRESS</span>
                <div className="dataText">
                  {userData.address.street}, {userData.address.city},{" "}
                  {userData.address.state} {userData.address.zipcode}
                </div>
              </div>
              {/* working with */}
              <div className="col-lg-3 col-md-3 col-sm-4 col-5 mobileDisplayWidth">
                <span className="head3">WORKING WITH</span>
                <div className="dataText">{userData.working_with.name}</div>
              </div>
            </div>
          </div>
          {/* static text displatey at the bottom of text area */}
          <div className="displayNote">
            <b>Note:</b> If you want to change any of the Information provided,
            click on the '<b>Manage Changes</b>' button.
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ConfirmDetailsDisplay;

// additional function to add hypen "-" to the phone number
const maskingPhoneNumber = (value) => {
  value = value
    .split("")
    .filter((item) => item !== "-")
    .join("");

  if (value.length > 3 && value.length <= 6) {
    value =
      value.split("").splice(0, 3).join("") +
      "-" +
      value.split("").splice(3).join("");
  } else if (value.length >= 7) {
    value =
      value.split("").splice(0, 3).join("") +
      "-" +
      value.split("").splice(3, 3).join("") +
      "-" +
      value.split("").splice(6).join("");
  }

  return value;
};
