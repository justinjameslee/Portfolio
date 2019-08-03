import React from "react";
import Home from "../components/Home";
import Footer from "../components/Footer";
import "../styles/index.scss";
import { Preloader, Placeholder } from "react-preloading-screen";

export default function Index() {
  return (
      <div>
        <Preloader>
          <Home />
          <Footer />
          <Placeholder>
            <img src="../static/loading.gif" />
          </Placeholder>  
        </Preloader>
      </div>
  );
}
