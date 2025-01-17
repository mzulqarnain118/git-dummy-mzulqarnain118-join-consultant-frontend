import React from "react";
import "./BusinessDetails.css";
import "../ConfirmDetails/ConfirmDetails.css";
import Header from "../MobileHeader/Header";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CircularProgress from "@mui/joy/CircularProgress";

class BusinessDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //to record custom URL
      customURL: props.userData.url,
      errorCustomURL: "",
      //to check availability of URL
      customURLAvailability: false,
      // Individual /entity
      currentButton:
        props.userData.doing_business === "Individual" ? false : true,
      // SSN entered by user
      ssn: props.userData.ssn,
      //load circle
      load: false,
      //avoid sssn validation for new user when they are typing for the first time
      avoidSSNValidation: false,
    };
  }

  // to handle change in SSN value and validate it
  handleSSN = async (e) => {
    let errorSsn = this.props.errorUserData.ssn;
    let value = e.target.value;
    if (value !== "") {
      let regex = new RegExp(
        "^(?!(000|666|9))\\d{3}-(?!00)\\d{2}-(?!0000)\\d{4}$"
      );
      if (regex.test(value)) {
        await this.setState({ avoidSSNValidation: true });
        errorSsn = "";
      } else if (!regex.test(value) && this.state.avoidSSNValidation) {
        errorSsn = "Invalid SSN";
        this.props.setrightFooterButtonDisabled(true);
      } else if (!regex.test(value) && value.length == 11) {
        errorSsn = "Invalid SSN";
        this.props.setrightFooterButtonDisabled(true);
      }
    } else if (value === "") {
      errorSsn = "";
    }
    //  else if (value === "" && this.state.avoidSSNValidation) {
    //   errorSsn = "SSN is mandatory";
    //   this.props.setrightFooterButtonDisabled(true);
    // }
    // masking is done to add the hypen "-" to the SSN
    value = maskingSSN(
      value
        .split("")
        .filter((item) => item.match(/[0-9\\-]/i))
        .join("")
    );
    this.setState({ ssn: value });

    // update to home.js userdata state
    let userData = this.props.userData;
    userData["ssn"] = value;
    userData["doing_business"] = this.state.currentButton
      ? "Entity"
      : "Individual";
    this.props.setUserData(userData);
    let errorUserData = this.props.errorUserData;
    errorUserData["ssn"] = errorSsn;
    this.props.setErrorUserData(errorUserData);
    this.validateToMoveToNextScreen(this.props.checkURLAvailability);
  };

  toggleButton = (toggle) => {
    let userData = this.props.userData;
    userData["doing_business"] = toggle ? "Entity" : "Individual";
    this.props.setUserData(userData);
    this.setState({ currentButton: toggle });
  };

  // to handle change in custom URL entered by the user
  handleChange = (e) => {
    let customURLAvailability = this.state.customURLAvailability;
    let errorCustomURL = this.state.errorCustomURL;
    let value = e.target.value
      .toLowerCase()
      .split("")
      .filter((item) => item.match(/[a-z0-9]/i))
      .join("")
      .toLowerCase();

    if (value !== "") {
      let regex = new RegExp("[^a-z0-9]+");
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
    });
    let userData = this.props.userData;
    userData["url"] = value;
    this.props.setUserData(userData);
  };

  validateURL = async (e) => {
    this.setState({ load: true });
    // to check the availability of custom URL in the database
    await setTimeout(() => {
      this.checkURLAvailability();
    }, 100);
  };

  // check availability of custom URL
  checkURLAvailability = async () => {
    let customURLAvailability = this.state.customURLAvailability;
    let checkURLAvailability = this.props.checkURLAvailability;
    let customURL = this.state.customURL;
    let errorCustomURL = this.state.errorCustomURL;

    if (errorCustomURL === "") {
      customURLAvailability = true;
      let available = await this.props.apiVerifyURL(customURL);
      if (!available) {
        checkURLAvailability = false;
        this.props.setrightFooterButtonDisabled(true);
      } else {
        checkURLAvailability = true;
        this.validateToMoveToNextScreen(true);
        this.props.setrightFooterButtonDisabled(false);
      }
    } else {
      customURLAvailability = false;
      this.props.setrightFooterButtonDisabled(true);
    }

    this.setState({ customURLAvailability, load: false });
    this.props.setCheckURLAvailability(checkURLAvailability);
  };

  // move to next screen
  validateToMoveToNextScreen = (checkURLAvailability) => {
    let ssn = this.state.ssn;
    let errorSsn = this.props.errorUserData.ssn;
    // let checkURLAvailability = this.props.checkURLAvailability;
    if (ssn && errorSsn?.includes("Invalid SSN")) {
      this.props.setrightFooterButtonDisabled(true);
      return;
    }
    if (
      // ssn !== "" &&
      // errorSsn === "" &&
      checkURLAvailability ||
      ssn === ""
    ) {
      this.props.setrightFooterButtonDisabled(false);
    }
  };

  //load when business details screen is loaded
  componentDidMount = async () => {
    if (this.props.userData.url !== "") {
      await this.checkURLAvailability();
    }
    let avoidSSNValidation = this.state.avoidSSNValidation;
    if (this.props.userData.ssn !== "") {
      avoidSSNValidation = true;
      this.props.setrightFooterButtonDisabled(false);
    }
    this.setState({ avoidSSNValidation });
  };

  render() {
    const { customURL, errorCustomURL, currentButton, ssn, load } = this.state;
    const { errorUserData, checkURLAvailability } = this.props;
    return (
      <React.Fragment>
        {/* header user in mobile view */}
        {window.innerWidth <= 550 ? (
          <Header
            step={1}
            agreement={false}
            handleBackButton={this.props.handleBackButton}
            topBarNavigation={this.props.topBarNavigation}
          />
        ) : null}
        <div className="mobileoverFlowBusinessDetails">
          <div
            className={
              window.innerWidth >= 550
                ? "BDcomponentMargin "
                : "BDmobileComponent"
            }
          >
            <span className="BDhead1">ALMOST THERE!</span>
            {/* ™ */}
            <div className="BDstaticText3">
              Create a custom URL for your Scout &amp; Cellar business.
            </div>

            <div
              className={
                errorCustomURL.length > 0 ? "row urlRow1" : "row urlRow"
              }
            >
              <div className="col-lg-2 col-md-4 ">
                <div
                  className={
                    errorCustomURL.length > 0
                      ? "BDstaticText5"
                      : "BDstaticText4"
                  }
                >
                  www.scoutandcellar.com/
                </div>
              </div>
              {/* Input to custom URL */}
              <div className="col-lg-4 offset-lg-1 col-md-7 col-xs-3 business-margin-url customurlwidth1280">
                <div className="row">
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
                    // autocomplete="none"
                    // autoComplete="none"
                    onChange={this.handleChange}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        this.validateURL();
                      }
                    }}
                  />

                  {errorCustomURL.length > 0 ? (
                    <div className="BDerrorMes">
                      {errorCustomURL}
                      <br />
                    </div>
                  ) : (
                    <button className="searchButton" onClick={this.validateURL}>
                      Verify
                    </button>
                  )}
                </div>
              </div>

              {load ? (
                <div className="col-lg-4  col-md-3 mobileAvailabilityText offsetLeftAvailableIcon">
                  <div className="row">
                    <div className="col-lg-1 col-md-1 urlLoader">
                      <CircularProgress
                        color="success"
                        sx={{ "--CircularProgress-size": "30px" }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {this.state.customURLAvailability ? (
                    checkURLAvailability ? (
                      <div className="col-lg-4  col-md-3 mobileAvailabilityText offsetLeftAvailableIcon">
                        <div className="row" style={{ alignItems: "center" }}>
                          <div className="col-lg-1 col-md-1 mobileAvailabilityIcon">
                            <CheckCircleIcon
                              className="availableIcon"
                              style={
                                window.innerWidth <= 850
                                  ? window.innerWidth <= 550
                                    ? { fontSize: 20 }
                                    : { fontSize: 23 }
                                  : { fontSize: 30 }
                              }
                            />
                          </div>
                          <div className="col-lg-11 col-md-11 mobileAvailabilitySubText">
                            <div className="availableText">
                              This name is Available
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="col-lg-4 col-md-5 mobileAvailabilityText offsetLeftAvailableIcon">
                        <div className="row" style={{ alignItems: "center" }}>
                          <div className="col-lg-1 col-md-1 mobileAvailabilityIcon">
                            <CancelIcon
                              className="availableIcon notAvailableIcon"
                              style={
                                window.innerWidth <= 850
                                  ? window.innerWidth <= 550
                                    ? { fontSize: 20 }
                                    : { fontSize: 23 }
                                  : { fontSize: 30 }
                              }
                            />
                          </div>
                          <div className="col-lg-11 col-md-11 mobileAvailabilitySubText">
                            <div className="availableText">
                              This name is not Available
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  ) : null}
                </>
              )}
            </div>

            <div className={errorCustomURL.length > 0 ? "row" : "row"}>
              <div className="col-lg-2 col-md-4 "></div>
              {/* Input to custom URL */}
              <div className="col-lg-4 offset-lg-1 col-md-7 col-xs-3 business-margin-url customurlwidth1280">
                <div className="row">
                  <div className="entitySubtext personalUrlAdditionalInformation">
                    <p className="personalUrlAdditionalInformationParagraph">
                      Please keep in mind that your Personalized URL cannot
                      contain any of the following:
                    </p>
                    <p className="personalUrlAdditionalInformationParagraph">
                      - Special characters, punctuations, or spaces.
                    </p>
                    <p className="personalUrlAdditionalInformationParagraph">
                      - The words "Scout", "Scout & Cellar", "Clean" or
                      "Clean-Crafted".
                    </p>
                    <p className="personalUrlAdditionalInformationParagraph">
                      - Locations, including cities, states, or uniquely-named
                      regions (like New England or Gulf Coast).
                    </p>
                    <p className="personalUrlAdditionalInformationParagraph">
                      - Any other language prohibited in our Policies &
                      Procedures
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* if the custom url is valid display the rest of the screen */}
            {this.state.customURLAvailability && checkURLAvailability ? (
              <div style={{ marginBottom: "6em" }}>
                <div className="row">
                  <span className="businessHead">
                    How Will You Be Doing Business?{" "}
                    <span style={{ color: "#626466" }}>(Optional) </span>
                  </span>
                </div>
                {/* buttons to select Individual or entity */}
                <div className="row">
                  <div className="col-lg-3 col-md-5 mobileSsnToggle">
                    <div
                      className={
                        currentButton
                          ? "businessButton1 businessButtonNotActive1"
                          : "businessButton1 "
                      }
                      onClick={() => this.toggleButton(false)}
                    >
                      <AccountCircleOutlinedIcon
                        className="iconBusiness"
                        style={
                          window.innerWidth <= 850
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
                          ? "businessButton1 businessButtonNotActive"
                          : "businessButton1 "
                      }
                      onClick={() => this.toggleButton(true)}
                    >
                      <BusinessCenterOutlinedIcon
                        className="iconBusiness"
                        style={
                          window.innerWidth <= 850
                            ? { fontSize: 23 }
                            : { fontSize: 30 }
                        }
                      />
                      Entity
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-10 doingBusinessExtraInformation">
                    <br />
                    <p>What's the difference?</p>
                    <p>
                      If you're running your business solo or with a spouse,
                      choose Individual.
                    </p>
                    <p>If you have an EIN, choose Entity.</p>
                  </div>
                </div>
                <div className="row mt-0">
                  <div className="ssn">
                    SSN or EIN{" "}
                    <span style={{ color: "#626466" }}>(Optional) </span>
                  </div>
                </div>
                <div className="row">
                  {/* <div className='ssnSubtext'>
                    We're mandated by law to collect your <span style={{ fontWeight: 400 }}>SSN</span>.
                  </div> */}
                  <div className="ssnSubtext">
                    We need this information for you to get paid.
                  </div>
                </div>
                {/* SSN input  */}
                <div className="row">
                  <div className="col-lg-5 ">
                    <input
                      type="text"
                      value={ssn}
                      className={
                        errorUserData.ssn.length > 0
                          ? "form-control ssnInputRed"
                          : "form-control ssnInput"
                      }
                      id="ssn"
                      name="ssn"
                      placeholder="Enter your SSN"
                      // autocomplete="none"
                      // autoComplete="none"
                      onChange={this.handleSSN}
                      maxLength="11"
                    />

                    {errorUserData.ssn.length > 0 ? (
                      <span className="errorMesSubtext">
                        {errorUserData.ssn}
                        <br />
                      </span>
                    ) : null}
                  </div>
                </div>
                {/* Entity warning */}
                {currentButton ? (
                  <div className="row">
                    <div className="col-lg-7 entitySubtext">
                      Please note: There will be additional paperwork to fill
                      out should you decide to run your business as an entity.
                    </div>
                  </div>
                ) : null}
              </div>
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
