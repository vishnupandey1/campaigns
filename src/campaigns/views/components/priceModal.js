import React from "react";
import {
  Typography,
  Button,
  Avatar,
  makeStyles,
  Dialog,
  DialogContent,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";

const styles = makeStyles((theme) => ({
  paper: {
    width: "464px",
    height: "400px",
    borderRadius: "1px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
      borderRadius: "0px",
    },
  },
  ctaBtn: {
    marginBottom: "10px",
    width: "150px",
    textTransform: "none",
    height: "48px",
  },
  pricing: {
    marginTop: "30px",
    fontWeight: "700",
    fontSize: "24px",
    marginBottom: "10px"
  },
  imageContainer: {
    display: "flex",
    alignItems: "flex-end",
  },
  avatar: {
    height: "137px",
    width: "137px",
  },
  nameWrapper: {
    marginLeft: "10px",
  },
  name: {
    fontWeight: "500",
    fontSize: "16px",
  },
  region: {
    fontWeight: "500",
    fontSize: "14px",
  },
  priceWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px"
  },
  price: {
    fontWeight: "700",
    fontSize: "16px",
    color: "#556789"
  }
}));

const PriceModal = ({ data, onClose }) => {
  let classes = styles();
  const { t } = useTranslation();

  return (
    <>
      <Dialog
        fullScreen
        open
        classes={{ paper: classes.paper }}
        scroll="body"
        maxWidth="xs"
      >
        <DialogContent>
          <div className={classes.imageContainer}>
            <Avatar
              variant="square"
              className={classes.avatar}
              src={data.image_url}
            />
            <div className={classes.nameWrapper}>
              <Typography className={classes.name}>{data.name}</Typography>
              <Typography className={classes.region} color="textSecondary">
                {data.region}
              </Typography>
            </div>
          </div>
          <Typography className={classes.pricing}>{t("pricing")}</Typography>
          <div className={classes.priceWrapper}>
              <Typography className={classes.name} color="textSecondary">{`1 ${t("week")} - 1 ${t("month")}`}</Typography>
              <Typography className={classes.price}>
                {`$ ${(data.price/10).toFixed(2)}`}
              </Typography>
            </div>
            <div className={classes.priceWrapper}>
              <Typography className={classes.name} color="textSecondary">{`6 ${t("months")}`}</Typography>
              <Typography className={classes.price}>
                {`$ ${(data.price/10).toFixed(2)}`}
              </Typography>
            </div>
            <div className={classes.priceWrapper}>
              <Typography className={classes.name} color="textSecondary">{`1 ${t("year")}`}</Typography>
              <Typography className={classes.price}>
              {`$ ${data.price.toFixed(2)}`}
              </Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "center"}}>
          <Button
            onClick={onClose}
            color="secondary"
            className={classes.ctaBtn}
            variant="outlined"
          >
            <Typography>{t("close")}</Typography>
          </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PriceModal;
