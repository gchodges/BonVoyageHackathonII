import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from "./components/nav-bar";
import Loading from "./components/loading";
import Footer from "./components/footer";
import Home from "./views/home";
import Profile from "./views/profile";
import Card from 'react-bootstrap/Card'

import "./app.css";
import CardHeader from "react-bootstrap/esm/CardHeader";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (

    <Card className="text-center">
      <CardHeader>
        <NavBar />
      </CardHeader>
      <Card.Title class='fixed-top'>
      <div className="container flex-grow-1">
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          {/* <Route path="/external-api" component={ExternalApi} /> */}
        </Routes>
      </div>
      </Card.Title>
      <Card.Body>

      </Card.Body>
      <Card.Footer class= 'fixed-bottom'>
        <Footer />
      </Card.Footer>
    </Card>
    
  );
};

export default App;
