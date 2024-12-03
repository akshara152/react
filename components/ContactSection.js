import React from "react";

const ContactSection = () => {
  return (
    <div className="contact-section">
      {/* Contact Information */}
      <div className="contact-info">
        <p>
          <strong>Meet us</strong>
        </p>
        <p>📞 +91 9010051157</p>
        <p>📧 thoughtlyteam@gmail.com</p>
        <p>🏢 KESHAV MEMORIAL INSTITUTE OF TECHNOLOGY, NARAYANGUDA.</p>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <form action="/submit_contact_form" method="post">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <input type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
