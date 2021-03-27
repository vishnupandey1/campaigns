import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button";
import { logo } from "../../images";
import { getCurrentLanguage } from "../../utils/helper";

const styles = makeStyles((theme) => ({
  root: {
    height: "auto",
    margin: "10px 180px",
    padding: "0 36px",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      margin: "10px",
      padding: "0",
    },
  },
  btn: {
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  }
}));

const Header = () => {
  const classes = styles();

  const [anchorEl, setAnchorEl] = useState(null);

  const { t, i18n } = useTranslation();

  const currentLang = getCurrentLanguage();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    window.localStorage.setItem("i18nextLng", lng);
    handleClose()
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar color="secondary" position="fixed">
      <Toolbar
        classes={{
          root: classes.root,
        }}
      >
        <img src={logo} alt="logo" />

        <Button color="primary" className={classes.btn} variant="contained" onClick={handleClick}>
          {t("chooseLanguage")}
        </Button>
        {!!anchorEl && (
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              selected={currentLang === "en"}
              onClick={() => changeLanguage("en")}
              className={classes.languageIndent}
            >
              {t("english")}
            </MenuItem>
            <MenuItem
              selected={currentLang === "de"}
              onClick={() => changeLanguage("de")}
              className={classes.languageIndent}
            >
              {t("german")}
            </MenuItem>
          </Menu>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
