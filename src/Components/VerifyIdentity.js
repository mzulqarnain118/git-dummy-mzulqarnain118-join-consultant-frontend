import React from "react";
import Header from "./Header";
import Agreement from "./Agreement";
import "../Style/VerifyIdentity.css";

class VerifyIdentity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      otp: {
        otp1: "",
        otp2: "",
        otp3: "",
        otp4: "",
      },
      error: {
        otp1: true,
        otp2: true,
        otp3: true,
        otp4: true,
      },
      timer: {
        minute: "03",
        second: "00",
      },
      timerId: 0,
      timeOut: true,
      userEmail: props.userData.email,
      resendEmail: false,
      agreementScreen: false,
    };
  }

  checkOTP = () => {
    let otp = this.state.otp;
    if ("" + otp["otp1"] + otp["otp2"] + otp["otp3"] + otp["otp4"] === "8888") {
      this.setState({ agreementScreen: true });
      this.props.setDisplayFooter(true);
      this.props.setUserData("CONTINUE", this.props.userData, true);
    }
  };

  maskEmail = (email) => {
    let id = email.substring(0, email.indexOf("@"));
    return (
      id.substr(0, 2) +
      "XXXX" +
      id.substr(id.length - 2, 2) +
      email.substr(email.indexOf("@"))
    );
  };

  resendCode = () => {
    let timer = this.state.timer;
    timer["second"] = "00";
    timer["minute"] = "03";
    let otp = this.state.otp;
    otp["otp1"] = "";
    otp["otp2"] = "";
    otp["otp3"] = "";
    otp["otp4"] = "";
    this.setState({ timeOut: true, timer, otp, resendEmail: true });
    this.runTimer();
  };

  runTimer = () => {
    const timerId = setInterval(() => {
      let timer = this.state.timer;
      if (timer["second"] === "00") {
        timer["second"] = 60;
        timer["minute"] = "0" + (timer["minute"] - 1);
      }
      timer["second"] = timer["second"] - 1;
      if (timer["second"] < 10) {
        timer["second"] = "0" + timer["second"];
      }
      if (timer["minute"] === "00" && timer["second"] === "00") {
        clearInterval(this.state.timerId);
        this.setState({ timeOut: false });
      }
      this.setState({ timer });
    }, 1000);
    this.setState({ timerId });
  };

  handleChange = (e) => {
    let type = e.target.id;
    let value = e.target.value;
    let otp = this.state.otp;
    let error = this.state.error;
    let regex = new RegExp("^\\d+$");

    if (value !== "") {
      error[type] = false;
      if (!regex.test(value)) {
        value = "";
      } else if (type !== "otp4") {
        document
          .querySelector(`input[name=otp${parseInt(type.slice(3, 4)) + 1}]`)
          .focus();
      }
    } else {
      error[type] = true;
    }

    otp[type] = value.slice(-1);

    this.setState({ otp, error });
    this.checkOTP();
  };

  componentDidMount = () => {
    this.setState({ width: window.innerWidth });
    this.props.setDisplayFooter(false);
    this.runTimer();
  };

  render() {
    const { otp, timer } = this.state;
    return (
      <React.Fragment>
        {!this.state.agreementScreen ? (
          <>
            {this.state.width <= 550 ? <Header step={2} agreement={false} /> : null}
            <div
              className={
                this.state.width >= 550 ? "componentMargin " : "mobileComponent"
              }
            >
              <span className="head1">VERIFY YOUR EMAIL</span>
              <div className="staticText3">
                Please provide below, the 4-digit one-time pass code sent to the
                email ID on your account.
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-8 offset-md-1 verifyDivOffset">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="otpContainer">
                        <div className="row">
                          <input
                            type="text"
                            value={otp.otp1}
                            className={
                              otp.otp1.length === 1
                                ? "form-control otpInput1"
                                : "form-control otpInput"
                            }
                            id="otp1"
                            name="otp1"
                            autoComplete="off"
                            onChange={this.handleChange}
                          />
                          <input
                            type="text"
                            value={otp.otp2}
                            className={
                              otp.otp2.length === 1
                                ? "form-control otpInput1 otpLeftMargin"
                                : "form-control otpInput otpLeftMargin"
                            }
                            id="otp2"
                            name="otp2"
                            autoComplete="off"
                            onChange={this.handleChange}
                          />
                          <input
                            type="text"
                            value={otp.otp3}
                            className={
                              otp.otp3.length === 1
                                ? "form-control otpInput1 otpLeftMargin"
                                : "form-control otpInput otpLeftMargin"
                            }
                            id="otp3"
                            name="otp3"
                            autoComplete="off"
                            onChange={this.handleChange}
                          />
                          <input
                            type="text"
                            value={otp.otp4}
                            className={
                              otp.otp4.length === 1
                                ? "form-control otpInput1 otpLeftMargin"
                                : "form-control otpInput otpLeftMargin"
                            }
                            id="otp4"
                            name="otp4"
                            autoComplete="off"
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {this.state.resendEmail ? (
                    <div className="resendTextArea">
                      Code sent again to <br />
                      <b>{this.maskEmail(this.state.userEmail)}</b>
                    </div>
                  ) : null}
                  <div className="row">
                    {this.state.timeOut ? (
                      <div className="otpSubText">
                        If you haven’t received the code, you may request it in
                      </div>
                    ) : (
                      <div className="otpSubText">
                        If you haven’t received the code, you may request it
                        now.
                      </div>
                    )}
                  </div>
                  <div className="row">
                    <div className="col-lg-5 ">
                      {this.state.timeOut ? (
                        <div className="timer">
                          {timer.minute} : {timer.second}
                        </div>
                      ) : (
                        <div className="resendEmail" onClick={this.resendCode}>
                          RESEND CODE
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Agreement
            userData={this.props.userData}
            setrightFooterButtonDisabled={
              this.props.setrightFooterButtonDisabled
            }
          />
        )}
      </React.Fragment>
    );
  }
}

export default VerifyIdentity;
