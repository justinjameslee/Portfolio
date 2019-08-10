import React from "react";
import { Grid, Paper, Chip, Typography, IconButton, Divider } from "@material-ui/core";
import { FontAwesomeIcon as FIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Tilt from "react-tilt";
import Thumbnail from "./Thumbnail";
import MobileThumbnail from "./MobileThumbnail";
import TermLibrary from "../data/TermLibrary.json";
library.add(fab);

export default function ProjectBox(props) {
  const LoadChips = () => {
    let chips = [];
    props.chips.forEach(chip => {
      let lchip = chip.toLowerCase();
      let icon = TermLibrary[lchip] ? TermLibrary[lchip] : lchip;
      chips.push(
        <Chip
          style={{ margin: 2 }}
          icon={<FIcon icon={["fab", icon]} />}
          label={chip}
        />
      );
    });
    return chips;
  };

  const isGithub = () => {
    if (props.github) {
      return (
        <IconButton style={{ padding: 6 }} href={props.github} target="_blank">
          <FIcon icon={["fab", "github"]} />
        </IconButton>
      );
    }
  };

  const isLink = () => {
    if (props.link) {
      return (
        <IconButton style={{ padding: 6 }} href={props.link} target="_blank">
          <FIcon icon={faLink} />
        </IconButton>
      );
    }
  };

  return (
    <Grid className="projectBox" href={props.link} item style={{ width: 500, margin: 20 }}>
      <Tilt options={{ max: 15, scale: 1.05 }}>
        <Paper elevation={1} className="scroll" elevation={20} style={{ height: 295 }}>
          <Grid container>

            <Grid item xs={6}>
              <Grid container style={{ height: 295 }}>
                <Grid className="titleBox" container alignItems="flex-start" justify="center">
                  <Grid container justify="center" direction="row" alignItems="flex-start">
                      <Typography variant="h5">{props.title}</Typography>
                    <Grid container justify="center" direction="row" alignItems="flex-start">
                     <Typography variant="p" className="datefontBox">{props.date}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container alignItems="center" justify="center" style={{ padding: 10 }}>
                  {LoadChips(props.img, props.link)}
                </Grid>
                <Grid container alignItems="flex-end" justify="center" style={{ padding: 10 }}>
                  {isGithub()}
                  {isLink()}
                </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container style={{ height: 295 }}>
              <Grid container alignItems="center" justify="center">
                <Thumbnail display={props.display} img={props.img}>
                  <Grid
                    style={{ height: "100%", padding: 10 }}
                    container
                    justify="flex-end"
                    alignItems="center"
                  >
                    <Grid item>
                      {props.mobile ? <MobileThumbnail img={props.mobile} mobile /> : null}
                    </Grid>
                  </Grid>
                </Thumbnail>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Paper>
    </Tilt>
  </Grid>
  );
}
