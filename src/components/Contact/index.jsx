import React from "react";

const Contact = () => {
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
                  <abbr title="Phone">P:</abbr> +91 (873) 498-1174
                  <br />
                  <strong>info@gansaitiles.in</strong>
                </address>
              </div>
            </div>
            <div className="col-sm-8 col-md-8">
              <div className="contact-form">
                <form
                  id="main-contact-form"
                  name="contact-form"
                  method="post"
                  action="#"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
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
