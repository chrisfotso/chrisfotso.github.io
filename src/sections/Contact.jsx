import React from "react";
import { CONTACT_ITEMS } from "../constants";
import Icon from "../components/icons/Icon";

const Contact = () => {
  return (
    <div className="contact__container">
      <section className="contact">
        <h1 className="contact__header">Let's get in touch!</h1>
        <div className="contact__icons">
          {CONTACT_ITEMS.map((item) => (
            <Icon {...item} className="contact__icon" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
