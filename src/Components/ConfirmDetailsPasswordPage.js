import React from "react";

class ConfirmDetailsPasswordPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // password for login
      password: "",
      //width for mobile view
      width: 0,
    };
  }

  // handle change to record password and validate
  handleChange = (e) => {
    let type = e.target.id;
    let value = e.target.value;
    let error = this.props.errorUserData.password;

    // password
    if (type === "password") {
      let regex = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}$");
      if (regex.test(value)) {
        error = "";
        this.props.setrightFooterButtonDisabled(false);
        let userData = this.props.userData;
        userData["password"] = value;
        this.props.setUserData(userData);
      } else {
        error = "Please enter valid password ";
        this.props.setrightFooterButtonDisabled(true);
      }
    }

    this.setState({ password: value });
    let errorUserData = this.props.errorUserData;
    errorUserData["password"] = error;
    this.props.setErrorUserData(errorUserData);
  };

  //width for mobile view
  componentDidMount = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { password } = this.state;
    const { errorUserData } = this.props;
    return (
      <React.Fragment>
        <div
          className={
            this.state.width >= 550 ? "componentMargin2 " : "mobileComponent"
          }
        >
          <span className="head2">Hey, there!</span>

          <div className="staticText1">
            Welcome {this.props.userData.first_name !== "" ? "back!" : null}
          </div>

          <div className="staticText2">
            We're excited to have you as a Consultant.
          </div>

          {/* input to accept Password  */}
          <div className="password1 form-group">
            <label className="passwordLabel" htmlFor="password">
              PASSWORD
            </label>
            <div className="InputMargin">
              <input
                style={{ width: "40%" }}
                type="password"
                autoComplete="off"
                value={password}
                className={
                  errorUserData.password.length > 0
                    ? "form-control Red"
                    : "form-control Input"
                }
                id="password"
                name="password"
                placeholder="Enter password"
                onChange={this.handleChange}
              />

              {/* error message incase for incorrect password */}
              {errorUserData.password.length > 0 ? (
                <span className="errorMes">
                  {errorUserData.password}
                  <br />
                </span>
              ) : null}
            </div>
            <span className="SubText">Forgot Your Password? &nbsp;</span>
            {/* link to forgot password */}
            <span className="passwordForgotLink">LET'S FIND IT</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ConfirmDetailsPasswordPage;
