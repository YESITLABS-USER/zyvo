import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image, Card } from "react-bootstrap";
import Header from "../../../components/guest/Header";
import Footer from "../../../components/guest/Footer";
import AuthModal from "../../../components/guest/authModal";
import { Link } from "react-router-dom";
import LocationShareModal from "../../../components/guest/LocationShareModal";

function ArticleDetails() {
const [showShareModal,setShowShareModal]=useState()

  const cardData = [
    {
      title: "A Guide to Analyzing Dashboard Data",
      date: "Mar 13, 2022",
      time: "3 min read",
    },
    {
      title: "A Guide to Analyzing Dashboard Data",
      date: "Mar 13, 2022",
      time: "3 min read",
    },
  ];


  return (
    <div>
      <Header />
      <main>
        {/* Mobile Search Filter */}
        <div className="mob-search-filter border-start-0 border-end-0">
          <Container fluid>
            <Row>
              <Col>
                <div className="mob-search-filter-in">
                  <div className="mob-search-bar-back">
                    <Link to="/explore-articles">
                      <i className="fa-regular fa-arrow-left"></i>
                    </Link>
                    <Form style={{ position: "relative", width: "100%", margin: "10px", height: "auto" }}>
                      <Form.Group
                        controlId="searchArticle"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          background: "#f8f9fa",
                          borderRadius: "15px",
                          padding: "2px 10px",
                        }}
                      >
                        <Form.Control
                          type="text"
                          placeholder="Search article..."
                          style={{
                            border: "none",
                            boxShadow: "none",
                            background: "transparent",
                            borderRadius: "15px",
                            padding: "6px 35px 6px 8px",
                            fontSize: "15px",
                            width: "100%",
                            height: "35px", // Reduced height for thin appearance
                          }}
                        />
                        <Button
                          variant="link"
                          style={{
                            position: "absolute",
                            right: "10px",
                            color: "#6c757d",
                            padding: "0",
                            fontSize: "16px", // Adjust icon size
                          }}
                        >
                          <i className="fa-regular fa-magnifying-glass"></i>
                        </Button>
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Article Details */}
        <div className="guides-articles-details">
          <Container fluid>
            <Row>
              <Col lg={8} md={6}>
                <div className="guides-articles-left">
                  <div className="guides-articles-left-top">
                    <div className="guides-articles-left-top-data">
                      <p>RANKING</p>
                      <h1>Post title article title name article blog</h1>
                      <ul>
                        <li>
                          <Image src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/date.svg" alt="Date" />
                          Mar 13, 2022
                        </li>
                        <li>
                          <Image src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/time.svg" alt="Time" />
                          3 min read
                        </li>
                      </ul>
                    </div>
                    <div className="guides-articles-left-top-image">
                      <Image src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/1.svg" alt="Article" fluid />
                    </div>
                  </div>

                  <div className="guides-articles-left-mid">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <hr />
                    <h3>Introducing Reader. A Stunning Experience</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <Image src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/2.svg" alt="Article Image" fluid />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6}>
                <div className="guides-articles-right">
                  <Form style={{ position: "relative", width: "100%", margin: "10px", height: "auto" }}>
                    <Form.Group
                      controlId="searchArticle"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        background: "#f8f9fa",
                        borderRadius: "15px",
                        padding: "2px 10px",
                      }}
                    >
                      <Form.Control
                        type="text"
                        placeholder="Search article..."
                        style={{
                          border: "none",
                          boxShadow: "none",
                          background: "transparent",
                          borderRadius: "15px",
                          padding: "6px 35px 6px 8px",
                          fontSize: "15px",
                          width: "100%",
                          height: "35px", // Reduced height for thin appearance
                        }}
                      />
                      <Button
                        variant="link"
                        style={{
                          position: "absolute",
                          right: "10px",
                          color: "#6c757d",
                          padding: "0",
                          fontSize: "16px", // Adjust icon size
                        }}
                      >
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </Button>
                    </Form.Group>
                  </Form>
                  <Card
                    style={{
                      border: '0',
                      background: "#dce2e8",
                      borderRadius: "15px",
                      padding: "30px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                      textAlign: "center",
                      margin: "15px",
                    }}
                  >
                    <div
                      style={{
                        background: "#fff",
                        borderRadius: "15px",
                        padding: "15px",
                      }}
                    >
                      <Image
                        src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/chart.svg"
                        alt="Chart"
                        fluid
                        style={{
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />
                    </div>

                    <Card.Body style={{ padding: "10px 0", textAlign: "left" }}>
                      <Card.Title
                        as="h5"
                        style={{
                          fontSize: "22px",
                          fontWeight: "500",
                          lineHeight: "35px",
                          color: "#333",
                          marginBottom: "10px",
                          wordWrap: "break-word", // Ensures text wraps properly
                          whiteSpace: "normal", // Allows multi-line wrapping
                        }}
                      >
                        <a
                          href="#"
                          style={{
                            textDecoration: "none",
                            color: "#0A0B32",
                            display: "block", // Ensures it behaves like a block element
                          }}
                        >
                          A Guide to Analyses Dashboard Data
                        </a>
                      </Card.Title>
                      <Card.Text
                        style={{
                          listStyle: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '16px',
                          fontWeight: '400',
                          color: '#0A0B32',
                          justifyContent: "space-between"
                        }}
                      >
                        <span>
                          <i className="fa-regular fa-calendar"></i> Mar 13, 2022
                        </span>
                        <span>
                          <i className="fa-regular fa-clock"></i> 3 min read
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  {/* Video Section */}
                  <div>
                    {cardData.map((data, index) => (
                      <Card
                        key={index}
                        style={{
                          backgroundColor: "#374442",
                          borderRadius: "15px",
                          padding: "15px",
                          marginRight: "10px",
                          margin: "10px",
                          color: "#ffffff",
                          width: "100%",
                          height: "100%",
                          marginBottom: "10px", // Space between cards
                        }}
                      >
                        <Card.Body style={{ padding: "0", position: "relative" }}>
                          {/* Play Button */}
                          <div
                            style={{
                              position: "absolute",
                              top: "0",
                              left: "8px",
                              width: "30px",
                              height: "30px",
                              backgroundColor: "#ffffff",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <i className="fa-solid fa-play" style={{ color: "#374442", fontSize: "14px" }}></i>
                          </div>

                          {/* Title */}
                          <Card.Title
                            as="h5"
                            style={{
                              fontSize: "24px",
                              fontWeight: "600",
                              marginLeft: '8px',
                              marginBottom: "30px",
                              marginTop: "50px",
                            }}
                          >
                            <Link
                              to="/articles-detail"
                              style={{ color: "#ffffff", textDecoration: "none" }}
                            >
                              {data.title}
                            </Link>
                          </Card.Title>

                          {/* Date & Time */}
                          <Row className="align-items-center" style={{ fontSize: "18px", margin: '5px' }}>
                            <Col className="d-flex align-items-center" style={{ gap: "8px" }}>
                              <Image
                                src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/date.svg"
                                alt="Date"
                                style={{ width: "22px", height: "22px" }}
                              />
                              <span>{data.date}</span>
                            </Col>
                            <Col
                              className="d-flex align-items-center justify-content-end"
                              style={{ gap: "5px" }}
                            >
                              <Image
                                src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/time.svg"
                                alt="Time"
                                style={{ width: "16px", height: "16px" }}
                              />
                              <span>{data.time}</span>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>

                </div>
              </Col>
              <Col md={4} style={{ cursor: "pointer" }}>
                <Card style={{ borderRadius: "15px", padding: "15px", textAlign: "center" }}>
                  <Card.Body>
                    <Card.Title style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>
                      Author:
                    </Card.Title>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                      <i className="fa-solid fa-user" style={{ fontSize: "20px" }}></i>
                      <span style={{ fontSize: "16px", fontWeight: "500" }}>Username</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Share Article Section */}
              <Col md={4} onClick={()=>setShowShareModal((prev)=>!prev)} style={{ cursor: "pointer" }}>
                <Card style={{ borderRadius: "15px", padding: "10px", textAlign: "center" }}>
                  <Card.Body>
                    <Card.Title style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>
                      Share This Article:
                    </Card.Title>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "35px",
                          height: "35px",
                          backgroundColor: "#61f2c2",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <i className="fa-solid fa-share-nodes" style={{ fontSize: "18px", color: "#333" }}></i>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </main >
      <AuthModal />
      <Footer />
      <LocationShareModal show={showShareModal} handleClose={()=>setShowShareModal(false)} url={window.location.href}/>
    </div >
  );
}

export default ArticleDetails;