import React from "react";
import "./Footer.css";
import Ripples from "react-ripples";
import { MakeChanges } from "../../Assets/MakechangesSVG";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // to display or hide footer
      displayFooter: props.displayFooter,
    };
  }

  scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  // update displayFooter state variable based on new props recived
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.displayFooter !== this.props.displayFooter) {
      this.setState({ displayFooter: this.props.displayFooter });
    }
  }

  // to handle left footer button
  handleClickLeft = () => {
    this.props.setButtonName("SAVE AND PROCEED");
    this.props.setrightFooterButtonDisabled(false);
  };

  // to handle right footer button changes
  handleClickRight = async () => {
    this.scrollToTop();
    let userData = this.props.userData;
    if (!this.props.rightFooterButtonDisabled) {
      if (this.props.rightFooterButtonName === "NEXT") {
        //call API to verify email (API CALL IN Home)
        this.props.apiVerifyEmail();
      } else if (this.props.rightFooterButtonName === "CONTINUE ") {
        // api call forgot password
        this.props.apiForgotPassword();
      } else if (this.props.rightFooterButtonName === "LOG IN") {
        //call API to Login (API CALL IN Home)
        this.props.apiLogin();
      } else if (this.props.rightFooterButtonName === "LOOKS GOOD") {
        // call API to Update screen id and move to next screen
        let data = {
          id: this.props.userData.id,
          screen: 1,
        };
        this.props.apiUpdateScreen(data, "PROCEED");
      } else if (this.props.rightFooterButtonName === "SAVE AND PROCEED") {
        //call API to update data (API CALL IN Home)
        this.props.apiUpdateUserData();
      } else if (this.props.rightFooterButtonName === "PROCEED") {
        this.props.setrightFooterButtonDisabled(true);
        if (await this.props.apiVerifyURL(this.props.userData.url)) {
          // call API to Update screen id and move to next screen
          let data = {
            id: this.props.userData.id,
            screen: 2,
            ssn: this.props.userData.ssn,
            url: this.props.userData.url,
            doing_business: this.props.userData.doing_business,
          };
          this.props.apiUpdateScreen(data, "");
        } else {
          this.props.setrightFooterButtonDisabled(true);
        }
      } else if (
        this.props.rightFooterButtonName === "CONTINUE" &&
        userData["indepedent_agreement"] &&
        userData["policy_procedures"]
      ) {
        // call API to Update screen id ,agreement accepted and move to next screen
        let data = {
          id: this.props.userData.id,
          screen: 3,
          indepedent_agreement: true,
          policy_procedures: true,
        };
        this.props.apiUpdateScreen(data, "DONE");
        // userData["indepedent_agreement"] = true;
        // userData["policy_procedures"] = true;
        // this.props.setUserData(userData);
        this.props.setrightFooterButtonDisabled(true);
      } else if (this.props.rightFooterButtonName === "DONE") {
        this.props.apiCreateConsultant();
      }
    }
  };

  render() {
    return this.state.displayFooter ? (
      <React.Fragment>
        <div className="blackBar">
          <div className="row h-100">
            {/* left button */}
            {this.props.rightFooterButtonName === "LOOKS GOOD" ? (
              <>
                <div
                  className="col-lg-4 col-md-4 col-sm-4 col-4 grey"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="leftTextButton">
                    <Ripples className="h-100">
                      <div
                        className="LeftTextButtonText"
                        onClick={this.handleClickLeft}
                      >
                        {window.innerWidth >= 550 ? null : <MakeChanges />}
                        {"  "}MAKE CHANGES
                      </div>
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
              window.innerWidth <= 550 &&
              this.props.rightFooterButtonName === "LOOKS GOOD"
            ) ? (
              <>
                {/* right button */}
                {this.props.rightFooterButtonName === "LOOKS GOOD" ? (
                  <div className="col-lg-4 col-md-1 col-sm-1 col-1"></div>
                ) : null}
                <div className="col-lg-4 col-md-4 col-sm-6">
                  {/* <div className="rightFooterButton"> */}
                  <div>
                    <Ripples>
                      <div
                        className={`rightFooterButton mx-auto ${
                          this.props.rightFooterButtonDisabled
                            ? "textButtonDisabled"
                            : "textButton"
                        }`}
                        onClick={this.handleClickRight}
                      >
                        {this.props.rightFooterButtonName}
                      </div>
                    </Ripples>
                  </div>
                </div>
                {/* </div> */}
              </>
            ) : (
              <div className="d-flex flex-row-reverse">
                <div className="rightFooterButton textButton mobileLeftMargin">
                  <Ripples>
                    <div onClick={this.handleClickRight}>
                      {this.props.rightFooterButtonName}
                    </div>
                  </Ripples>
                </div>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    ) : null;
  }
}

export default Footer;
