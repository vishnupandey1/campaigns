import React from "react";
import { makeStyles, Avatar, Typography } from "@material-ui/core";

const styles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  container: {
    marginLeft: "14px",
  },
  name: {
    fontSize: "16px",
    fontWeight: "400",
  },
  region: {
    fontSize: "14px",
    fontWeight: "400",
    fontStyle: "italic",
    float: "left",
  },
}));

const NameTag = ({ row }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Avatar variant="rounded" src={row.image_url} />
      <div className={classes.container}>
        <Typography className={classes.name}>{row.name}</Typography>
        <Typography className={classes.region} color="textSecondary">
          {row.region}
        </Typography>
      </div>
    </div>
  );
};

export default NameTag;
