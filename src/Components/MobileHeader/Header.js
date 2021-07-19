import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
require("typeface-oswald");

const styles = (theme) => ({
  step: {
    fontColor: "black",
    "& $completed": {
      color: "black",
    },
    "& $active": {
      color: "black",
    },
  },

  alternativeLabel: {},
  active: {},
  completed: {},
  disabled: {},
});

// this header is displayed only on mobile view
class Header extends React.Component {
  constructor(props) {
    super(props);
    //send background color
    document.body.style = "background: #F7F3F2";
    this.state = {
      //get current active step from props
      activeStep: props.step,
    };
  }

  // title for each step
  getSteps = () => {
    return [
      "CONFIRM DETAILS",
      "BUSINESS DETAILS",
      "VERIFY IDENTITY",
      "PURCHASE KIT",
    ];
  };

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <div className="mobileHead"></div>
        {/* arrow icon (back button) */}
        <ArrowBackIosIcon className="arrowIcon" />
        <div className="mobileStepperOveflow">
          {!this.props.agreement ? (
            // stepper
            <Stepper
              activeStep={activeStep}
              style={{ background: "#E8E0DD" }}
              orientation="horizontal"
              className="mobileHead"
            >
              {steps.map((label, index) => {
                const props = {};
                const labelProps = {};
                if (index < activeStep) {
                  return null;
                }
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
                      <div className="fontOswald1">{label}</div>
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          ) : (
            // to be displayed on agreement screen (Mobile view only)
            <div className="AgreementHeader">Almost there - Sign paperwork</div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Header);
