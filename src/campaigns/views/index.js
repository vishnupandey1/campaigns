import React from "react";
import { useTranslation } from "react-i18next";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./components/header";
import CampaignPage from "./campaign";

const useStyle = makeStyles((theme) => ({
  title: {
    fontWeight: "700px",
    fontSize: "48px",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700px",
      fontSize: "20px",
    },
  },
  container: {
    height: "auto",
    margin: "120px 180px 20px",
    [theme.breakpoints.down("sm")]: {
      margin: "100px 0 0",
    },
  },
}));

const Home = () => {
  const { t } = useTranslation();
  const classes = useStyle();
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Container>
          <Typography className={classes.title}>
            {t("manageCampaign")}
          </Typography>
          <CampaignPage />
        </Container>
      </div>
    </>
  );
};

export default Home;
