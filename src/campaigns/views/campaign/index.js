import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import firebase from "../../firebase";
import CampaignList from "./campaignList";

const styles = makeStyles((theme) => ({
  root: {
    height: "80px",
  },
  boxStyle: {
    paddingTop: "40px",
  },
  indicator: {
    height: "4px",
  },
  tabLabel: {
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      fontWeight: "400",
    },
  },
}));

const TabPanel = (props) => {
  const classes = styles();
  const { children, value, index } = props;
  if (value !== index) return null;
  return <Box className={classes.boxStyle}>{children}</Box>;
};

const CampaignPage = () => {
  const classes = styles();
  const { t } = useTranslation();
  const [value, setValue] = useState(0);
  const [campaigns, setCampaigns] = useState([]);
  const [loader, setLoader] = useState(true);

  // Fetching the inital data for the firebase collection
  useEffect(() => {
    async function fetchData() {
      let items = [];
      firebase
        .firestore()
        .collection("campaigns")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            items = doc.data();
          });
          setLoader(false);
          setCampaigns(items?.data || []);
        });
    }
    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            classes={{
              indicator: classes.indicator,
            }}
          >
            <Tab
              classes={{
                root: classes.tabLabel,
              }}
              label={t("upcomingCmp")}
            />
            <Tab
              classes={{
                root: classes.tabLabel,
              }}
              label={t("liveCmp")}
            />
            <Tab
              classes={{
                root: classes.tabLabel,
              }}
              label={t("pastCmp")}
            />
          </Tabs>
          <Divider />
        </div>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CampaignList
          tabName="schedule"
          campaigns={campaigns}
          setCampaigns={setCampaigns}
          loader={loader}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CampaignList
          tabName="live"
          campaigns={campaigns}
          setCampaigns={setCampaigns}
          loader={loader}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CampaignList
          tabName="past"
          campaigns={campaigns}
          setCampaigns={setCampaigns}
          loader={loader}
        />
      </TabPanel>
    </>
  );
};

export default CampaignPage;
