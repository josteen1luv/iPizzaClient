import React from "react";
import LocationMap from "../components/LocationMap";
import CustomerSupport from "../components/CustomerSupport";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
        <div className="additional-info">
          <LocationMap />
          <CustomerSupport />
        </div>
    </div>
  );
}

export default Contact;
