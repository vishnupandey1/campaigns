import React, { useState } from "react";
import moment from "moment";
import 'moment/locale/de'

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Loader from "@material-ui/core/CircularProgress";
import { useTranslation } from "react-i18next";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { isMobile, getTime, getCurrentLanguage } from "../../utils/helper";
import ResponsiveList from "./responsiveList";
import ActionTag from "../components/actionTag";
import NameTag from "../components/nameTag";
import PriceTag from "../components/priceTag";

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: "#F1F1F4",
    color: "#556789",
    fontSize: 16,
    fontWeight: 500,
  },
  body: {
    margin: "20px",
    maxHeight: "90px",
  },
}))(TableCell);

const useStyles = makeStyles({
  container: {
    minWidth: 700,
    minHeight: "90px",
    maxHeight: "600px",
  },
  tableBody: {
    height: "90px",
  },
  loader: {
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  time: {
    fontSize: "14px",
    fontWeight: "400",
  },
});

const headerMeta = [
  { label: "date", align: "left", minWidth: "15%" },
  { label: "cmp", align: "left", minWidth: "30%" },
  { label: "view", align: "left", minWidth: "15%" },
  { label: "action", align: "left", minWidth: "40%" },
];

const CampaignList = ({ campaigns, setCampaigns, tabName, loader }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const lang = getCurrentLanguage()
  moment.locale(lang)

  const [openPicker, setOpenPicker] = useState(false);
  const currentTime = moment().format("x");
  const startEndTime = moment().endOf("day").format("x");

  // filter campaign on basis to tab
  let filteredcampaigns = campaigns.filter((el) => {
    switch (tabName) {
      case "schedule":
        return el.created_on > startEndTime;
      case "live":
        return el.created_on >= currentTime && el.created_on <= startEndTime;
      case "past":
        return el.created_on < currentTime;
      default:
        return false;
    }
  });

  // closing the date time picker
  const onClosePicker = () => {
    setOpenPicker(null);
  };

  // Updating the created_on time of camaign
  const handleDateChange = (value) => {
    const createdDate = value.getTime();
    let updatedCampaigns = [...campaigns];
    const index = updatedCampaigns.findIndex((el) => el.id === openPicker);
    updatedCampaigns[index].created_on = createdDate;
    setCampaigns(updatedCampaigns);
  };

  if (loader) {
    return <Loader className={classes.loader} />;
  }

  return (
    <>
      {isMobile ? (
        <ResponsiveList
          campaigns={filteredcampaigns}
          setOpenPicker={setOpenPicker}
        />
      ) : (
        <>
          {filteredcampaigns.length > 0 ? (
            <TableContainer component={Paper} className={classes.container}>
              <Table stickyHeader aria-label="customized table">
                <TableHead>
                  <TableRow>
                    {headerMeta.map((column) => (
                      <StyledTableCell
                        key={column.label}
                        align={column.align}
                        style={{
                          maxWidth: column.minWidth,
                          width: column.minWidth,
                        }}
                      >
                        {t(column.label)}
                      </StyledTableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredcampaigns.map((row) => (
                    <TableRow key={row.id}>
                      <StyledTableCell component="th" scope="row">
                        <div>
                          <Typography>
                            {moment(row.created_on).format("MMM Y, DD")}
                          </Typography>
                          <Typography
                            className={classes.time}
                            color="textSecondary"
                          >
                            {getTime(row.created_on)}
                          </Typography>
                        </div>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <NameTag row={row} />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <PriceTag row={row} />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <ActionTag row={row} setOpenPicker={setOpenPicker} />
                      </StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Typography variant="h4"> No campaign found.</Typography>
          )}
        </>
      )}
      {openPicker && (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            onClose={onClosePicker}
            open
            inputVariant="outlined"
            onChange={handleDateChange}
          />
        </MuiPickersUtilsProvider>
      )}
    </>
  );
};

export default CampaignList;
