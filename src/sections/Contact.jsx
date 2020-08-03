import React from "react";
import { CONTACT_ITEMS } from "../constants";
import Icon from "../components/icons/Icon";
import SocialIcons from "../components/icons/SocialIcons";

const Contact = () => {
  return (
    <div className="contact__container">
      <section className="contact">
        <h1 className="contact__header">Let's get in touch!</h1>
        <div className="contact__icons">
          <SocialIcons />
        </div>
      </section>
    </div>
  );
};

export default Contact;
