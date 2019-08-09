import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Button,
  Menu,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavButton from "./NavButton";
import MediaQuery from "react-responsive";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'  

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
  },
  menu: {
    fontSize: 40,
    color: "#FFFFFF"
  }
}

const Mobile = props => <MediaQuery {...props} maxWidth={767} />;
const Default = props => <MediaQuery {...props} minWidth={768} />;

export default function NavBar() {

  const popupState = usePopupState({ variant: 'popover', popupId: 'Menu' })

  return (
    <div>
      <Default>
          <AppBar style={style.navbar}>
            <Container>
              <Toolbar>
                <Typography className="unselectable" variant="title" style={style.logo}>
                  Jlee
                </Typography>
                <Grid container alignItems="center" justify="flex-end">
                  <NavButton name="home" />
                  <NavButton name="websites" />
                  <NavButton name="videos" />
                  <NavButton name="resume" variant="outlined" />
                </Grid>
              </Toolbar>
            </Container>
          </AppBar>
      </Default>
      <Mobile>
        <AppBar style={style.navbar}>
          <Container>
            <Toolbar>
              <Typography className="unselectable" variant="title" style={style.logo}>
                Jlee
              </Typography>
              <Grid container spacing={1} alignItems="center" justify="flex-end">
                <Button {...bindTrigger(popupState)}>
                  <MenuIcon style={style.menu} />
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <NavButton name="home" onClick={popupState.close}>HOME</NavButton>
                  <NavButton name="websites" onClick={popupState.close}>WEBSITES</NavButton>
                  <NavButton name="videos" onClick={popupState.close}>VIDEOS</NavButton>
                  <NavButton name="resume" onClick={popupState.close}>RESUME</NavButton>
                </Menu>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      </Mobile>
    </div>
  );
}
