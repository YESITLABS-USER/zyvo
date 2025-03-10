import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./router/Routers";
import { Provider, useDispatch } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "./store";
import InlineInquiry from "./components/guest/personaIdentityVerification";

const queryClient = new QueryClient();
const AppComponent = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Router>
        <Routers />
      </Router>
    </>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppComponent />
        <InlineInquiry />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
