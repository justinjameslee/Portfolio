import React from "react";
import Home from "../components/Home";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/index.scss";
import { Preloader, Placeholder } from "react-preloading-screen";
import Particles from "react-particles-js";
import { Grid } from "@material-ui/core";

const particles = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.3
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      random: true,
      speed: 1,
      direction: "top",
      out_mode: "out"
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

const styles = {
  placeholder: {
    background: '#15191F',
    position: 'absolute',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    height: '100%',
    width: '100%'
  },
  loading: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}

export default function Index() {
  return (
      <div>
        <Preloader>
          <Particles
            width={"100vw"}
            params={particles}
            height={950}
            className="particles"
          />
          <NavBar />
          <Home />
          <Footer />
          <Placeholder>
            <Grid style={styles.placeholder}>
              <img src="../static/loading.gif" style={styles.loading}/>
            </Grid>
          </Placeholder>  
        </Preloader>
        <style jsx global>{`
          @font-face {
              font-family: 'DalmatinsRegular';
              src: url('../static/Dalmatins.otf');
              font-weight: normal;
              font-style: normal;
            }
        `}</style>
      </div>
  );
}
