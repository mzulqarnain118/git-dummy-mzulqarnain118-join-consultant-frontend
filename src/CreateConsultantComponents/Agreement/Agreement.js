import React from "react";
import Header from "../MobileHeader/Header";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import "./Agreement.css";
import fileDownload from "js-file-download";
import { FiDownload } from "react-icons/fi";

class Agreement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //used to indicate the current policy selected
      currentButton: this.props.currentAgreement,
      scrollReachEnd: false,
      toggle: false,
    };
    this.myRef = React.createRef(); // Create a ref object
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentAgreement !== this.props.currentAgreement) {
      this.setState({ currentButton: this.props.currentAgreement });
    }
  }

  // method to download  the required text file from backend
  downloadFile = async () => {
    await axios
      .get(
        !this.state.currentButton
          ? "https://storage.googleapis.com/cellar-static/Consultant-Join/Independent_Consultant_Agreement.pdf"
          : "https://storage.googleapis.com/cellar-static/Consultant-Join/Policies_and_Procedures.pdf",
        {
          responseType: "blob",
        }
      )
      .then((res) => {
        !this.state.currentButton
          ? fileDownload(res.data, "Independent_Consultant_Agreement.pdf")
          : fileDownload(res.data, "Policies_Procedures.pdf");
      });
  };

  //to see is user has accepted the agreement
  handleChangecheckbox = (e) => {
    let userData = this.props.userData;
    this.setState((prevState) => ({
      ...prevState,
      toggle: !prevState.toggle,
    }));

    this.toggleButton(!this.state.toggle);

    userData["indepedent_agreement"] = !this.props.userData.indepedent_agreement;
    userData["policy_procedures"] = !this.props.userData.policy_procedures;

    console.log("indepedent_agreement", userData.indepedent_agreement);
    console.log("policy_procedures", userData.policy_procedures);

    this.props.setUserData(userData);

    this.props.setrightFooterButtonDisabled(this.state.toggle);
  };

  // toggle which policy nneds to be displayed
  toggleButton = (toggle) => {
    this.setState({ currentButton: toggle });
    this.props.setCurrentAgreement(toggle);
  };

  componentDidMount = () => {
    let userData = this.props.userData;

    userData["indepedent_agreement"] = false;
    userData["policy_procedures"] = false;

    this.props.setUserData(userData);
  };

  

  render() {
    const {toggle } = this.state;

    return (
      <React.Fragment>
        {/* Header for mobile view */}
        {window.innerWidth <= 550 ? (
          <Header
            step={2}
            agreement={true}
            handleBackButton={this.props.handleBackButton}
            topBarNavigation={this.props.topBarNavigation}
          />
        ) : null}
        <div className={window.innerWidth >= 550 ? "AGcomponentMargin " : "AGmobileComponent"}>
          <div className='mobileAgreementLeftMargin'>
            <span className='AGhead1'>LAST STEP</span>
            <div className='AGhead2'>
              Please review and agree to both the Independent Consultant Agreement &amp; Policy and Procedures
            </div>
            {/* buttons to select the requested policy */}
            <div className='AGhead4'>Independent Consultant Agreement</div>

            <div className='col-lg-6 '>
              <div className='downloadButton' onClick={this.downloadFile}>
                <FiDownload style={{ marginTop: "-0.3em" }} /> &nbsp; Download Independent Consultant Agreement
              </div>
            </div>

            {/* to display selected policy data */}
            <div className='col-lg-6'>
              <iframe src="https://drive.google.com/viewer?embedded=true&url=https://storage.googleapis.com/cellar-static/Consultant-Join/Independent_Consultant_Agreement.pdf" type='application/pdf' className='agreementPolicy' width='100%' ></iframe>
            </div>

            <div className='AGhead4'>Policy and Procedures</div>
            <div className='col-lg-6 '>
              <div className='downloadButton' onClick={this.downloadFile}>
                <FiDownload style={{ marginTop: "-0.3em" }} /> &nbsp; Download Policy and Procedures
              </div>
            </div>
            
            <div className='col-lg-6 '>
              <iframe src="https://drive.google.com/viewer?embedded=true&url=https://storage.googleapis.com/cellar-static/Consultant-Join/Policies_and_Procedures.pdf"   className='agreementPolicy' width='100%' ></iframe>
            </div>

            <div className='AGhead3'>
              Please review and agree to both the Independent Consultant Agreement &amp; Policy and Procedures
            </div>
            {/* check Box to accept agreement */}
            <div className='col-lg-8 '>
              <div className='acceptAgreement'>
                <>
                  <Checkbox
                    id='checkbox2'
                    name='checkbox2'
                    checked={toggle}
                    onChange={this.handleChangecheckbox}
                    className='checkBoxAccept'
                    style={{
                      color: "#DCBA80",
                    }}
                  />
                  <span
                    id='checkbox2'
                    className='checkboxText mobileAcceptCheckBox'
                    onClick={this.handleChangecheckbox}
                  >
                    I have read and accept the Independent Consultant Agreement and Policies & Procedures.
                  </span>
                </>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Agreement;
