import React from "react";
import moment from "moment";
import Header from "./Header";

class ConfirmDetailsEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // width used for mobile view
      width: 0,
      //fetch user details from from props
      userData: props.userData,
      //used to record error message
      error: {
        email: "",
        firstname: "",
        lastname: "",
        cellno: "",
        workingwith: "",
        dob: "",
        address: {
          street: "",
          zipcode: "",
          city: "",
          state: "",
        },
      },
      // used to validate and enable button to move to next screen
      errorArr: [true, true, true, true, true, true, true, true, true],
    };
  }

  // used to handle change in case of change input
  handleChange = (e) => {
    let type = e.target.id;
    let value = e.target.value;
    let form = this.state.userData;
    let error = this.state.error;
    let errorArr = this.state.errorArr;

    // firstname
    if (type === "firstname") {
      if (value !== "") {
        error[type] = "";
        errorArr[0] = true;
      } else {
        error[type] = "First Name is mandatory";
        errorArr[0] = false;
      }
      form[type] = value;
    }

    // lastname
    if (type === "lastname") {
      if (value !== "") {
        error[type] = "";
        errorArr[1] = true;
      } else {
        error[type] = "Last Name is mandatory";
        errorArr[1] = false;
      }
      form[type] = value;
    }

    // address street
    if (type === "street") {
      if (value !== "") {
        error["address"][type] = "";
        errorArr[2] = true;
      } else {
        error["address"][type] = "Street is mandatory";
        errorArr[2] = false;
      }
      form["address"][type] = value;
    }

    // address zipcode
    if (type === "zipcode") {
      if (value !== "") {
        error["address"][type] = "";
        errorArr[3] = true;
      } else {
        error["address"][type] = "Zip is mandatory";
        errorArr[3] = false;
      }
      form["address"][type] = value;
    }

    // address city
    if (type === "city") {
      if (value !== "") {
        error["address"][type] = "";
        errorArr[4] = true;
      } else {
        error["address"][type] = "City is mandatory";
        errorArr[4] = false;
      }
      form["address"][type] = value;
    }

    // address state
    if (type === "state") {
      if (value !== "") {
        error["address"][type] = "";
        errorArr[5] = true;
      } else {
        error["address"][type] = "State is mandatory";
        errorArr[5] = false;
      }
      form["address"][type] = value;
    }

    // cellno
    if (type === "cellno") {
      if (value !== "") {
        error[type] = "";
        if (value.length === 10) {
          errorArr[6] = true;
        } else {
          error[type] = "Invalid Cell Number";
          errorArr[6] = false;
        }
      } else {
        error[type] = "Cell Number is mandatory";
        errorArr[6] = false;
      }

      form[type] = value;
    }

    // workingwith
    if (type === "workingwith") {
      if (value !== "") {
        error[type] = "";
        errorArr[7] = true;
      } else {
        error[type] = "Working With is mandatory";
        errorArr[7] = false;
      }

      form[type] = value;
    }

    // email id
    if (type === "email") {
      if (value !== "") {
        let regex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

        if (regex.test(value)) {
          error[type] = "";
          errorArr[8] = true;
        } else {
          error[type] = "Invalid Email ID";
          errorArr[8] = false;
        }
      } else {
        error[type] = "Email ID is mandatory";
        errorArr[8] = false;
      }
      form[type] = value;
    }

    // enable /disable button to move to next screen
    this.props.setrightFooterButtonDisabled(
      !(
        errorArr[0] &&
        errorArr[1] &&
        errorArr[2] &&
        errorArr[3] &&
        errorArr[4] &&
        errorArr[5] &&
        errorArr[6] &&
        errorArr[7] &&
        errorArr[8]
      )
    );
    this.setState({ userData: form, error: error, errorArr: errorArr });
  };

  // to handle change in date
  handleDate = (e) => {
    let type = e.target.id;
    let value = e.target.value;
    let userData = this.state.userData;
    let dob = userData.dob;
    let error = this.state.error;

    dob[type] = value;
    let date1 = new Date();
    let date2 = new Date(dob.year);
    let yearsDiff = date1.getFullYear() - date2.getFullYear();
    // avaoid users below 19 years
    if (yearsDiff <= 19) {
      error["dob"] = "you have to be older than 19 years";
      this.props.setrightFooterButtonDisabled(true);
    } else {
      error["dob"] = "";
      this.props.setrightFooterButtonDisabled(false);
    }

    this.setState({ userData: userData });
  };

  // change footer button name when component is removed
  componentWillUnmount = () => {
    this.props.setUserData("LOOKS GOOD", this.state.userData);
  };

  // set width for mobile view
  componentDidMount = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { userData, error } = this.state;
    return (
      <React.Fragment>
        {/* display header for mobile view */}
        {this.state.width <= 550 ? <Header step={0} agreement={false} /> : null}
        <div
          className={
            this.state.width >= 550 ? "componentMargin4 " : "mobileComponent"
          }
        >
          {/* static text to be displayed */}
          <span className="head1">
            GOOD MOVE, {userData.firstname.toUpperCase()}!
          </span>
          <div className="staticText3">
            We love it when our customers become consultants. We have most of
            your details on file.
          </div>
          <div className="staticText4">
            Take a quick look over and we'll move forward.
          </div>
          {/* edit name and date of birth */}
          <div className="row edit-margin">
            <div className="col-lg-2 ">
              <div className="form-group">
                <span className="head3" htmlFor="firstname">
                  FIRST NAME
                </span>
                <div className="edit-InputMargin">
                  <input
                    type="text"
                    autoComplete="off"
                    value={userData["firstname"]}
                    className={
                      error.firstname.length > 0
                        ? "form-control edit-Red"
                        : "form-control edit-Input"
                    }
                    id="firstname"
                    name="firstname"
                    placeholder="Enter first name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {error.firstname.length > 0 ? (
                <>
                  <div className="errorMes">{error.firstname}</div>
                  <br />
                </>
              ) : null}
            </div>

            {/* Last name  */}
            <div className="col-lg-2 offset-lg-1">
              <div className="form-group">
                <span className="head3" htmlFor="lastname">
                  LAST NAME
                </span>
                <div className="edit-InputMargin">
                  <input
                    type="text"
                    autoComplete="off"
                    value={userData["lastname"]}
                    className={
                      error.lastname.length > 0
                        ? "form-control edit-Red"
                        : "form-control edit-Input"
                    }
                    id="lastname"
                    name="lastname"
                    placeholder="Enter last name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {error.lastname.length > 0 ? (
                <>
                  <div className="errorMes">{error.lastname}</div>
                  <br />
                </>
              ) : null}
            </div>
            {/* date of bith  */}
            <div className="col-lg-4 offset-lg-1">
              <span className="head3">DATE OF BIRTH</span>

              <div className="row">
                <div className="col-lg-1 col-md-2 mobileDate">
                  <div className="form-group">
                    <div className="edit-InputMargin">
                      <select
                        className={
                          error.dob.length > 0
                            ? "form-control edit-month-red"
                            : "form-control edit-month"
                        }
                        value={this.state.userData.dob.month}
                        id="month"
                        name="month"
                        onChange={this.handleDate}
                      >
                        {moment.monthsShort().map((month, index) => (
                          <option value={index} key={index}>
                            {month}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 offset-lg-2 col-md-2 mobileDate">
                  <div className="form-group">
                    <div className="edit-InputMargin">
                      <select
                        className={
                          error.dob.length > 0
                            ? "form-control edit-day-red"
                            : "form-control edit-day"
                        }
                        value={this.state.userData.dob.day}
                        id="day"
                        name="day"
                        onChange={this.handleDate}
                      >
                        {(() => {
                          const options = [];
                          for (
                            let i = 1;
                            i <=
                            [
                              31,
                              (this.state.userData.dob.year % 4 === 0 &&
                                this.state.userData.dob.year % 100 !== 0) ||
                              this.state.userData.dob.year % 400 === 0
                                ? 29
                                : 28,
                              31,
                              30,
                              31,
                              30,
                              31,
                              31,
                              30,
                              31,
                              30,
                              31,
                            ][this.state.userData.dob.month];
                            i++
                          ) {
                            options.push(<option value={i}>{i}</option>);
                          }
                          return options;
                        })()}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 offset-lg-21col-md-2 mobileDate">
                  <div className="form-group">
                    <div className="edit-InputMargin">
                      <select
                        className={
                          error.dob.length > 0
                            ? "form-control edit-year-red"
                            : "form-control edit-year"
                        }
                        value={this.state.userData.dob.year}
                        id="year"
                        name="year"
                        onChange={this.handleDate}
                      >
                        {(() => {
                          const options = [];
                          for (let i = 1970; i <= 2021; i++) {
                            options.push(<option value={i}>{i}</option>);
                          }
                          return options;
                        })()}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {error.dob.length > 0 ? (
                <>
                  <div className="errorMes">{error.dob}</div>
                  <br />
                </>
              ) : null}
            </div>
          </div>
          {/* Email id */}
          <div className="row">
            <div className="col-lg-2 ">
              <div className="form-group">
                <span className="head3" htmlFor="email">
                  EMAIL ID
                </span>
                <div className="edit-InputMargin">
                  <input
                    type="text"
                    autoComplete="off"
                    value={userData["email"]}
                    className={
                      error.email.length > 0
                        ? "form-control edit-Red"
                        : "form-control edit-Input"
                    }
                    id="email"
                    name="email"
                    placeholder="Enter Email ID"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {error.email.length > 0 ? (
                <>
                  <div className="errorMes">{error.email}</div>
                  <br />
                </>
              ) : null}
            </div>
          </div>

          <div className="staticText5">SHIPPING ADDRESS</div>
          {/* edit address */}
          <div className="row edit-margin">
            <div className="col-lg-2 ">
              <div className="form-group">
                <span className="head3" htmlFor="street">
                  STREET
                </span>
                <div className="edit-InputMargin">
                  <input
                    type="text"
                    autoComplete="off"
                    value={userData["address"]["street"]}
                    className={
                      error.address.street.length > 0
                        ? "form-control edit-Red"
                        : "form-control edit-Input"
                    }
                    id="street"
                    name="street"
                    placeholder="Enter street"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {error.address.street.length > 0 ? (
                <>
                  <div className="errorMes">{error.address.street}</div>
                  <br />
                </>
              ) : null}
            </div>

            {/* Zipcode */}
            <div className="col-lg-2 offset-lg-1">
              <div className="form-group">
                <span className="head3" htmlFor="zipcode">
                  ZIPCODE
                </span>
                <div className="edit-InputMargin">
                  <input
                    type="number"
                    autoComplete="off"
                    value={userData["address"]["zipcode"]}
                    className={
                      error.address.zipcode.length > 0
                        ? "form-control edit-Red"
                        : "form-control edit-Input"
                    }
                    id="zipcode"
                    name="zipcode"
                    placeholder="Enter zipcode"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              {error.address.zipcode.length > 0 ? (
                <>
                  <div className="errorMes">{error.address.zipcode}</div>
                  <br />
                </>
              ) : null}
            </div>

            {/* city */}
            <div className="col-lg-2 offset-lg-1">
              <div className="form-group">
                <span className="head3" htmlFor="city">
                  CITY
                </span>
                <div className="edit-InputMargin">
                  <input
                    type="text"
                    autoComplete="off"
                    value={userData["address"]["city"]}
                    className={
                      error.address.city.length > 0
                        ? "form-control edit-Red"
                        : "form-control edit-Input"
                    }
                    id="city"
                    name="city"
                    placeholder="Enter city"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {error.address.city.length > 0 ? (
                <>
                  <div className="errorMes">{error.address.city}</div>
                  <br />
                </>
              ) : null}
            </div>
          </div>
          {/* address second row */}
          {/* state */}
          <div className="row edit-margin bottomMargin">
            <div className="col-lg-2 ">
              <div className="form-group">
                <span className="head3" htmlFor="state">
                  STATE
                </span>
                <div className="edit-InputMargin">
                  <input
                    type="text"
                    autoComplete="off"
                    value={userData["address"]["state"]}
                    className={
                      error.address.state.length > 0
                        ? "form-control edit-Red"
                        : "form-control edit-Input"
                    }
                    id="state"
                    name="state"
                    placeholder="Enter state"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {error.address.state.length > 0 ? (
                <>
                  <div className="errorMes">{error.address.state}</div>
                  <br />
                </>
              ) : null}
            </div>

            {/* cell number */}
            <div className="col-lg-2 offset-lg-1">
              <div className="form-group">
                <span className="head3" htmlFor="cellno">
                  CELL NUMBER
                </span>
                <div className="edit-InputMargin">
                  <input
                    type="text"
                    autoComplete="off"
                    value={userData["cellno"]}
                    className={
                      error.cellno.length > 0
                        ? "form-control edit-Red"
                        : "form-control edit-Input"
                    }
                    id="cellno"
                    name="cellno"
                    placeholder="Enter cell number"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {error.cellno.length > 0 ? (
                <>
                  <div className="errorMes">{error.cellno}</div>
                  <br />
                </>
              ) : null}
            </div>

            {/* working with */}
            <div className="col-lg-2 offset-lg-1">
              <div className="form-group">
                <span className="head3" htmlFor="workingwith">
                  WORKING WITH
                </span>
                <div className="edit-InputMargin">
                  <input
                    type="text"
                    autoComplete="off"
                    value={userData["workingwith"]}
                    className={
                      error.workingwith.length > 0
                        ? "form-control edit-Red"
                        : "form-control edit-Input"
                    }
                    id="workingwith"
                    name="workingwith"
                    placeholder="Enter working with"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {error.workingwith.length > 0 ? (
                <>
                  <div className="errorMes">{error.workingwith}</div>
                  <br />
                </>
              ) : null}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ConfirmDetailsEdit;