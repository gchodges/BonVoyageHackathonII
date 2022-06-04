import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from "./components/nav-bar";
import Loading from "./components/loading";
import Footer from "./components/footer";
import Home from "./views/home";
import Profile from "./views/profile";

import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          {/* <Route path="/external-api" component={ExternalApi} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;