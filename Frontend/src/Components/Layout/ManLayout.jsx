import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function ManLayout() {
  return (
    <div>
      {/* Header content Start */}
      <Header />
      {/* Header section end */}
      {/* Main content Start*/}
      <h1>Kids</h1>
      {/* Main content End*/}
      {/* Footer content Start */}
      <Footer />
      {/* Footer content End */}
    </div>
  );
}

export default ManLayout;
