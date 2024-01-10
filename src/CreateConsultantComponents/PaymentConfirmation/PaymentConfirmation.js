import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import StepConnector from "@mui/material/StepConnector";
import { IoCheckmarkCircleSharp, IoAlertCircle } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Icon1, Icon2, Icon3, Icon4 } from "../../Assets/PaymentConfirmationSVG";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./PaymentConfirmation.css";
import appStore1 from "../../Assets/images/appStore1.png";
import playStore1 from "../../Assets/images/playStore1.png";
import JoinTheCellar from "../../Assets/images/Join-TheCellar.jpg";
import JoinTheSpeakeasy from "../../Assets/images/Join-TheSpeakeasy.jpg";
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
    borderColor: "#EF7070",
    borderTopWidth: 1,
    borderRadius: 1,
  },
})(StepConnector);

// stepper icon (complete and incomplete)
const disabledIcon = (props) => {
  const { completed } = props;

  if (completed) {
    return (
      <IoCheckmarkCircleSharp
        style={{
          color: "#4BA380",
          width: "2em",
          height: "2em",
          marginLeft: "-3px",
        }}
      />
    );
  } else {
    return (
      <IoAlertCircle
        style={{
          color: "#EF7070",
          width: "2em",
          height: "2em",
          marginLeft: "-3px",
        }}
      />
    );
  }
};

class PaymentConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // receive propd for user data
      userData: props.userData,
      // active step for stepper (default value 4 since all steps are complete)
      activeStep: props.confirmation ? 4 : 3,
    };
  }

  //stepper title content
  getSteps = () => {
    if (this.props.userData.doing_business === "Entity") {
      return ["Confirm Details", "Business Details", "Review Terms", "Purchase Kit", "Documentation"];
    } else {
      return ["Confirm Details", "Business Details", "Review Terms", "Purchase Kit"];
    }
  };

  render() {
    //const { userData } = this.state;
    const { classes, userData, confirmation, consultant_number } = this.props;
    const steps = this.getSteps();
    const { activeStep, rippleRef1, rippleRef2, rippleRef3 } = this.state;
    return (
      <React.Fragment>
        <div style={{ background: "white", overflow: "hidden" }}>
          <div
            className={
              window.innerWidth >= 550
                ? "PCcomponentMargin "
                : "PCmobileComponent"
            }
          >
            <div style={{ marginLeft: "auto", marginRight: "auto" }}>
              {/* header for mobile view  */}
              {window.innerWidth <= 550 ? (
                <>
                  {/* <ArrowBackIosIcon
                    className="arrowIcon1"
                    onClick={() => {
                      this.props.moveBackToLastScreen(3, "DONE");
                    }}
                  /> */}
                  {/* <span
                    className="signOutStyle"
                    onClick={() => {
                      this.props.moveBackToLastScreen(0, "NEXT");
                    }}
                  >
                    SIGN OUT <Icon4 />
                  </span> */}
                </>
              ) : null}
              <div className="paymentConfirmationHead">
                WELCOME TO SCOUT & CELLAR, {userData.first_name.toUpperCase()}!
              </div>
              {confirmation ? (
                <>
                  <div className="paymentConfirmationSuccess">
                    Below, you'll find your business details. We’ll be sending
                    them to you via email as well.
                  </div>

                  <div className="pcInfo">
                    <div className="pcInfoItem">
                      <h4 className="pcHead3">
                        YOUR INDEPENDENT CONSULTANT ID
                      </h4>
                      <div className="pcConsultantNumber1">
                        {consultant_number}
                      </div>
                    </div>

                    <div className="pcInfoItem">
                      <h4 className="pcHead3">
                        YOUR SCOUT & CELLAR EMAIL ADDRESS
                      </h4>
                      <div className="pcConsultantNumber1">
                        {userData.email}
                      </div>
                    </div>

                    <div className="pcInfoItem">
                      <h4 className="pcHead3">
                        YOUR SCOUT & CELLAR CUSTOM URL
                      </h4>
                      <div className="pcConsultantNumber1">
                        scoutandcellar.com/{userData.url}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="paymentConfirmationFaliure">
                    {this.props.consultant_error === "Invalid postal code."
                      ? "Looks like the postal code that you entered does not match your city/state."
                      : this.props.consultant_error ===
                        "The website name is already taken."
                      ? "Looks like the website name is already taken."
                      : "Your payment could not be processed."}
                  </div>
                  <h6 className="payment-confirmation-error-message">
                    {this.props.consultant_error === "Invalid postal code."
                      ? "Click on Make Changes to proceed."
                      : this.props.consultant_error ===
                        "The website name is already taken."
                      ? "Please click on Setup Store to change the URL."
                      : "Please verify your billing information and try again."}
                  </h6>
                </>
              )}
            </div>
          </div>
          {!confirmation ? (
            <>
              <div
                className="retryPaymentButton"
                onClick={() => {
                  this.props.consultant_error === "Invalid postal code."
                    ? this.props.moveBackToLastScreen(0, "SAVE AND PROCEED")
                    : this.props.consultant_error ===
                      "The website name is already taken."
                    ? this.props.moveBackToLastScreen(1, "PROCEED")
                    : this.props.moveBackToLastScreen(3, "DONE");
                }}
              >
                {this.props.consultant_error === "Invalid postal code."
                  ? "MAKE CHANGES"
                  : this.props.consultant_error ===
                    "The website name is already taken."
                  ? "SETUP STORE"
                  : "RETRY PAYMENT"}
              </div>
            </>
          ) : null}
        </div>
        {/* Footer  */}
        {confirmation ? (
          <div className="pcFooter">
            <div className="pcFooterHead">LET'S GET GOING</div>
            <div className="pcFooterBody">
              <a
                href="https://join.scoutandcellar.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={JoinTheCellar}
                  className="pcFooterImg"
                  alt="Join Scout and Cellar"
                />
              </a>
              <a
                href="https://thespeakeasy.scoutandcellar.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={JoinTheSpeakeasy}
                  className="pcFooterImg"
                  alt="Join The Speak Easy Scout and Cellar"
                />
              </a>
            </div>
          </div>
        ) : // </div>
        null}
      </React.Fragment>
    );
  }
}

//  styles and prop type for material ui
PaymentConfirmation.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(PaymentConfirmation);
