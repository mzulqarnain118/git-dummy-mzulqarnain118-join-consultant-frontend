import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./HomePage.css";
import "./Assets/css/style.scss";
import "./Assets/css/responsive.scss";
import React from "react";
import Header from "./HomePageComponents/Header";
import Home from "./HomePageComponents/Home";
import Footer from "./HomePageComponents/Footer";

class HomePage extends React.Component {
  //used to get custom url from the url
  componentDidMount = () => {
    let pathname = this.props.location.pathname;
    let n = pathname.lastIndexOf("/");
    pathname = pathname.substring(n + 1);
    let search = this.props.location.search;
    n = search.lastIndexOf("/?u=");
    search = search.substring(n + 4);
    let value = "";
    if (pathname === "") {
      value = search;
    } else {
      value = pathname;
    }
    if (value === undefined) {
      value = "";
    }
    
    this.props.passCustomURL(value);
  };
  
  render() {    
    return (
      <>
        <section className="wrapper">
          <Header />
          <Home />
          <Footer />
        </section>
      </>
    );
  }
}

export default HomePage;
