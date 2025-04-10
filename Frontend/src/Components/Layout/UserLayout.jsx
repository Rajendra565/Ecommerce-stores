import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Hero from "../../Pages/Hero";

function UserLayout() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Sidebar */}
      <Hero />

      {/* Main content */}
      {/* Footer */}
      <Footer />
    </>
  );
}

export default UserLayout;
