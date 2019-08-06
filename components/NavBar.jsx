import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  useScrollTrigger,
  Grid
} from "@material-ui/core";

// import "../pages/index.css"
import NavButton from "./NavButton";
import { fontFamily } from "@material-ui/system";

const style = {
  navbar: {
    background: "transparent",
    boxShadow: "none",
    transitionProperty: "all",
    position: "static"
  },
  logo: {
    fontFamily: 'DalmatinsRegular',
    marginTop: 5,
  }
}

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 5 : 0
  });
}

export default function NavBar(props) {
  return (
    <div>
  
      <ElevationScroll>
          <AppBar style={style.navbar}>
            <Container>
              <Toolbar>
                <Typography className="unselectable" variant="title" style={style.logo}>
                  Jlee
                </Typography>
                <style jsx global>{`
                  @font-face {
                      font-family: 'DalmatinsRegular';
                      src: url('../static/Dalmatins.otf');
                      font-weight: normal;
                      font-style: normal;
                    }
                  `}</style>
                <Grid container spacing={1} alignItems="center" justify="flex-end">
                  <NavButton name="home" />
                  <NavButton name="websites" />
                  <NavButton name="videos" />
                  <NavButton name="resume" variant="outlined" />
                </Grid>
              </Toolbar>
            </Container>
          </AppBar>
        </ElevationScroll>
    
      
    </div>
  );
}
