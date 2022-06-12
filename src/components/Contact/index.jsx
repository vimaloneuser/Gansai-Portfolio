import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = React.useRef();
  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5q3bd8k",
        "template_7rf42jm",
        form.current,
        "iJ9aNSliwQ57snZFA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact-us">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title wow fadeInDown">Contact Us</h2>
        </div>
      </div>
      <div className="container">
        <div className="container contact-info">
          <div className="row">
            <div className="col-sm-4 col-md-4">
              <div className="contact-form">
                <h3>Contact Info</h3>

                <address>
                  <br />
                  4-Vishwkarma Nagar Vejalpur
                  <br />
                  Ahmedabad -380051 Gujarat India
                  <br />
                  <abbr title="Phone"></abbr>
                  +91 (816) 014-7875
                  <br />
                  <strong>info@gansaitiles.in, </strong>
                  <strong>gansaitiles@gmail.com</strong>
                </address>
              </div>
            </div>
            <div className="col-sm-8 col-md-8">
              <div className="contact-form">
                <form
                  id="main-contact-form"
                  name="contact-form"
                  method="post"
                  ref={form}
                  onSubmit={sendMail}
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="user_name"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="user_email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="8"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
