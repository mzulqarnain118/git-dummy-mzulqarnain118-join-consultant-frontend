import React from "react";
import Header from "./Header";
import Checkbox from "@material-ui/core/Checkbox";

import "../Style/PurchaseKit.css";

class PurchaseKit extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 0,
      form: {
        cardHolderName: "",
        cardNumber: "",
        cardDate: "",
        cardCVV: "",
        street: "",
        zipCode: "",
        city: "",
        state: "",
      },
      error: {
        cardHolderName: "",
        cardNumber: "",
        cardDate: "",
        cardCVV: "",
        street: "",
        zipCode: "",
        city: "",
        state: "",
      },
      checked: true,
    };
  }

  enableDone = (checked = this.state.checked) => {
    let form = this.state.form;
    let error = this.state.error;

    if (
      form["cardHolderName"] !== "" &&
      form["cardNumber"] !== "" &&
      form["cardDate"] !== "" &&
      form["cardCVV"] !== "" &&
      (checked ||
        (form["street"] !== "" &&
          form["zipCode"] !== "" &&
          form["city"] !== "" &&
          form["state"] !== "")) &&
      error["cardHolderName"] === "" &&
      error["cardNumber"] === "" &&
      error["cardDate"] === "" &&
      error["cardCVV"] === "" &&
      error["street"] === "" &&
      error["zipCode"] === "" &&
      error["city"] === "" &&
      error["state"] === ""
    ) {
      this.props.setrightFooterButtonDisabled(false);
    } else {
      this.props.setrightFooterButtonDisabled(true);
    }
  };

  handleChange = (e) => {
    let form = this.state.form;
    let error = this.state.error;
    let id = e.target.id;
    let value = e.target.value;

    if (id === "cardHolderName") {
      if (value !== "") {
        error[id] = "";
      } else {
        error[id] = "Card Holder Name is Mandatory";
      }
    }

    if (id === "cardNumber") {
      if (value !== "") {
        error[id] = "";
      } else {
        error[id] = "Card Number is Mandatory";
      }
    }

    if (id === "cardDate") {
      if (value !== "") {
        error[id] = "";
      } else {
        error[id] = "MM/YY is Mandatory";
      }
    }

    if (id === "cardCVV") {
      if (value !== "") {
        error[id] = "";
      } else {
        error[id] = "CVV is Mandatory";
      }
    }

    if (id === "street") {
      if (value !== "") {
        error[id] = "";
      } else {
        error[id] = "Street is Mandatory";
      }
    }

    if (id === "zipCode") {
      if (value !== "") {
        error[id] = "";
      } else {
        error[id] = "Zip Code is Mandatory";
      }
    }

    if (id === "city") {
      if (value !== "") {
        error[id] = "";
      } else {
        error[id] = "City is Mandatory";
      }
    }

    if (id === "state") {
      if (value !== "") {
        error[id] = "";
      } else {
        error[id] = "State is Mandatory";
      }
    }

    form[id] = value;
    this.setState({ form, error });
    this.enableDone();
  };

  componentDidMount = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { form, error, checked } = this.state;
    return (
      <React.Fragment>
        {this.state.width <= 550 ? <Header step={3} agreement={false} /> : null}
        <div
          className={
            this.state.width >= 550
              ? checked
                ? "purchaseComponentMargin1"
                : "purchaseComponentMargin2 "
              : "mobileComponent"
          }
        >
          <span className="head1">PURCHASE KIT</span>
          <div className="row">
            <div className="col-lg-12 col-md-11 mobileTotalPanel">
              <div className="totalPanel">
                <div className="row">
                  <div className="col-lg-4 offset-lg-1 col-md-4 offset-md-1 mobileTotalTitle">
                    <div className="subTotalText">SubTotal</div>
                    <div className="totalText">Shipping</div>
                    <div className="totalText">Sales Tax</div>
                  </div>
                  <div className="col-lg-3 offset-lg-3 col-md-3 offset-md-3 mobileTotalValue">
                    <div className="subTotalMoney">$249.00</div>
                    <div className="totalMoney">$0.00</div>
                    <div className="totalMoney">$0.00</div>
                  </div>
                  <div className="col-lg-1"></div>
                </div>
              </div>
              <div className="totalResultPanel">
                <div className="row">
                  <div className="col-lg-4 offset-lg-1 col-md-4 offset-md-1 mobileTotalTitle">
                    <div className="ResultText">Total</div>
                  </div>
                  <div className="col-lg-3 offset-lg-3 col-md-3 offset-md-3 mobileTotalValue">
                    <div className="ResultMoney">$249.00</div>
                  </div>
                  <div className="col-lg-1"></div>
                </div>
              </div>
              <div className="totalSubText">
                Depending on where your BBK is going, additional taxes and fees
                may apply. These rates are determined by shipping address
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="paymentHead">PAYMENT DETAILS</div>
                <div className="row">
                  <div className="col-lg-5 ">
                    <div className="form-group">
                      <div className="purchaseInputMargin">
                        <span
                          className="purchasehead3"
                          htmlFor="cardHolderName"
                        >
                          CARD HOLDER NAME
                        </span>
                        <input
                          type="text"
                          value={form["cardHolderName"]}
                          className={
                            error.cardHolderName.length > 0
                              ? "form-control purchaseRed"
                              : "form-control purchaseInput"
                          }
                          id="cardHolderName"
                          name="cardHolderName"
                          placeholder="Enter Card Holder Name"
                          autoComplete="off"
                          onChange={this.handleChange}
                        />

                        {error.cardHolderName.length > 0 ? (
                          <span className="errorMes">
                            {error.cardHolderName}
                            <br />
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 offset-lg-1 ">
                    <div className="form-group">
                      <div className="purchaseInputMargin1">
                        <span className="purchasehead3" htmlFor="cardNumber">
                          CARD NUMBER
                        </span>
                        <input
                          type="text"
                          value={form["cardNumber"]}
                          className={
                            error.cardNumber.length > 0
                              ? "form-control purchaseRed"
                              : "form-control purchaseInput"
                          }
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="Enter Card Number"
                          autoComplete="off"
                          onChange={this.handleChange}
                        />

                        {error.cardNumber.length > 0 ? (
                          <span className="errorMes">
                            {error.cardNumber}
                            <br />
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-5 mobileMMYY">
                    <div className="form-group">
                      <span className="purchasehead3" htmlFor="cardDate">
                        MM/YY
                      </span>
                      <input
                        type="text"
                        value={form["cardDate"]}
                        className={
                          error.cardDate.length > 0
                            ? "form-control purchaseRed1"
                            : "form-control purchaseInput1"
                        }
                        id="cardDate"
                        name="cardDate"
                        autoComplete="off"
                        placeholder="Enter MM/YY"
                        onChange={this.handleChange}
                      />

                      {error.cardDate.length > 0 ? (
                        <span className="errorMes">
                          {error.cardDate}
                          <br />
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 mobileCVV">
                    <div className="form-group">
                      <span className="purchasehead3" htmlFor="cardCVV">
                        CVV
                      </span>
                      <input
                        type="text"
                        value={form["cardCVV"]}
                        className={
                          error.cardCVV.length > 0
                            ? "form-control purchaseRed2"
                            : "form-control purchaseInput2"
                        }
                        id="cardCVV"
                        name="cardCVV"
                        autoComplete="off"
                        placeholder="Enter CVV"
                        onChange={this.handleChange}
                      />

                      {error.cardCVV.length > 0 ? (
                        <span className="errorMes">
                          {error.cardCVV}
                          <br />
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 billingAddressoffset">
                <div className="billingHead"> BILLING ADDRESS</div>
                <div className="acceptBillingAddress">
                  <Checkbox
                    checked={checked}
                    onChange={() => {
                      this.enableDone(!checked);
                      this.setState({ checked: !checked });
                    }}
                    className="checkBoxAccept"
                    style={{
                      color: "#DCBA80",
                    }}
                  />
                  <span className="billingText">Same as shipping address.</span>
                </div>

                {!checked ? (
                  <>
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="form-group">
                          <div className="purchaseInputMargin">
                            <span className="purchasehead3" htmlFor="street">
                              STREET
                            </span>
                            <input
                              type="text"
                              value={form["street"]}
                              className={
                                error.street.length > 0
                                  ? "form-control purchaseRed"
                                  : "form-control purchaseInput"
                              }
                              id="street"
                              name="street"
                              placeholder="Enter Street"
                              autoComplete="off"
                              onChange={this.handleChange}
                            />

                            {error.street.length > 0 ? (
                              <span className="errorMes">
                                {error.street}
                                <br />
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 desktopViewMarginLeft">
                        <div className="form-group">
                          <div className="purchaseInputMargin">
                            <span className="purchasehead3" htmlFor="zipCode">
                              ZIP CODE
                            </span>
                            <input
                              type="text"
                              value={form["zipCode"]}
                              className={
                                error.zipCode.length > 0
                                  ? "form-control purchaseRed"
                                  : "form-control purchaseInput"
                              }
                              id="zipCode"
                              name="zipCode"
                              placeholder="Enter ZIP Code"
                              autoComplete="off"
                              onChange={this.handleChange}
                            />

                            {error.zipCode.length > 0 ? (
                              <span className="errorMes">
                                {error.zipCode}
                                <br />
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="form-group">
                          <div className="purchaseInputMargin">
                            <span className="purchasehead3" htmlFor="city">
                              CITY
                            </span>
                            <input
                              type="text"
                              value={form["city"]}
                              className={
                                error.city.length > 0
                                  ? "form-control purchaseRed"
                                  : "form-control purchaseInput"
                              }
                              id="city"
                              name="city"
                              placeholder="Enter City"
                              autoComplete="off"
                              onChange={this.handleChange}
                            />

                            {error.city.length > 0 ? (
                              <span className="errorMes">
                                {error.city}
                                <br />
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 desktopViewMarginLeft">
                        <div className="form-group">
                          <div className="purchaseInputMargin">
                            <span className="purchasehead3" htmlFor="state">
                              STATE
                            </span>
                            <input
                              type="text"
                              value={form["state"]}
                              className={
                                error.state.length > 0
                                  ? "form-control purchaseRed"
                                  : "form-control purchaseInput"
                              }
                              id="state"
                              name="state"
                              placeholder="Enter State"
                              autoComplete="off"
                              onChange={this.handleChange}
                            />

                            {error.state.length > 0 ? (
                              <span className="errorMes">
                                {error.state}
                                <br />
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PurchaseKit;
