import React from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import Title from "./Title";
import websitesData from "../data/WebsiteData.json";
import videoData from "../data/VideoData.json";
import ProjectsContainer from "./ProjectContainer";
import StandardContainer from "./StandardContainer";
import { FontAwesomeIcon as FIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MediaQuery from 'react-responsive';

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
      fontSize: '5rem',
    }
  }

  const Mobile = props => <MediaQuery {...props} maxWidth={767} />;
  const Default = props => <MediaQuery {...props} minWidth={768} />;
  
  return (
    <div key="1">
      <section id="home" style={styles.home}>
        <Grid
          container
          justify="center"
          direction="column"
          alignItems="center"
          style={{ height: 700 }}
        >
        <Mobile>
          <Typography className="unselectable" style={styles.fontMobile} variant="h1">
              Jlee
          </Typography>
          <Typography variant="h1" style={styles.titleMobile}>
              Justin Lee
          </Typography>
        </Mobile>
        <Default>
          <Typography className="unselectable" style={styles.font} variant="h1">
              Jlee
          </Typography>
          <Typography variant="h1">
                Justin Lee
          </Typography>
        </Default>
          <Typography variant="subtitle1">Developer, Manager and Video Editor</Typography>
          <Grid container justify="center" style={{ margin: 5 }}>
            <IconButton href="https://github.com/justinjameslee" target="_blank">
              <FIcon color="white" icon={faGithub} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/justinjameslee5/"
              target="_blank"
            >
              <FIcon color="white" icon={faLinkedin} />
            </IconButton>
          </Grid>
        </Grid>
      </section>
      <section className="section" id="websites">
        <Title>Websites</Title>
        <Default>
          <ProjectsContainer data={websitesData} />
        </Default>
        <Mobile>
          <StandardContainer data={websitesData} />
        </Mobile>
      </section>
      <section className="section" id="videos">
        <Title>Videos</Title>
        <StandardContainer data={videoData} />
      </section>
    </div>
  );
}
