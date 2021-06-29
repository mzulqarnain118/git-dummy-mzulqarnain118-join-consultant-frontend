import React from "react";
import "../Style/ConfirmDetails.css";
import ConfirmDetailsPasswordPage from "./ConfirmDetailsPasswordPage";
import ConfirmDetailsDisplay from "./ConfirmDetailsDisplay";
import ConfirmDetailsEdit from "./ConfirmDetailsEdit";

class ConfirmDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //to get user email address
      form: {
        emailAddress: "",
      },
      error: {
        emailAddress: "",
      },
      //to adjust view for mobile
      width: 0,
    };
  }

  // to handle change in email input and validate email
  handleChange = (e) => {
    let type = e.target.id;
    let value = e.target.value;
    let form = this.state.form;
    let error = this.state.error;

    // email
    if (type === "emailAddress") {
      let regex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

      if (regex.test(value)) {
        error[type] = "";
        this.props.setrightFooterButtonDisabled(false);
      } else {
        error[type] = "Please enter valid email address";
        this.props.setrightFooterButtonDisabled(true);
      }
    }

    form[type] = value;
    this.setState({ form: form, error: error });
  };

  // set width for mobile view
  componentDidMount = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { form, error } = this.state;
    const { rightFooterButtonName, userData } = this.props;
    return (
      <React.Fragment>
        {rightFooterButtonName === "NEXT" ? (
          <div
            className={
              this.state.width >= 550 ? "componentMargin1 " : "mobileComponent"
            }
          >
            <span className="head1">BECOME A CONSULTANT</span>
            <div className="email1 form-group">
              <label className="emailLabel" htmlFor="emailAddress">
                EMAIL ADDRESS
              </label>
              {/* input to accept email address */}
              <div className="InputMargin">
                <input
                  style={{ width: "40%" }}
                  type="text"
                  value={form["emailAddress"]}
                  className={
                    error.emailAddress.length > 0
                      ? "form-control Red"
                      : "form-control Input"
                  }
                  id="emailAddress"
                  name="emailAddress"
                  placeholder="Enter email address"
                  autoComplete="off"
                  onChange={this.handleChange}
                />
                {/* error handling of email field */}
                {error.emailAddress.length > 0 ? (
                  <span className="errorMes">
                    {error.emailAddress}
                    <br />
                  </span>
                ) : null}
              </div>
              {/* Static text dispayed at the bottom of email field */}
              <div className="SubText">
                The email you already use or want to use with Scout &amp;
                cellar.
              </div>
            </div>
          </div>
        ) : rightFooterButtonName === "LOG IN" ? (
          // to display the password page of cnfirm details
          <ConfirmDetailsPasswordPage
            userData={userData}
            setrightFooterButtonDisabled={
              this.props.setrightFooterButtonDisabled
            }
          />
        ) : rightFooterButtonName === "LOOKS GOOD" ? (
          //to display confirm details page
          <ConfirmDetailsDisplay
            userData={userData}
            setrightFooterButtonDisabled={
              this.props.setrightFooterButtonDisabled
            }
          />
        ) : (
          //to display editable version  of confirm details page
          <ConfirmDetailsEdit
            userData={userData}
            setrightFooterButtonDisabled={
              this.props.setrightFooterButtonDisabled
            }
            setUserData={this.props.setUserData}
          />
        )}
      </React.Fragment>
    );
  }
}

export default ConfirmDetails;