import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import "../Style/Home.css";
import ConfirmDetails from "./ConfirmDetails";
import BusinessDetails from "./BusinessDetails";
import Footer from "./Footer";
import VerifyIdentity from "./VerifyIdentity";
import PurchaseKit from "./PurchaseKit";
import PaymentConfirmation from "./PaymentConfirmation";
import StepConnector from "@material-ui/core/StepConnector";
import {Logo} from "../Assets/HeaderSVG";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
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
      userData: {},
      //width for mobile view
      width: 0,
      // state variable to (enable/disable) footer
      displayFooter: true,
    };
  }

  // method to (ennable/disable) footer
  setDisplayFooter = (value) => {
    this.setState({displayFooter: value});
  };

  //stepper title content
  getSteps = () => {
    return ["CONFIRM DETAILS", "BUSINESS DETAILS", "VERIFY IDENTITY", "PURCHASE KIT"];
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
            setUserData={this.setUserData}
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
            setDisplayFooter={this.setDisplayFooter}
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
          />
        );
      default:
        //default screen
        return "Unknown step";
    }
  }

  //method to move to next screen
  moveToNextScreen = () => {
    this.handleNext();
  };

  // method to ser user data
  setUserData = (button, data, disabled) => {
    this.setState({
      rightFooterButtonName: button,
      userData: data,
      rightFooterButtonDisabled: disabled,
    });
  };

  // method to enable/disable right footer button
  setrightFooterButtonDisabled = (value) => {
    this.setState({rightFooterButtonDisabled: value});
  };

  // to move to next screen
  handleNext = () => {
    const {activeStep} = this.state;

    this.setState({
      activeStep: activeStep + 1,
    });
  };

  // to set width for mobile view
  componentDidMount = () => {
    this.setState({width: window.innerWidth});
  };

  render() {
    const {classes} = this.props;
    const steps = this.getSteps();
    const {activeStep} = this.state;

    return (
      <React.Fragment>
        {/* If active step is less than 4 appropriate step page is dispayed , 
        if active step is 4  - payment confirmation page is displayed */}
        {this.state.activeStep < 4 ? (
          <>
            <div className="row headerMarginTop" style={{background: "#e8e0dd"}}>
              <div className="col-lg-1" style={{background: "#e8e0dd"}}>
                <div className="arrowIcon3">
                  <ArrowBackIosIcon style={{width: "1.3em", height: "2.5em"}} />
                </div>
              </div>
              <div className="col-lg-4" style={{background: "#e8e0dd"}}>
                <div className="LogoIcon">
                  <Logo />
                </div>
              </div>
              <div className="col-lg-6 stepperMarginTop" style={{background: "#e8e0dd"}}>
                {/* stepper */}
                <Stepper activeStep={activeStep} connector={<GreenStepConnector />} style={{background: "#e8e0dd"}} orientation={this.state.width >= 550 ? "horizontal" : "vertical"}>
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
            <div className="container header">
              <div className="row">
                <div className="col-lg-10 offset-lg-2 col-md-11 ">
                  {this.state.width >= 550 ? (
                    <>
                      {/* Stepper */}

                      {/* to display content based on active step */}
                      <div>
                        <Typography className={classes.instructions}>{this.getStepContent(activeStep)}</Typography>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* enter email */}
                      <div className="mobileMargin">
                        <Typography className={classes.instructions}>{this.getStepContent(activeStep)}</Typography>
                      </div>
                      {/* Stepper */}
                      {this.state.rightFooterButtonName === "NEXT" ? (
                        <div
                          style={{
                            background: "#e8e0dd",
                            marginLeft: "-70px",
                            width: "116vw",
                            paddingTop: "4vh",
                            paddingBottom: "30vh",
                          }}
                        >
                          <div className="mobileStepHead" style={{background: "#e8e0dd"}}>
                            {" "}
                            WHAT HAPPENS NEXT ?
                          </div>
                          {/* stepper for mobile view  */}
                          <Stepper activeStep={activeStep} style={{background: "#e8e0dd"}} className="mobileStep" orientation={this.state.width >= 550 ? "horizontal" : "vertical"}>
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
                                    <span className="fontOswald">{label}</span>
                                  </StepLabel>
                                </Step>
                              );
                            })}
                          </Stepper>
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
              setUserData={this.setUserData}
              displayFooter={this.state.displayFooter}
              setDisplayFooter={this.setDisplayFooter}
            />
          </>
        ) : (
          // once all steps are completed Payement confirmation screen is displayed
          <PaymentConfirmation userData={this.state.userData} setUserData={this.setUserData} />
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
