import React from "react";
import { Grid, Typography, Button, IconButton } from "@material-ui/core";
import Title from "./Title";
import websitesData from "../data/WebsiteData.json";
import artworksData from "../data/ArtworkData.json";
import ProjectsContainer from "./ProjectContainer";
import StandardContainer from "./StandardContainer";
import { FontAwesomeIcon as FIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
library.add(fab);

export default function Home() {
  const styles = {
    home: {
      height: 900,
      backgroundSize: 'cover',
      overflow: 'hidden',
    },
    overlay: {
      position: 'absolute',
      zIndex: -1,
      opacity: '0.2',
    },
    font: {
      fontFamily: 'DalmatinsRegular',
      fontSize: '200px',
    },
    fontMobile: {
      fontFamily: 'DalmatinsRegular',
      fontSize: '70px',
    },
    titleMobile: {
      fontSize: '4rem',
    }

  }
  return (
    <div>
      <section id="home" style={styles.home}>
        <Grid
          container
          justify="center"
          direction="column"
          alignItems="center"
          style={{ height: 700 }}
        >
        <style jsx global>{`
          @font-face {
              font-family: 'DalmatinsRegular';
              src: url('../static/Dalmatins.otf');
              font-weight: normal;
              font-style: normal;
            }
        `}</style>
        <BrowserView style={styles.overlay}>
          <Typography className="unselectable" style={styles.font} variant="h1">
              Jlee
          </Typography>
        </BrowserView>
        <BrowserView>
          <Typography variant="h1">
                Justin Lee
          </Typography>
        </BrowserView>
        <MobileView style={styles.overlay}>
          <Typography className="unselectable" style={styles.fontMobile} variant="h1">
              Jlee
          </Typography>
        </MobileView>
        <MobileView>
          <Typography variant="h1" style={styles.titleMobile}>
              Justin Lee
          </Typography>
        </MobileView>
          <Typography variant="subtitle1">Developer, Manager and Video Editor</Typography>
          <Grid container justify="center" style={{ margin: 5 }}>
            <IconButton href="https://github.com/justinjameslee" target="_blank">
              <FIcon color="white" icon={["fab", "github"]} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/justinjameslee5/"
              target="_blank"
            >
              <FIcon color="white" icon={["fab", "linkedin"]} />
            </IconButton>
          </Grid>
        </Grid>
      </section>
      <section id="websites">
        <Title>Websites</Title>
        <BrowserView>
          <ProjectsContainer data={websitesData} />
        </BrowserView>
        <MobileView>
          <StandardContainer data={websitesData} />
        </MobileView>
      </section>
      <section id="videos">
        <Title>Videos</Title>
        <StandardContainer display data={artworksData} />
      </section>
    </div>
  );
}
