import React from "react";
import { useTranslation } from "react-i18next";

import { makeStyles, Typography } from "@material-ui/core";
import { calendar, report, file } from "../../images";

const styles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  label: {
    marginLeft: "6px",
    fontSize: "14px",
    fontWeight: "400",
  },
}));

const ActionTag = ({ setOpenPicker, row, orientation = "row" }) => {
  const classes = styles();
  const { t } = useTranslation();

  return (
    <div
      className={classes.root}
      style={{
        flexDirection: orientation === "column" ? "column" : "row",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          pointer: "cursor",
          marginBottom: orientation === "column" ? "10px" : "",
        }}
        onClick={() => window.open(row.csv)}
      >
        <img src={file} alt="file" />
        <Typography className={classes.label} color="textSecondary">
          {t("csv")}
        </Typography>
      </div>
      <div
        onClick={() => window.open(row.report)}
        style={{
          display: "flex",
          alignItems: "center",
          pointer: "cursor",
          marginBottom: orientation === "column" ? "10px" : "",
        }}
      >
        <img src={report} alt="report" />
        <Typography className={classes.label} color="textSecondary">
          {t("report")}
        </Typography>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          onClick={() => setOpenPicker(row.id)}
          src={calendar}
          alt="calendar"
          style={{ pointer: "cursor" }}
        />
        <Typography className={classes.label} color="textSecondary">
          {t("schAgain")}
        </Typography>
      </div>
    </div>
  );
};

export default ActionTag;
