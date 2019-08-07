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
import MediaQuery from 'react-responsive';
library.add(fab);

export default function Home() {
  const styles = {
    home: {
      height: 900,
      backgroundSize: 'cover',
      overflow: 'hidden',
    },
    font: {
      fontFamily: 'DalmatinsRegular',
      fontSize: '200px',
      position: 'absolute',
      zIndex: -1,
      opacity: '0.2',
    },
    fontMobile: {
      fontFamily: 'DalmatinsRegular',
      fontSize: '70px',
      position: 'absolute',
      zIndex: -1,
      opacity: '0.2',
    },
    titleMobile: {
      fontSize: '4rem',
    }

  }

  // const Check01 = () => {
  //   if (isMobileDevice())
  //   {
  //     return (
  //       <Typography className="unselectable" style={styles.fontMobile} variant="h1">
  //           Jlee
  //       </Typography>
  //     );
  //   }
  // }

  // const Check02 = () => {
  //   if (isMobileDevice())
  //   {
  //     return (
  //       <Typography variant="h1" style={styles.titleMobile}>
  //           Justin Lee
  //       </Typography>
  //     );
  //   }
  // }

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
        <MediaQuery maxDeviceWidth={1024}>
          <Typography className="unselectable" style={styles.fontMobile} variant="h1">
              Jlee
          </Typography>
          <Typography variant="h1" style={styles.titleMobile}>
              Justin Lee
          </Typography>
        </MediaQuery>
        <MediaQuery minDeviceWidth={1024}>
          <Typography className="unselectable" style={styles.font} variant="h1">
              Jlee
          </Typography>
          <Typography variant="h1">
                Justin Lee
          </Typography>
        </MediaQuery>
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
        <MediaQuery minDeviceWidth={1024}>
          <ProjectsContainer data={websitesData} />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1024}>
          <StandardContainer data={websitesData} />
        </MediaQuery>
      </section>
      <section id="videos">
        <Title>Videos</Title>
        <StandardContainer display data={artworksData} />
      </section>
    </div>
  );
}
