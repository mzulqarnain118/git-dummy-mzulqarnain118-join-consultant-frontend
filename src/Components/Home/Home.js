import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import "./Home.css";
import ConfirmDetails from "../ConfirmDetails/ConfirmDetails";
import BusinessDetails from "../BusinessDetails/BusinessDetails";
import Footer from "../Footer/Footer";
import VerifyIdentity from "../VerifyIdentity/VerifyIdentity";
import PurchaseKit from "../PurchaseKit/PurchaseKit";
import PaymentConfirmation from "../PaymentConfirmation/PaymentConfirmation";
import StepConnector from "@material-ui/core/StepConnector";
import { Logo } from "../../Assets/HeaderSVG";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import * as API from "../../configuration/apiconfig";
import CircularProgress from "@material-ui/core/CircularProgress";
import moment from "moment";
require("typeface-oswald");
require("typeface-domine");

//style for stepper
const styles = (theme) => ({
  step: {
    fontColor: "grey",

    border: "2px solid white",
    borderRadius: "50%",

    "& $completed": {
      color: "#4BA380",
      border: "0px solid white",
      borderRadius: "0%",
    },
    "& $active": {
      color: "#DCBA80",
      border: "0px solid white",
      borderRadius: "0%",
    },
  },

  step1: {
    fontColor: "black",

    "& $completed": {
      color: "#4BA380",
      border: "0px solid white",
      borderRadius: "0%",
    },
    "& $active": {
      color: "#DCBA80",
      border: "0px solid white",
      borderRadius: "0%",
    },
  },

  alternativeLabel: {},
  active: {},
  completed: {},
  disabled: {},
});

//style for stepper connector
const GreenStepConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 30px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "black",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#4BA380",
    },
  },
  line: {
    borderColor: "black",
    borderTopWidth: 1,
    borderRadius: 1,
  },
})(StepConnector);

class Home extends React.Component {
  constructor() {
    super();
    //background color
    document.body.style = "background: #F7F3F2";
    this.state = {
      //active step for stepper and to display appropriate screen
      activeStep: 0,
      //label for footer right side button
      rightFooterButtonName: "NEXT",
      // footer right side button (disable/enable)
      rightFooterButtonDisabled: true,
      //get userdata by making axios call
      userData: {
        accessToken: "",
        refreshToken: "",
        id: "",
        email: "",
        phonenumber: "",
        address: "",
        working_with: "",
        url: "",
        ssn: "",
        doing_business: "Individual",
        isemail_verified: false,
        first_name: "",
        last_name: "",
        customer: false,
        consultant: false,
        dateofbirth: "",
        screen: 0,
        street: "",
        zipcode: "",
        city: "",
        state: "",
        indepedent_agreement: false,
        policy_procedures: false,
        cart_id: "",
        dob: {
          year: 1970,
          month: 0,
          day: 1,
        },
      },
      // userData Error
      errorUserData: {
        email: "",
        ssn: "",
        password: "",
      },
      //to check if url is available
      checkURLAvailability: false,
      //current agreement displayed
      currentAgreement: false,
      //width for mobile view
      width: 0,
      // state variable to (enable/disable) footer
      displayFooter: true,
      //display loader
      load: false,
    };
  }

  //*********************************************************** API Calls Starts Here*********************************************************/

  // API to Verify Email (landing page)
  apiVerifyEmail = async () => {
    this.setState({ load: true, rightFooterButtonDisabled: true });
    let userData = this.state.userData;
    let errorUserData = this.state.errorUserData;
    let data = { email: userData["email"] };
    await API.callEndpoint("POST", "Basic", "/api/v1/users/verifyEmail", data)
      .then((response) => {
        try {
          if (response.data.is_emailValid) {
            errorUserData["email"] = "";
            this.setState({
              load: false,
              rightFooterButtonName: "LOG IN",
              rightFooterButtonDisabled: true,
              errorUserData: errorUserData,
            });
          }
        } catch (e) {
          console.log("Error in /verifyEmail1");
          console.log(e);
          errorUserData["email"] = "Invalid Email";
          this.setState({
            load: false,
            errorUserData: errorUserData,
          });
        }
      })
      .catch((error) => {
        console.log("Error in /verifyEmail2");
        console.log(error);
        errorUserData["email"] = error.error;
        this.setState({
          load: false,
          errorUserData: errorUserData,
        });
      });
  };

  // API to Login
  apiLogin = async () => {
    this.setState({ load: true, rightFooterButtonDisabled: true });
    let userData = this.state.userData;
    let errorUserData = this.state.errorUserData;
    let activeStep = this.state.activeStep;

    await API.getAccessToken(userData.email, userData.password, false)
      .then((response) => {
        try {
          userData = response.data;
          //update date in required format
          let Date = moment(userData["dateofbirth"], "YYYY/MM/DD");
          userData["dob"] = {
            day: Date.date(),
            month: 1 + Date.month(),
            year: Date.year(),
          };
          //update address to required format
          userData["address"] = {
            street: userData["street"],
            zipcode: userData["zipcode"],
            city: userData["city"],
            state: userData["state"],
          };
          let buttonName = "";
          let buttonDisable = false;
          if (userData.first_name === "") {
            buttonName = "SAVE AND PROCEED";
            buttonDisable = true;
          } else {
            buttonName = "LOOKS GOOD";
            buttonDisable = false;
          }
          activeStep = userData.screen;
          if (activeStep === 1) {
            buttonDisable = true;
            buttonName = "PROCEED";
          } else if (activeStep === 2) {
            buttonDisable = true;
            buttonName = "CONTINUE";
          } else if (activeStep === 3) {
            buttonDisable = true;
            buttonName = "DONE";
          } else if (activeStep === 4) {
            buttonDisable = false;
          }
          if (userData.doing_business === "") {
            userData["doing_business"] = "Individual";
          }
          //update state with user data
          this.setState({
            load: false,
            rightFooterButtonName: buttonName,
            rightFooterButtonDisabled: buttonDisable,
            userData,
            activeStep,
          });
        } catch (e) {
          console.log("Error in /Login1");
          console.log(e);
          //update state with user data
          this.setState({
            load: false,
          });
        }
      })
      .catch((error) => {
        console.log("Error in /Login2");
        console.log(error);
        errorUserData["password"] = error.error;
        //update state with user data
        this.setState({
          load: false,
          errorUserData,
        });
      });
  };

  // API to update user data
  apiUpdateUserData = async () => {
    this.setState({ load: true, rightFooterButtonDisabled: true });
    let data = {};
    let userData = this.state.userData;

    //user details
    data["id"] = userData["id"];
    data["first_name"] = userData["first_name"];
    data["last_name"] = userData["last_name"];
    data["working_with"] = userData["working_with"];
    data["phonenumber"] = userData["phonenumber"];

    //Change Address to required format
    data["street"] = userData["address"]["street"];
    data["zipcode"] = userData["address"]["zipcode"];
    data["city"] = userData["address"]["city"];
    data["state"] = userData["address"]["state"];

    //Change date to required format
    data["dateofbirth"] = moment()
      .year(userData["dob"]["year"])
      .month(userData["dob"]["month"] - 1)
      .date(userData["dob"]["day"])
      .format("YYYY-MM-DD");

    // phone number remove hypen
    data["phonenumber"] = userData["phonenumber"]
      .split("")
      .filter((item) => item !== "-")
      .join("");

    await API.callEndpoint("PATCH", "Bearer", "/api/v1/users/update", data)
      .then((response) => {
        try {
          userData = response.data;
          //update date in required format
          let Date = moment(userData["dateofbirth"], "YYYY/MM/DD");
          userData["dob"] = {
            day: Date.date(),
            month: 1 + Date.month(),
            year: Date.year(),
          };

          //update address to required format
          userData["address"] = {
            street: userData["street"],
            zipcode: userData["zipcode"],
            city: userData["city"],
            state: userData["state"],
          };

          this.setState({
            load: false,
            rightFooterButtonName: "LOOKS GOOD",
            rightFooterButtonDisabled: false,
            userData,
          });
        } catch (e) {
          console.log("Error in /Update");
          console.log(e);

          this.setState({
            load: false,
          });
        }
      })
      .catch((error) => {
        console.log("Error in /update");
        console.log(error);
        this.setState({
          load: false,
        });
      });
  };

  // Api to update which screen the user has completed ,
  //screen represented by screen id + data collected in that screen
  apiUpdateScreen = async (data, buttonName) => {
    this.setState({ load: true, rightFooterButtonDisabled: true });
    let errorUserData = this.state.errorUserData;

    await API.callEndpoint("PATCH", "Bearer", "/api/v1/users/update", data)
      .then((response) => {
        errorUserData["ssn"] = "";
        this.setState({
          load: false,
          rightFooterButtonName: buttonName,
          rightFooterButtonDisabled: true,
          activeStep: data.screen,
          errorUserData,
        });
      })
      .catch((error) => {
        console.log("Error in /update");
        console.log(error);
        if (error.error === "Please enter valid ssn") {
          errorUserData["ssn"] = "Invalid SSN";
        }
        this.setState({
          load: false,
        });
      });
  };

  // API to verify URL
  apiVerifyURL = async (customURL) => {
    let data = {
      url: customURL,
    };
    return await API.callEndpoint(
      "POST",
      "Bearer",
      "/api/v1/users/verifyUrl",
      data
    )
      .then((response) => {
        try {
          if (response.data.validText) {
            return true;
          } else {
            return false;
          }
        } catch (e) {
          console.log("Error in /VerifyURL1");
          return false;
        }
      })
      .catch((error) => {
        console.log("Error in /VerifyURL2");
        return false;
      });
  };

  //*********************************************************** API Calls Ends Here*********************************************************/

  // method to (ennable/disable) footer
  setDisplayFooter = (value) => {
    this.setState({ displayFooter: value });
  };

  //setCheckURLAvailability
  setCheckURLAvailability = (value) => {
    this.setState({ checkURLAvailability: value });
  };

  //stepper title content
  getSteps = () => {
    return [
      "CONFIRM DETAILS",
      "BUSINESS DETAILS",
      "REVIEW TERMS",
      "PURCHASE KIT",
    ];
  };

  //stepper content to be displayed based on current active step
  getStepContent(step) {
    switch (step) {
      case 0:
        return (
          // confirm details display screen
          <ConfirmDetails
            rightFooterButtonName={this.state.rightFooterButtonName}
            setrightFooterButtonDisabled={this.setrightFooterButtonDisabled}
            userData={this.state.userData}
            errorUserData={this.state.errorUserData}
            setUserData={this.setUserData}
            setButtonName={this.setButtonName}
            setErrorUserData={this.setErrorUserData}
          />
        );
      case 1:
        return (
          // Business details screen
          <BusinessDetails
            rightFooterButtonName={this.state.rightFooterButtonName}
            setrightFooterButtonDisabled={this.setrightFooterButtonDisabled}
            userData={this.state.userData}
            setUserData={this.setUserData}
            setButtonName={this.setButtonName}
            apiVerifyURL={this.apiVerifyURL}
            errorUserData={this.state.errorUserData}
            setErrorUserData={this.setErrorUserData}
            checkURLAvailability={this.state.checkURLAvailability}
            setCheckURLAvailability={this.setCheckURLAvailability}
          />
        );
      case 2:
        return (
          //verify email screen
          <VerifyIdentity
            rightFooterButtonName={this.state.rightFooterButtonName}
            setrightFooterButtonDisabled={this.setrightFooterButtonDisabled}
            userData={this.state.userData}
            setUserData={this.setUserData}
            setButtonName={this.setButtonName}
            setDisplayFooter={this.setDisplayFooter}
            errorUserData={this.state.errorUserData}
            setErrorUserData={this.setErrorUserData}
          />
        );
      case 3:
        return (
          //Purchase kit screen
          <PurchaseKit
            rightFooterButtonName={this.state.rightFooterButtonName}
            setrightFooterButtonDisabled={this.setrightFooterButtonDisabled}
            userData={this.state.userData}
            setUserData={this.setUserData}
            setButtonName={this.setButtonName}
          />
        );
      default:
        //default screen
        return "Unknown step";
    }
  }

  //set current agreement
  setCurrentAgreement = () => {
    this.setState({ currentAgreement: !this.state.currentAgreement });
  };

  //method to move to next screen
  moveToNextScreen = () => {
    this.handleNext();
  };

  // method to set user data
  setUserData = (data) => {
    this.setState({
      userData: data,
    });
  };

  // method to set error
  setErrorUserData = (data) => {
    this.setState({
      errorUserData: data,
    });
  };

  //set button name
  setButtonName = (button) => {
    this.setState({
      rightFooterButtonName: button,
    });
  };

  // method to enable/disable right footer button
  setrightFooterButtonDisabled = (value) => {
    this.setState({ rightFooterButtonDisabled: value });
  };

  // to move to next screen
  handleNext = () => {
    const { activeStep } = this.state;

    this.setState({
      activeStep: activeStep + 1,
    });
  };

  // to set width for mobile view
  componentDidMount = () => {
    this.setState({ width: window.innerWidth });
  };

  // header Back button
  handleBackButton = () => {
    let rightButton = this.state.rightFooterButtonName;
    console.log(rightButton);
    switch (rightButton) {
      case "LOG IN":
        this.setState({
          rightFooterButtonName: "NEXT",
          rightFooterButtonDisabled: false,
        });
        break;
      case "LOOKS GOOD":
        this.setState({
          rightFooterButtonName: "NEXT",
          rightFooterButtonDisabled: false,
        });
        break;
      case "SAVE AND PROCEED":
        if (!this.state.rightFooterButtonDisabled) {
          this.apiUpdateUserData();
          break;
        } else {
          break;
        }

      case "PROCEED":
        this.setState({
          rightFooterButtonName: "LOOKS GOOD",
          rightFooterButtonDisabled: false,
          activeStep: 0,
        });
        break;
      case "CONTINUE":
        this.setState({
          rightFooterButtonName: "PROCEED",
          rightFooterButtonDisabled: false,
          activeStep: 1,
        });
        break;
      case "DONE":
        this.setState({
          rightFooterButtonName: "CONTINUE",
          rightFooterButtonDisabled: false,
          activeStep: 2,
        });
        break;

      default:
        this.setState({ rightFooterButtonName: "NEXT" });
        break;
    }
  };

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep, load } = this.state;

    return (
      <React.Fragment>
        {load ? (
          <CircularProgress color="black" size={80} className="loader" />
        ) : null}
        {/* If active step is less than 4 appropriate step page is dispayed , 
        if active step is 4  - payment confirmation page is displayed */}
        {this.state.activeStep < 4 ? (
          <>
            <div className="container-fluid">
              <div className="row headerMarginTop">
                <div className="col-xl-2 col-lg-1 col-md-1 col-1">
                  <div className="arrowIcon3" onClick={this.handleBackButton}>
                    <ArrowBackIosIcon />
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-11 col-11">
                  <div className="LogoIcon">
                    <Logo />
                  </div>
                </div>
                <div className="col-xl-8 col-lg-9 col-md-12 col-12 stepperMarginTop">
                  {/* stepper */}
                  <Stepper
                    activeStep={activeStep}
                    connector={<GreenStepConnector />}
                    orientation={
                      this.state.width >= 550 ? "horizontal" : "vertical"
                    }
                  >
                    {steps.map((label, index) => {
                      const props = {};
                      const labelProps = {};
                      return (
                        <Step
                          key={label}
                          {...props}
                          classes={{
                            root: classes.step1,
                            completed: classes.completed,
                            active: classes.active,
                          }}
                        >
                          <StepLabel
                            {...labelProps}
                            StepIconProps={{
                              classes: {
                                root: classes.step,
                                completed: classes.completed,
                                active: classes.active,
                                disabled: classes.disabled,
                              },
                            }}
                          >
                            <span className="fontOswald">{label}</span>
                          </StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>
                </div>
              </div>
            </div>

            <div className="container-fluid HomeContainer" id="">
              <div className="row">
                <div className="col-xl-10 offset-xl-2 col-lg-11 offset-lg-1">
                  {this.state.width >= 550 ? (
                    <>
                      {/* Stepper */}

                      {/* to display content based on active step */}
                      <div>
                        <Typography className={classes.instructions}>
                          {this.getStepContent(activeStep)}
                        </Typography>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* enter email */}
                      <div className="mobileMargin">
                        <Typography className={classes.instructions}>
                          {this.getStepContent(activeStep)}
                        </Typography>
                      </div>
                      {/* Stepper */}
                      {this.state.rightFooterButtonName === "NEXT" ? (
                        <div className="btm-list-blk">
                          <div className="btm-list-inner">
                            <div className="mobileStepHead">
                              {" "}
                              WHAT HAPPENS NEXT ?
                            </div>
                            {/* stepper for mobile view  */}
                            <Stepper
                              activeStep={activeStep}
                              style={{ background: "#e8e0dd" }}
                              className="mobileStep"
                              orientation={
                                this.state.width >= 550
                                  ? "horizontal"
                                  : "vertical"
                              }
                            >
                              {steps.map((label, index) => {
                                const props = {};
                                const labelProps = {};
                                return (
                                  <Step
                                    key={label}
                                    {...props}
                                    classes={{
                                      //root: classes.step,
                                      completed: classes.completed,
                                      active: classes.active,
                                    }}
                                  >
                                    <StepLabel
                                      {...labelProps}
                                      StepIconProps={{
                                        classes: {
                                          root: classes.step,
                                          completed: classes.completed,
                                          active: classes.active,
                                          disabled: classes.disabled,
                                          text: classes.textStep,
                                        },
                                      }}
                                    >
                                      <span className="fontOswald">
                                        {label}
                                      </span>
                                    </StepLabel>
                                  </Step>
                                );
                              })}
                            </Stepper>
                          </div>
                        </div>
                      ) : null}
                    </>
                  )}

                  {/* end of first page */}
                </div>
              </div>
            </div>
            {/* Global Footer for all screens  */}
            <Footer
              rightFooterButtonName={this.state.rightFooterButtonName}
              rightFooterButtonDisabled={this.state.rightFooterButtonDisabled}
              moveToNextScreen={this.moveToNextScreen}
              userData={this.state.userData}
              setUserData={this.setUserData}
              setButtonName={this.setButtonName}
              setrightFooterButtonDisabled={this.setrightFooterButtonDisabled}
              displayFooter={this.state.displayFooter}
              setDisplayFooter={this.setDisplayFooter}
              apiVerifyEmail={this.apiVerifyEmail}
              apiLogin={this.apiLogin}
              apiUpdateUserData={this.apiUpdateUserData}
              apiUpdateScreen={this.apiUpdateScreen}
            />
          </>
        ) : (
          // once all steps are completed Payement confirmation screen is displayed
          <PaymentConfirmation
            userData={this.state.userData}
            setUserData={this.setUserData}
            setButtonName={this.setButtonName}
          />
        )}
      </React.Fragment>
    );
  }
}
// to add styles and props type for material UI design used
Home.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Home);