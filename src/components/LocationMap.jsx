import React from "react";
import "./LocationMap.css";

function LocationMap() {
  return (
    <div className="location-map">
      <h3>Find Us Here</h3>
      <iframe
        title="Pizzeria Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.653033496208!2d21.031625976511283!3d52.15881937196869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47193291027e15a1%3A0x57a820cc1900e8b!2sStok%C5%82osy%203%2C%2002-787%20Warszawa!5e0!3m2!1spl!2spl!4v1742664858140!5m2!1spl!2spl"
        width="100%"
        height="300"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default LocationMap;
