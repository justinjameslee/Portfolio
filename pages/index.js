import React from "react";
import Home from "../components/Home";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/index.scss";
import { Preloader, Placeholder } from "react-preloading-screen";
import Particles from "react-particles-js";

const particles = {
  particles: {
    number: {
      value: 150
    },
    size: {
      value: 3
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      }
    },
    modes: {
      bubble: {
        size: 5
      }
    }
  }
};

export default function Index() {
  return (
      <div>
        <Preloader>
        <Particles
          width={"100vw"}
          height={2000}
          params={particles}
          className="particles"
        />
          <NavBar />
          <Home />
          <Footer />
          <Placeholder>
          
            <img src="../static/loading.gif" />
          </Placeholder>  
        </Preloader>
      </div>
  );
}
