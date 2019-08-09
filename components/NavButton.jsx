import React from "react";
import { Link } from "react-scroll";
import {
  Button,
  Grid,
  MenuItem
} from "@material-ui/core";
import MediaQuery from "react-responsive";

const Mobile = props => <MediaQuery {...props} maxWidth={767} />;
const Default = props => <MediaQuery {...props} minWidth={768} />;

export default function NavButton(props) {

    let value = 0, current = ""

    if (props.name == "home") { value = -90 }
    else { value = -45 }

    if (props.name == "resume") { current = "active" }
    else { current = props.name }

    return (
      <div>
        <Default>
          <Grid item>
            <Link
              offset={value}
              spy={true}
              activeClass="active"
              className={current}
              to={props.name}
            >
            <Button variant={props.variant} style={{ margin: 5 }} color="inherit">{props.name}</Button>   
            </Link>
          </Grid>
        </Default>
        <Mobile>
          <Link
              offset={value}
              spy={true}
              activeClass="active"
              className={props.name}
              to={props.name}
          >
          <MenuItem variant={props.variant} color="inherit">{props.children}</MenuItem>   
          </Link>
        </Mobile>
      </div>
    );
}