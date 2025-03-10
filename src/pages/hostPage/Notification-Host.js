import React from "react";
import Header from "../../components/host/Header";
import Footer from "../../components/guest/Footer";
import AuthModal from "../../components/guest/authModal";

function NotificationHost() {
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
                  <div className="mob-search-bar-back">
                    <a href="profile.html">
                      <i className="fa-regular fa-arrow-left"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MOBILE */}

        <div className="notifications-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="notifications-in">
                  <h2>Notifications</h2>
                  {[
                    "You got a booking",
                    "Strike 1: Admin has restricted your account",
                    "Payment Completed",
                    "You got a booking",
                    "Zyvo make a strike on your account",
                    "Payment Completed",
                    "You got a booking",
                  ].map((notification, index) => (
                    <div className="notificaton-strip" key={index}>
                      <div className="notificaton-in">
                        <div className="notificaton-icon">
                          <img
                            src={`https://design.yilstaging.com/ZYVO/assets/images/notifications/${
                              (index % 3) + 1
                            }.svg`}
                            alt=""
                          />
                        </div>
                        <div className="notificaton-content">
                          <h6>{notification}</h6>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                          </p>
                        </div>
                        <button type="button" className="notification-cross">
                          <i className="fa-regular fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <AuthModal />
      <Footer />
    </>
  );
}

export default NotificationHost;
