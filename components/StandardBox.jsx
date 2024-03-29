import React from "react";
import { Grid, Paper, Chip, Typography, IconButton } from "@material-ui/core";
import { FontAwesomeIcon as FIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Tilt from "react-tilt";
import Thumbnail from "./Thumbnail";
import MobileThumbnail from "./MobileThumbnail";
import Library from "../data/ObjectLibrary.jsx";
import TermLibrary from "../data/TermLibrary.json";
import * as Icon from "styled-icons";
library.add(fab);

export default function StandardBox(props) {
  const LoadChips = () => {
    let chips = [];
    props.chips.forEach(chip => {
      let lchip = chip.toLowerCase();
      let icon = TermLibrary[lchip] ? TermLibrary[lchip] : lchip;
      chips.push(
        <Chip
          key={chip}
          style={{ margin: 2 }}
          //icon={<FIcon icon={["fab", icon]} />}
          //icon={<IconProps icon={Icon.boxiconsLogos.Adobe}/>}
          //icon={IconDictionary[icon]}
          icon={Library(icon)}
          label={chip}
        />
      );
    });
    return chips;
  };

  /* function IconProps(props) {
    const StyleIcon = props.icon;
    return (
      <StyleIcon size="1.25em" />
    );
  }

  IconProps.prototype = {
    icon: StyledIcon
  } */

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
    <Grid className="projectBox" href={props.link} item style={{ width: 375, margin: 20 }}>
      <Tilt options={{ max: 15, scale: 1.05 }}>
        <Paper elevation={1} className="scroll" elevation={20}>
          <div className="titleBox">
            <Grid container alignItems="center" justify="space-between">
              <Grid item>
                <Typography variant="h6">{props.title}</Typography>
                <Grid container justify="flex-start" direction="row" alignItems="flex-start">
                  <Typography variant="body1" className="datefontBox">{props.date}</Typography>
                </Grid>
              </Grid>
              <Grid item>
                {isGithub()}
                {isLink()}
              </Grid>
            </Grid>
          </div>
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
          <Grid container style={{ padding: 5 }}>
            {LoadChips(props.img, props.link)}
          </Grid>
        </Paper>
      </Tilt>
    </Grid>
  );
}