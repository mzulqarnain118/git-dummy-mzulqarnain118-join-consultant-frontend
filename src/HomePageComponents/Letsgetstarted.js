import React from "react";

class Letsgetstarted extends React.Component {
  render() {
    return (
      <>
        <section className="letsget">
          <section className="container p-0">
            <section className="row d-flex flex-row m-0 justify-content-start align-items-center letsget-banner">
              <aside className="col-lg-8 col-md-8 col-12 p-0">
                <h4 className="text-uppercase">
                  Ready to launch
                  <br /> your wine business?
                </h4>
              </aside>
              <aside className="col-lg-4 col-md-4 col-12 p-0">
                <a
                  className="btn btn-secondary"
                  href="javascript:;"
                  role="button"
                  title="LET'S GET STARTED"
                >
                  Let's get started
                </a>
              </aside>
            </section>
          </section>
        </section>
      </>
    );
  }
}

export default Letsgetstarted;
