import React, { useState } from "react";
import { KEYS } from "../config/Constant";
import Home from "./guestPage/Home";
import HomeHost from "./hostPage/HomeHost";

function RootHome() {
  const [userTypes, setUserTypes] = useState(
    localStorage.getItem(KEYS.USER_TYPE)
  );

  return <>{userTypes === "guest" ? <Home /> : <HomeHost />}</>;
}

export default RootHome;
