import React from "react";
import "../Style/BusinessDetails.css";
import "../Style/ConfirmDetails.css";
import Header from "./Header";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

class BusinessDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //width for mobile view
      width: 0,
      //to record custom URL
      customURL: "",
      errorCustomURL: "",
      //to check availability of URL
      customURLAvailability: false,
      checkAvailability: false,
      // Individual /entity
      currentButton: false,
      // SSN entered by user
      ssn: "",
      errorSsn: "",
    };
  }
  // to handle change in SSN value and validate it
  handleSSN = (e) => {
    let errorSsn = this.state.errorSsn;
    let value = e.target.value;

    if (value !== "") {
      let regex = new RegExp(
        "^(?!0{3}|6{3}|9[0-9]{2})[0-9]{3}-?(?!0{2})[0-9]{2}-?(?!0{4})[0-9]{4}$"
      );
      if (regex.test(value)) {
        errorSsn = "";
        this.props.setrightFooterButtonDisabled(false);
      } else {
        errorSsn = "Invalid SSN";
        this.props.setrightFooterButtonDisabled(true);
      }
    } else {
      errorSsn = "SSN is mandatory";
      this.props.setrightFooterButtonDisabled(true);
    }
    // masking is done to add the hypen "-" to the SSN
    value = maskingSSN(value);
    this.setState({ ssn: value, errorSsn });
  };

  toggleButton = (toggle) => {
    this.setState({ currentButton: toggle });
  };

  // to handle change in custom URL entered by the user
  handleChange = (e) => {
    let customURLAvailability = this.state.customURLAvailability;
    let errorCustomURL = this.state.errorCustomURL;
    let value = e.target.value;

    if (value !== "") {
      let regex = new RegExp("[^A-Za-z0-9]+");
      if (!regex.test(value)) {
        errorCustomURL = "";
        this.props.setrightFooterButtonDisabled(true);
      } else {
        errorCustomURL = "Enter a valid URL";
        customURLAvailability = false;
        this.props.setrightFooterButtonDisabled(true);
      }
    } else {
      errorCustomURL = "Custom URL cannot be empty";
      customURLAvailability = false;
      this.props.setrightFooterButtonDisabled(true);
    }

    this.setState({
      customURL: value,
      errorCustomURL,
      customURLAvailability,
      ssn: "",
    });
    // to check the availability of custom URL in the database
    this.checkAvailability();
  };

  // check availability of custom URL
  checkAvailability = () => {
    //dummy timeout to mimic backend call- to be removed
    setTimeout(() => {
      let customURLAvailability = this.state.customURLAvailability;
      let checkAvailability = false;
      let customURL = this.state.customURL;
      let errorCustomURL = this.state.errorCustomURL;

      if (errorCustomURL === "") {
        customURLAvailability = true;
        if (customURL === "testurlfail") {
          checkAvailability = false;
          this.props.setrightFooterButtonDisabled(true);
        } else {
          checkAvailability = true;
          this.props.setrightFooterButtonDisabled(true);
        }
      } else {
        customURLAvailability = false;
        this.props.setrightFooterButtonDisabled(true);
      }
      this.setState({ checkAvailability, customURLAvailability });
    }, 1000);
  };

  // used for mobile view change
  componentDidMount = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const {
      customURL,
      errorCustomURL,
      checkAvailability,
      currentButton,
      ssn,
      errorSsn,
    } = this.state;
    return (
      <React.Fragment>
        {/* header user in mobile view */}
        {this.state.width <= 550 ? <Header step={1} agreement={false} /> : null}
        <div className="mobileoverFlowBusinessDetails">
          <div
            className={
              this.state.width >= 550 ? "componentMargin " : "mobileComponent"
            }
          >
            <span className="head1">SETTING UP YOUR STORE</span>
            <div className="staticText3">
              Pick a custom URL to promote your personalized Scout &amp; Cellar
              storefront.
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-4 ">
                <div className="staticText4">www.scoutandcellar.com/</div>
              </div>
              {/* Input to custom URL */}
              <div className="col-lg-4 col-md-3 ">
                <input
                  type="text"
                  value={customURL}
                  className={
                    errorCustomURL.length > 0
                      ? "form-control customURLRed"
                      : "form-control customURL"
                  }
                  id="webLink"
                  name="webLink"
                  placeholder="Customise your URL"
                  autoComplete="off"
                  onChange={this.handleChange}
                />

                {errorCustomURL.length > 0 ? (
                  <div className="errorMes">
                    {errorCustomURL}
                    <br />
                  </div>
                ) : null}
              </div>
              {this.state.customURLAvailability ? (
                checkAvailability ? (
                  <div className="col-lg-5 col-md-4 mobileAvailabilityText">
                    <div className="row">
                      <div className="col-lg-1 col-md-1 mobileAvailabilityIcon">
                        <CheckCircleIcon
                          className="availableIcon"
                          style={
                            this.state.width <= 850
                              ? this.state.width <= 550
                                ? { fontSize: 20 }
                                : { fontSize: 23 }
                              : { fontSize: 30 }
                          }
                        />
                      </div>
                      <div className="col-lg-5 col-md-6 mobileAvailabilitySubText">
                        <div className="availableText">
                          This name is Available
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="col-lg-5 col-md-4 mobileAvailabilityText">
                    <div className="row">
                      <div className="col-lg-1 col-md-1 mobileAvailabilityIcon">
                        <CancelIcon
                          className="notAvailableIcon"
                          style={
                            this.state.width <= 850
                              ? this.state.width <= 550
                                ? { fontSize: 20 }
                                : { fontSize: 23 }
                              : { fontSize: 30 }
                          }
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 mobileAvailabilitySubText">
                        <div className="availableText">
                          This name is Not Available
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ) : null}
            </div>
            {/* if the custom url is valid display the rest of the screen */}
            {this.state.customURLAvailability && checkAvailability ? (
              <>
                <div className="row">
                  <span className="businessHead">DOING BUSINESS AS AN</span>
                </div>
                {/* buttons to select Individual or entity */}
                <div className="row">
                  <div className="col-lg-3 col-md-5 mobileSsnToggle">
                    <div
                      className={
                        currentButton
                          ? "businessButton1 businessButtonNotActive"
                          : "businessButton1 "
                      }
                      onClick={() => this.toggleButton(false)}
                    >
                      <AccountCircleOutlinedIcon
                        className="iconBusiness"
                        style={
                          this.state.width <= 850
                            ? { fontSize: 23 }
                            : { fontSize: 30 }
                        }
                      />
                      Individual
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-5 mobileSsnToggle">
                    <div
                      className={
                        !currentButton
                          ? "businessButton2 businessButtonNotActive"
                          : "businessButton2 "
                      }
                      onClick={() => this.toggleButton(true)}
                    >
                      <BusinessCenterOutlinedIcon
                        className="iconBusiness"
                        style={
                          this.state.width <= 850
                            ? { fontSize: 23 }
                            : { fontSize: 30 }
                        }
                      />
                      Entity
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="ssn">SSN</div>
                </div>
                <div className="row">
                  <div className="ssnSubtext">
                    We're mandated by law to collect your{" "}
                    <span style={{ fontWeight: 400 }}>SSN</span>.
                  </div>
                </div>
                {/* SSN input  */}
                <div className="row">
                  <div className="col-lg-5 ">
                    <input
                      type="text"
                      value={ssn}
                      className={
                        errorSsn.length > 0
                          ? "form-control ssnInputRed"
                          : "form-control ssnInput"
                      }
                      id="ssn"
                      name="ssn"
                      placeholder="Enter your SSN"
                      autoComplete="off"
                      onChange={this.handleSSN}
                    />

                    {errorSsn.length > 0 ? (
                      <span className="errorMesSubtext">
                        {errorSsn}
                        <br />
                      </span>
                    ) : null}
                  </div>
                </div>
                {/* Entity warning */}
                {currentButton ? (
                  <div className="row">
                    <div className="col-lg-7 entitySubtext">
                      Additional documentation about your entity might be
                      required after you complete signing up.
                    </div>
                  </div>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BusinessDetails;

// additional function to add hypen "-" to the SSN
const maskingSSN = (value) => {
  value = value
    .split("")
    .filter((item) => item !== "-")
    .join("");

  if (value.length > 3 && value.length <= 5) {
    value =
      value.split("").splice(0, 3).join("") +
      "-" +
      value.split("").splice(3).join("");
  } else if (value.length >= 6) {
    value =
      value.split("").splice(0, 3).join("") +
      "-" +
      value.split("").splice(3, 2).join("") +
      "-" +
      value.split("").splice(5).join("");
  }
  return value;
};
