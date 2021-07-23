import React from "react";

class Banner extends React.Component {
  render() {
    return (
      <>
        <section className="container p-0">
          <section className="banner-blk">
            <section className="row d-flex flex-row m-0 justify-content-center align-items-center banner-bg">
              <aside className="jumbotron p-0 text-center">
                <h1>
                  WELCOME TO
                  <br /> THE WINE BUSINESS
                </h1>
                <p>
                  <a
                    className="btn btn-primary me-2 get-start"
                    href="javascript:;"
                    role="button"
                    title="GET STARTED"
                  >
                    GET STARTED
                  </a>
                  <a
                    className="btn btn-secondary ms-2"
                    href="javascript:;"
                    role="button"
                    title="LEARN MORE"
                  >
                    LEARN MORE
                  </a>
                </p>
              </aside>
            </section>
            <p className="bdes text-center">
              Wine is an experiential lesson in history, geography and science,
              rolled into one elevating glass of joy. If you enjoy it, you’ll
              probably have just as much fun sharing a bottle with your friends.
              Thankfully, selling wine isn’t about knowing wine; it’s about
              knowing your friends.
            </p>
          </section>
        </section>
      </>
    );
  }
}

export default Banner;
