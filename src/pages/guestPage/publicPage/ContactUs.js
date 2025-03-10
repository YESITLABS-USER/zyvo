import React, { useContext } from "react";
import Header from "../../../components/guest/Header";
import Footer from "../../../components/guest/Footer";
import AuthModal from "../../../components/guest/authModal";
import { useSelector } from "react-redux";
import useContent from "../../../hooks/useContent";
import { useForm } from "react-hook-form";
//

const ContactUs = () => {
  const { contact_us } = useContent();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const user = useSelector((state) => state.user);
  // console.log(user?.userInfo?.user_id, "hello user data comes from this");

  const onSubmit = async (data) => {
    // console.log("Form Submitted:", data);

    try {
      const response = await contact_us({
        user_id: user?.userInfo?.user_id, // Default user_id as fallback
        name: data.name,
        email: data.email,
        message: data.message,
      });

      // console.log("Response:", response); // Debug response
      if (response) {
        reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    }
  };
  return (
    <>
      <Header />

      <main>
        {/* MOBILE */}
        <div className="mob-search-filter border-start-0 border-end-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="mob-search-filter-in">
                  <div className="mob-search-in">
                    <ul>
                      <li>
                        <a href="mob-src-filter.html">Where</a>
                      </li>
                      <li>
                        <a
                          className="mob-search-in-time"
                          href="mob-src-filter.html"
                        >
                          Time
                        </a>
                      </li>
                      <li>
                        <a href="mob-src-filter.html">Activity</a>
                      </li>
                    </ul>
                    <a href="mob-src-filter.html" className="mob-search-button">
                      <i className="fa-regular fa-magnifying-glass"></i>
                    </a>
                  </div>
                  <div className="mob-filter-in">
                    <a href="mob-filter.html">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/mobile/filters/filter.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MOBILE */}

        {/* CONTACT-PAGE */}
        <div className="faq-wrap">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="faq-heading">
                  <h1>Contact Us</h1>
                </div>
                <div className="faq-in">
                  <div className="faq-top mb-4">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="contact-help">
                  <h2>Help & Contact</h2>
                  <div className="contact-help-in">
                    <h3>Contact Us</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        type="text"
                        placeholder="Your Name"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && <p>{errors.name.message}</p>}

                      <input
                        type="text"
                        placeholder="Your Email"
                        {...register("email", {
                          required: "email is required",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.email && <p>{errors.email.message}</p>}

                      {/* <input
                        type="email"
                        placeholder="Your Email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.email && <p>{errors.email.message}</p>} */}

                      <label>Message</label>
                      <textarea
                        {...register("message", {
                          required: "Message is required",
                        })}
                      />
                      {errors.message && <p>{errors.message.message}</p>}

                      <div className="captcha">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/captcha.svg"
                          alt="Captcha"
                        />
                      </div>

                      <input type="submit" value="Submit" />
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="contact-support">
                  <h2>Customer Support</h2>
                  <p>Our Customer Service Team are also available On.</p>
                  <div className="contact-support-in">
                    <div className="icon">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/contact-page/call.svg"
                        alt=""
                      />
                    </div>
                    <h3>
                      Contact Number <br />{" "}
                      <span>
                        <a href="">+1(000) 000-0000</a>
                      </span>
                    </h3>
                  </div>
                  <div className="contact-support-in">
                    <div className="icon">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/contact-page/mail.svg"
                        alt=""
                      />
                    </div>
                    <h3>
                      Email Address <br />
                      <span>
                        <a href="">info@yourdomain.com</a>
                      </span>{" "}
                      <br />
                      <span>
                        <a href="">info@yourdomain.com</a>
                      </span>
                    </h3>
                  </div>
                  <div className="contact-support-in">
                    <div className="icon">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/contact-page/location.svg"
                        alt=""
                      />
                    </div>
                    <h3>
                      Location <br />
                      <span>Atlanta, GA, USA</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.139268703457!2d-133.14340392403935!3d55.4776704131501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x540e467f9dd315f3%3A0xf4eae0d4d7764524!2s245%20Cold%20Storage%20Rd%2C%20Craig%2C%20AK%2099921%2C%20USA!5e0!3m2!1sen!2sin!4v1723457458145!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CONTACT-PAGE */}
      </main>
      <AuthModal />
      <Footer />
    </>
  );
};

export default ContactUs;
