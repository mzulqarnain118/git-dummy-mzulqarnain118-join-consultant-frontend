import React from "react";
import Banner from "./Banner";
import Havemorequestions from "./Havemorequestions";
import Hearfromotherconsultants from "./Hearfromotherconsultants";
import Howdoesitwork from "./Howdoesitwork";
import Letsgetstarted from "./Letsgetstarted";
import Partnersinsuccess from "./Partnersinsuccess";
import Whyscoutandcellar from "./Whyscoutandcellar";
import Whyyou from "./Whyyou";

class Home extends React.Component {
  render() {
    return (
      <>
        <Banner />
        <Whyyou />
        <Whyscoutandcellar />
        <Howdoesitwork />
        <Partnersinsuccess />
        <Hearfromotherconsultants />
        <Havemorequestions />
        <Letsgetstarted />
      </>
    );
  }
}

export default Home;
