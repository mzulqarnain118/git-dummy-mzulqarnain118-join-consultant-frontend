import React from "react";
import "../Style/Footer.css";
import Ripples from "react-ripples";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //user data
      userData: {},
      //to adjust to mobile width
      width: 0,
      // to display or hide footer
      displayFooter: props.displayFooter,
    };
  }

  // update displayFooter state variable based on new props recived
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.displayFooter !== this.props.displayFooter) {
      this.setState({ displayFooter: this.props.displayFooter });
    }
  }

  // to handle left footer button
  handleClickLeft = () => {
    this.props.setUserData("SAVE AND PROCEED", this.state.userData, false);
  };

  // to handle right footer button changes
  handleClickRight = async () => {
    if (!this.props.rightFooterButtonDisabled) {
      if (this.props.rightFooterButtonName === "NEXT") {
        //call API to verify email
        this.props.apiVerifyEmail();
      } else if (this.props.rightFooterButtonName === "LOG IN") {
        this.props.setUserData(this.state.userData);
        // this.props.setButtonName("LOOKS GOOD");
        this.props.setrightFooterButtonDisabled(false);
        //call API to Login
        this.props.apiLogin();
      } else if (this.props.rightFooterButtonName === "LOOKS GOOD") {
        this.props.setUserData(this.state.userData);
        this.props.setButtonName("PROCEED");
        this.props.setrightFooterButtonDisabled(true);
        this.props.moveToNextScreen();
      } else if (this.props.rightFooterButtonName === "SAVE AND PROCEED") {
        this.props.setUserData(this.state.userData);
        this.props.setButtonName("LOOKS GOOD");
        this.props.setrightFooterButtonDisabled(false);
      } else if (this.props.rightFooterButtonName === "PROCEED") {
        this.props.moveToNextScreen();
      } else if (this.props.rightFooterButtonName === "CONTINUE") {
        this.props.moveToNextScreen();
        this.props.setUserData(this.state.userData);
        this.props.setButtonName("DONE");
        this.props.setrightFooterButtonDisabled(true);
      } else if (this.props.rightFooterButtonName === "DONE") {
        this.props.moveToNextScreen();
        this.props.setDisplayFooter(false);
      }
    }
  };

  // to handle width for mobile view
  componentDidMount = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    return this.state.displayFooter ? (
      <React.Fragment>
        <div className="blackBar">
          <div className="row h-100">
            {/* left button */}
            {this.props.rightFooterButtonName === "LOOKS GOOD" ? (
              <>
                {/* <div className="col-lg-2 col-md-2 grey "></div> */}
                <div className=" col-lg-4 col-md-4 col-sm-4 col-4 grey ">
                  <div className="leftTextButton">
                    <Ripples className="h-100">
                      <div onClick={this.handleClickLeft}>MAKE CHANGES</div>
                    </Ripples>
                  </div>
                </div>
              </>
            ) : (
              // <div className={this.props.rightFooterButtonName === "SAVE AND PROCEED" ? "col-lg-8 col-md-4 mobileSaveAndProceed" : "col-lg-8 col-md-5 "}></div>
              <div
                className={
                  this.props.rightFooterButtonName === "SAVE AND PROCEED"
                    ? "col-lg-8 col-md-4 mobileSaveAndProceed"
                    : "col-lg-8 col-md-8 col-sm-3"
                }
              ></div>
            )}

            {!(
              this.state.width <= 550 &&
              this.props.rightFooterButtonName === "LOOKS GOOD"
            ) ? (
              <>
                {/* right button */}
                {this.props.rightFooterButtonName === "LOOKS GOOD" ? (
                  <div className="col-lg-4 col-md-1 col-sm-1 col-1"></div>
                ) : null}
                {this.props.rightFooterButtonName === "LOOKS GOOD" ? "" : null}
                <div
                  className={
                    this.props.rightFooterButtonDisabled
                      ? this.props.rightFooterButtonName === "SAVE AND PROCEED"
                        ? "col-lg-2 col-md-4 textButtonDisabled mobileSaveMargin"
                        : // : "col-lg-4 col-md-4 textButtonDisabled "
                          // : "col-lg-8 col-md-8 textButtonDisabled "
                          "col-lg-4 col-md-4 col-sm-7 textButtonDisabled "
                      : this.props.rightFooterButtonName === "SAVE AND PROCEED"
                      ? "col-lg-2 col-md-4  textButton mobileSaveMargin"
                      : // : "col-lg-4 col-md-4 textButton "
                        // : "col-lg-8 col-md-8 textButton "
                        "col-lg-4 col-md-4 col-sm-7 col-7 textButton "
                  }
                >
                  <Ripples>
                    <div onClick={this.handleClickRight}>
                      {this.props.rightFooterButtonName}
                    </div>
                  </Ripples>
                </div>
              </>
            ) : (
              <div className="textButton mobileLeftMargin">
                <Ripples>
                  <div onClick={this.handleClickRight}>
                    {this.props.rightFooterButtonName}
                  </div>
                </Ripples>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    ) : null;
  }
}

export default Footer;
