import React from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";

import { makeStyles, Card, Typography, CardContent } from "@material-ui/core";
import { getTime } from "../../utils/helper";
import ActionTag from "../components/actionTag";
import NameTag from "../components/nameTag";
import PriceTag from "../components/priceTag";

const styles = makeStyles(() => ({
  card: {
    marginBottom: "10px",
  },
  cardContent: {
    display: "grid",
    padding: "10px",
    gridTemplateColumns: "30% 70%",
    gridColumnGap: "20px",
    gridRowGap: "15px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "400",
  },
}));

const ResponsiveList = ({ campaigns = [], setOpenPicker }) => {
  const classes = styles();
  const { t } = useTranslation();

  return (
    <>
      {campaigns.length > 0 ? (
        <>
          {campaigns.map((row) => (
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="body2">{t("date")}</Typography>
                <div>
                  <Typography>{moment(row.created_on).format("MMM Y, DD")}</Typography>
                  <Typography className={classes.label} color="textSecondary">
                    {getTime(row.created_on)}
                  </Typography>
                </div>
                <Typography variant="body2">{t("cmp")}</Typography>
                <NameTag row={row} />
                <Typography variant="body2">{t("view")}</Typography>
                <PriceTag row={row} />
                <Typography variant="body2">{t("action")}</Typography>
                <ActionTag
                  row={row}
                  setOpenPicker={setOpenPicker}
                  orientation="column"
                />
              </CardContent>
            </Card>
          ))}
        </>
      ) : (
        <Typography variant="h4"> No campaign found.</Typography>
      )}
    </>
  );
};

export default ResponsiveList;
