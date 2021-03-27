import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, Typography } from "@material-ui/core";
import { price } from "../../images";
import PriceModal from "./priceModal"

const styles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  },
  label: {
    marginLeft: "6px",
    fontSize: "14px",
    fontWeight: "400",
  },
}));

const PriceTag = ({ row }) => {
  const classes = styles();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false)

  return (
    <>
    <div className={classes.root} onClick={() => setOpen(true)}>
      <img src={price} alt="price" />
      <Typography className={classes.label} color="textSecondary">
        {t("viewPrice")}
      </Typography>
    </div>
    {open && <PriceModal data={row} onClose={() => setOpen(null)} />}
    </>
  );
};

export default PriceTag;
