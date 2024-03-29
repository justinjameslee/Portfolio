import React from "react";
import { Grid } from "@material-ui/core";
import ProjectBox from "./ProjectBox";

const ProjectsContainer = props => {
  return (
    <Grid container justify="center">
      {loadProjectDOMS(props.data)}
    </Grid>
  );
};

const loadProjectDOMS = JObject => {
  let boxs = [];
  JObject.forEach(data => {
    boxs.push(
      <ProjectBox
        display={data.display}
        img={data.img}
        mobile={data.mobile}
        link={data.link}
        github={data.github}
        title={data.title}
        chips={data.chips}
        date={data.date}
      />
    );
  });
  return boxs;
};

export default ProjectsContainer;
