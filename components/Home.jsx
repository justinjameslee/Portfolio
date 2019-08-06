import React from "react";
import { Grid, Typography, Button, IconButton } from "@material-ui/core";
import Title from "./Title";
import websitesData from "../data/WebsiteData.json";
import artworksData from "../data/ArtworkData.json";
import ProjectsContainer from "./ProjectContainer";
import { makeStyles } from "@material-ui/styles";
import { FontAwesomeIcon as FIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    margin: 25,
    padding: "0 30px"
  }
});

export default function Home() {
  const styles = {
    root: {
      background: '#2C5364',
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px #243b55",
      color: "white",
      height: 48,
      margin: 25,
      padding: "0 30px",
    },
    home: {
      height: 700,
      backgroundSize: 'cover',
      overflow: 'hidden',
    },
    overlay: {
      position: 'absolute',
      zIndex: 100,
      fontFamily: 'Dalmatins',
      fontSize: '200px',
      opacity: '0.2',
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
          style={{ height: "100%" }}
        >
          <Typography style={styles.overlay} variant="h1">
              Jlee
            </Typography>
            <Typography variant="h1">
              Justin Lee
            </Typography> 
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
        <ProjectsContainer data={websitesData} />
      </section>
      <section id="videos">
        <Title>Videos</Title>
        <ProjectsContainer data={artworksData} />
      </section>
    </div>
  );
}
