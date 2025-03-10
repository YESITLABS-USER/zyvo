import React, {useState, useEffect} from "react";
import Header from "../components/guest/Header";
import Footer from "../components/guest/Footer";
import AuthModal from "../components/guest/authModal";
import { useLocation } from "react-router-dom";
import useCommon from "../hooks/useCommon";

function Notifications() {

  const location = useLocation();
  const {
    guestNotifications,
    hostNotifications
  } = useCommon();

  const notificationSvgMap = {
    booking: 1,
    zyvo: 2,
    payment: 3
  }

  const [notificationArr, setNotificationArr] = useState([]); 

  const type = location.state.type;

  const fetchGuestNotifications = async () => {
    const result = await guestNotifications({user_id:1});
    console.log("result is", result);
    setNotificationArr(result.data);
  }

  const fetchHostNotifications = async () => {
    const result = await hostNotifications({user_id:1});
    setNotificationArr(result.data)
  }

  useEffect(()=>{
    if(type=="guest"){
      fetchGuestNotifications();
    } else {
      fetchHostNotifications();
    }
  }, [])

  return (
    <>
      <Header />

      {/* notification
       */}

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
                  {notificationArr.map((notification, index) => (
                    <div className="notificaton-strip" key={index}>
                      <div className="notificaton-in">
                        <div className="notificaton-icon">
                          <img
                            src={`https://design.yilstaging.com/ZYVO/assets/images/notifications/${
                              notificationSvgMap[notification.type]
                            }.svg`}
                            alt=""
                          />
                        </div>
                        <div className="notificaton-content">
                          <h6>{notification?.title}</h6>
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

export default Notifications;
