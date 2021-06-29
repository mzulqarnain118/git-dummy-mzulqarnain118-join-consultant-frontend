import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import { IoCheckmarkCircleSharp, IoAlertCircle } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Icon1, Icon2, Icon3, Icon4 } from "../Assets/PaymentConfirmationSVG";
import TouchRipple from "@material-ui/core/ButtonBase/TouchRipple";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "../Style/PaymentConfirmation.css";

// styles for material ui
const styles = (theme) => ({
  step: {
    fontColor: "black",
    "& $completed": {
      color: "#4BA380",
    },
    "& $active": {
      color: "#4BA380",
    },
  },

  alternativeLabel: {},
  active: {},
  completed: {},
  disabled: {},
});

// custom connector for stepper
const GreenStepConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 30px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#4BA380",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#4BA380",
    },
  },
  line: {
    borderColor: "#4BA380",
    borderTopWidth: 1,
    borderRadius: 1,
  },
})(StepConnector);

// stepper icon (complete and incomplete)
const disabledIcon = (props) => {
  const { active } = props;

  if (!active) {
    return (
      <IoCheckmarkCircleSharp
        style={{ color: "#4BA380", width: "2em", height: "2em" }}
      />
    );
  } else {
    return (
      <IoAlertCircle
        style={{ color: "#EF7070", width: "2em", height: "2em" }}
      />
    );
  }
};

class PaymentConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //width for mobile view
      width: 0,
      // receive propd for user data
      userData: props.userData,
      // active step for stepper (default value 4 since all steps are complete)
      activeStep: 4,
    };
  }

  //stepper title content
  getSteps = () => {
    return [
      "Confirm Details",
      "Business Details",
      "Verify Identity",
      "Purchase Kit",
      "DOCUMENTATION",
    ];
  };

  // width for mobile view
  componentDidMount = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    //const { userData } = this.state;
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep, rippleRef1, rippleRef2, rippleRef3, width } =
      this.state;
    return (
      <React.Fragment>
        <div style={{ background: "#E8E0DD", overflow: "hidden" }}>
          <div
            className={width >= 550 ? "PCcomponentMargin " : "mobileComponent"}
          >
            <div className="row">
              <div className="col-lg-5 offset-lg-3 col-md-12 col-xs-3">
                {/* header for mobile view  */}
                {width <= 550 ? (
                  <>
                    <ArrowBackIosIcon className="arrowIcon1" />
                    <span className="signOutStyle">
                      SIGNOUT <Icon4 />
                    </span>
                  </>
                ) : null}
                <div className="paymentConfirmationHead">
                  HEY, AUDREY!
                  {/* {userData.firstname} */}
                </div>
                <div className="paymentConfirmationSuccess">
                  Enrolment Successful!
                </div>
                <div className="col-lg-5 offset-lg-2 col-md-5 offset-md-2 mobileHead1">
                  <div className="customURLAssigned">
                    scoutandcellar.com/BetterWinesCorp
                  </div>
                </div>
                <div className=" paymentConfirmationHead2">
                  IS NOW RESERVED!
                </div>

                <hr style={{ background: "white", color: "white" }} />

                <div className="pcHead3">Consultant Number</div>
                <div className="col-lg-5 offset-lg-2 col-md-5 offset-md-2">
                  <div className="pcConsultantNumber">37548742</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pcHead4">
          COMPLETE ALL THE STEPS TO FINISH YOUR ENROLLMENT
        </div>
        <div className="col-lg-8 offset-lg-2 col-md-4 stepperMdMarginLeft">
          {/* Stepper */}
          <Stepper
            connector={<GreenStepConnector />}
            activeStep={activeStep}
            style={{
              background: "transparent",
              width: "75em",
              marginTop: "1em",
              marginBottom: "2em",
            }}
            orientation={width <= 1500 ? "vertical" : "horizontal"}
          >
            {steps.map((label, index) => {
              const props = {};
              const labelProps = {};

              return (
                <Step
                  key={label}
                  {...props}
                  classes={{
                    root: classes.step,
                    completed: classes.completed,
                    active: classes.active,
                  }}
                >
                  <StepLabel {...labelProps} StepIconComponent={disabledIcon}>
                    {label !== "DOCUMENTATION" ? (
                      <div className="fontOswald1">{label}</div>
                    ) : (
                      <>
                        <div className="fontOswald2">{label}</div>
                      </>
                    )}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
        {/* Footer  */}
        <div className="pcFooter">
          <div className="pcFooterHead">LET'S GET GOING</div>
          <div className="row pcFooterLeftMargin">
            {/* card 1 */}
            <div
              className="col-lg-3  pcFooterCard"
              onMouseDown={this.onRippleStart1}
              onMouseUp={this.onRippleStop1}
            >
              <TouchRipple ref={rippleRef1} center={false} />
              <div className="row">
                <div className="pcFooterMainIcon">
                  <Icon1 />
                </div>
                <div className="pcFooterText">
                  Access your consultant Account
                </div>
                <IoIosArrowForward className="pcFooterNextIcon" />
              </div>
            </div>

            {/* card 2 */}
            <div
              className="col-lg-3 pcFooterCard"
              onMouseDown={this.onRippleStart2}
              onMouseUp={this.onRippleStop2}
            >
              <TouchRipple ref={rippleRef2} center={false} />
              <div className="row">
                <div className="pcFooterMainIcon2">
                  <Icon2 />
                </div>
                <div className="pcFooterText1">
                  Download Vine App for Consultant
                </div>
                <IoIosArrowForward className="pcFooterNextIcon" />
              </div>
            </div>

            {/* card 3 */}
            <div
              className="col-lg-3 pcCardMarginLeft pcFooterCard"
              onMouseDown={this.onRippleStart3}
              onMouseUp={this.onRippleStop3}
            >
              <TouchRipple ref={rippleRef3} center={false} />
              <div className="row">
                <div className="pcFooterMainIcon">
                  <Icon3 />
                </div>
                <div className="pcFooterText2">Get Started Videos</div>
                <IoIosArrowForward className="pcFooterNextIcon" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

//  styles and prop type for material ui
PaymentConfirmation.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(PaymentConfirmation);