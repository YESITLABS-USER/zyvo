import React from "react";
import Header from "../../components/guest/Header";
import Footer from "../../components/guest/Footer";
import useContent from "../../hooks/useContent";

const PrivacyPolicy = () => {
  const { PrivacyData } = useContent();

  // console.log(PrivacyData, "hello users data");

  return (
    <>
      <Header />

      {/*  code for main containt */}

      <main>
        {/* <!-- MOBILE --> */}
        <div class="mob-search-filter border-start-0 border-end-0">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="mob-search-filter-in">
                  <div class="mob-search-bar-back">
                    <a href="home.html">
                      <i class="fa-regular fa-arrow-left"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- MOBILE -->
    <!-- PRIVACY-POLICY-PAGE --> */}
        <div class="privacy-terms-wrap">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="privacy-terms-heading">
                  <h1>Privacy Policy</h1>
                  <p>Last Updated 07/04/2024</p>
                </div>
              </div>
              <div class="col-lg-8 col-md-6">
                <div class="privacy-terms-in">
                  <div class="privacy-terms-top">
                    <h2>1.Introduction</h2>
                    <p>
                      Welcome to Tadawu Nutrition, the website owned and
                      operated by Tadawu Nutrition for food supplements. We are
                      committed to protecting the privacy and security of your
                      personal information. This Privacy Policy outlines our
                      practices regarding the collection, use, sharing, and
                      protection of your data. By accessing or using our
                      website, you consent to the practices described in this
                      policy.
                    </p>
                  </div>
                  <div class="privacy-terms-data">
                    <h3>1.1. Information We Collect</h3>
                    <p>
                      We collect and process various types of information to
                      provide and improve our services, including:
                    </p>
                    <p>
                      <b>Personal Information:</b>
                    </p>
                    <p>
                      When you visit our website, sign up for our newsletter,
                      make a purchase, or contact us, we may collect your name,
                      email address, and other contact details.
                    </p>
                    <p>
                      <b>Payment Information:</b>
                    </p>
                    <p>
                      When making a purchase, we collect payment details, such
                      as credit card information, to facilitate transactions.
                    </p>
                    <p>
                      <b>Usage Data:</b>
                    </p>
                    <p>
                      When making a purchase, we collect payment details, such
                      as credit card information, to facilitate transactions.
                    </p>
                    <p>
                      <b>Cookies and Tracking Technologies:</b>
                    </p>
                    <p>
                      We use cookies and similar technologies to collect
                      information about your browsing behavior. You can manage
                      your cookie preferences through your browser settings.
                    </p>
                    <h3>1.2. How We Use Your Information</h3>
                    <p>
                      We use the information we collect for the following
                      purposes:
                    </p>
                    <p>
                      <b>Information: </b>
                    </p>
                    <p>· To provide and improve our services.</p>
                    <p>· To process transactions and fulfill orders.</p>
                    <p>
                      · To communicate with you, including responding to
                      inquiries and sending newsletters.
                    </p>
                    <p>· To analyze website performance and user behavior.</p>
                    <p>· To comply with legal obligations.</p>
                  </div>
                </div>
                <div class="privacy-terms-in">
                  <div class="privacy-terms-top">
                    <h2>2. Data Sharing</h2>
                    <p>We may share your personal information with:</p>
                  </div>
                  <div class="privacy-terms-data">
                    <p>
                      <b>Service Providers:</b>
                    </p>
                    <p>
                      We may share your information with third-party service
                      providers who assist us in delivering our services, such
                      as payment processors and email marketing services.
                    </p>
                    <p>
                      <b>Legal Compliance:</b>
                    </p>
                    <p>
                      When you visit our website, sign up for our newsletter,
                      make a purchase, or contact us, we may collect your name,
                      email address, and other contact details.
                    </p>
                    <p>
                      <b>Business Transfers:</b>
                    </p>
                    <p>
                      When making a purchase, we collect payment details, such
                      as credit card information, to facilitate transactions.
                    </p>

                    <h3>2.1. Your Rights</h3>
                    <p>
                      You have certain rights regarding your personal
                      information under GDPR, including:
                    </p>
                    <p>
                      <b>Right to Access:</b>
                    </p>
                    <p>
                      You can request access to the personal information we hold
                      about you.
                    </p>
                    <p>
                      <b>Right to Rectification:</b>
                    </p>
                    <p>
                      You can request corrections to inaccurate or incomplete
                      data.
                    </p>
                    <p>
                      <b>Right to Erasure:</b>
                    </p>
                    <p>
                      You have the right to request the deletion of your
                      personal information.
                    </p>
                    <p>
                      <b>Right to Object:</b>
                    </p>
                    <p>
                      You can object to the processing of your data for
                      marketing purposes.
                    </p>
                    <p>
                      <b>Right to Data Portability:</b>
                    </p>
                    <p>
                      You can request a copy of your data in a commonly used
                      format.
                    </p>
                  </div>
                </div>
                <div class="privacy-terms-in">
                  <div class="privacy-terms-top">
                    <h2>6. Data Security</h2>
                    <p>
                      We take reasonable measures to protect your personal
                      information from unauthorized access, disclosure,
                      alteration, and destruction. We use encryption and
                      security protocols to safeguard your data.
                    </p>
                  </div>
                  <div class="privacy-terms-top">
                    <h2>7. Changes to this Privacy Policy</h2>
                    <p>
                      We may update this Privacy Policy from time to time. Any
                      changes will be posted on this page with an updated
                      effective date.
                    </p>
                  </div>
                  <div class="privacy-terms-top">
                    <h2>8. Contact Us</h2>
                    <p>
                      If you have any questions or concerns regarding this
                      Privacy Policy or your personal information, please
                      contact us at:
                    </p>
                  </div>
                  <div class="privacy-terms-top">
                    <h2>9. Consent</h2>
                    <p>
                      By using our website, you consent to the terms outlined in
                      this Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="privacy-terms-in mb-0">
                  <div class="privacy-terms-right">
                    <h2>
                      <u>Table Of Content</u>
                    </h2>
                    <h3>1.Privacy Policy</h3>
                    <p>
                      <b>1.1</b> What Personal Information we collect
                    </p>
                    <p>
                      <b>1.2</b> Security Services
                    </p>
                    <h3>2. Other things</h3>
                    <p>
                      <b>2.1</b> Lorem Ipsum
                    </p>
                    <p>
                      <b>2.2</b> Lorem Ipsum is simply a dummy text
                    </p>
                    <h3>3. What Personal Information we collect</h3>
                    <p>
                      <b>3.1</b> Security Services
                    </p>
                    <p>
                      <b>3.2</b> Other things
                    </p>
                    <p>
                      <b>3.3</b> Lorem Ipsum
                    </p>
                    <p>
                      <b>3.4</b> Lorem Ipsum is simply a dummy text
                    </p>
                  </div>
                  <div class="login-signup-box">
                    <p>
                      Get help with your reservations,
                      <br />
                      account, and more.
                    </p>
                    <button type="button">Login or Signup</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- PRIVACY-POLICY-PAGE --> */}
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
