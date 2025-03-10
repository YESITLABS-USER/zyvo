import React from "react";
import Header from "../../../components/guest/Header";
import Footer from "../../../components/guest/Footer";
import { Link } from "react-router-dom";
import useContent from "../../../hooks/useContent";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  // const { FaqData } = useContent();
  // // console.log(FaqData, "faq data comes form this");
  const questions = [
    "What is your return policy?",
    "How do I track my order?",
    "Do you offer international shipping?",
    "How can I contact customer support?",
    "What payment methods do you accept?",
    "Can I modify my order after placing it?",
    "How do I reset my password?",
    "Are there any discounts available?",
    "How do I subscribe to the newsletter?"
  ];
  return (
    <>
      <Header />

      {/* for main */}

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
                        alt="Filter Icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MOBILE */}

        {/* FAQ-PAGE */}
        <div className="faq-wrap">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="faq-heading">
                  <h1>Frequently Asked Questions</h1>
                </div>
              </div>
              <div className="col-lg-11 col-md-11">
                <div className="faq-in">
                  <div className="faq-top mb-4">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the <br />{" "}
                      industry's standard dummy text ever since the 1500s, when
                      an unknown printer took a galley.
                    </p>
                  </div>
                  {/* FAQ CONTENT */}
                  {/* <div className="faq-accordation-wrap" style={{ maxWidth: '800px', margin: '0 auto' }}> */}
                  {/* <Accordion flush>
                      {questions.map((question, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="mb-2 border rounded overflow-hidden">
                          <Accordion.Header>
                            <span className="fw-bold" style={{ fontSize: '16px' }}>{index + 1}. {question}</span>
                          </Accordion.Header>
                          <Accordion.Body className="p-3 text-wrap" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion> */}
                  {/* <div className="accordion accordion-flush" id="accordionFlushExample"> */}
                  <Accordion flush >
                    {questions.map((question, index) => (
                      <Accordion.Item eventKey={index.toString()} key={index} className="mb-2 border rounded overflow-hidden">
                        <Accordion.Header>
                          <span className="fw-bold" style={{ fontSize: '16px' }}>{index + 1}. {question}</span>
                          
                        </Accordion.Header>
                        <Accordion.Body className="p-3 text-wrap" style={{
                          fontSize: '14px',
                          lineHeight: '1.5'
                        }}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                  {/* </div> */}
                  {/* </div> */}
                  {/* FAQ CONTENT */}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="faq-contact-touch">
                  <p>Have more questions?</p>
                  <Link to="/contactUs">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ-PAGE */}
      </main>
      <Footer />
    </>
  );
};

export default Faq;
