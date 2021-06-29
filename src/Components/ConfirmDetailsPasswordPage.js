import React from "react";

class ConfirmDetailsPasswordPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // password for login
      password: "",
      errorMes: "",
      //width for mobile view
      width: 0,
    };
  }

  // handle change to record password and validate
  handleChange = (e) => {
    let type = e.target.id;
    let value = e.target.value;
    let error = this.state.errorMes;

    // password
    if (type === "password") {
      let regex = new RegExp("^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$");

      if (regex.test(value)) {
        error = "";
        this.props.setrightFooterButtonDisabled(false);
      } else {
        error = "Please enter valid password ";
        this.props.setrightFooterButtonDisabled(true);
      }
      //letting regex pass though for demo
      error = "";
      this.props.setrightFooterButtonDisabled(false);
    }

    this.setState({password: value, errorMes: error});
  };

  //width for mobile view
  componentDidMount = () => {
    this.setState({width: window.innerWidth});
  };

  render() {
    const {password, errorMes} = this.state;
    const {userData} = this.props;
    return (
      <React.Fragment>
        <div className={this.state.width >= 550 ? "componentMargin2 " : "mobileComponent"}>
          <span className="head2">Hey, {userData.firstname.toUpperCase()}!</span>

          <div className="staticText1">Welcome back!</div>

          <div className="staticText2">We're excited to have you as a Consultant.</div>

          {/* input to accept Password  */}
          <div className="password1 form-group">
            <label className="passwordLabel" htmlFor="password">
              PASSWORD
            </label>
            <div className="InputMargin">
              <input
                style={{width: "40%"}}
                type="password"
                autoComplete="off"
                value={password}
                className={errorMes.length > 0 ? "form-control Red" : "form-control Input"}
                id="password"
                name="password"
                placeholder="Enter password"
                onChange={this.handleChange}
              />

              {/* error message incase for incorrect password */}
              {errorMes.length > 0 ? (
                <span className="errorMes">
                  {errorMes}
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