import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import Empty from "../AddLoads/Empty";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// import { Edit } from "@material-ui/icons";
import Edit from "../AddRegions/Edit";
import DeleteTruck from "./DeleteTruck";
import UpdateTruckForm from "./UpdateTruckForm";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TableComp({ rows, companyid }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [delOpen, setDelOpen] = useState(false);

  const handledelopen = () => setDelOpen(true);
  const handledelclose = () => setDelOpen(false);
  const handleupdateopen = () => setUpdateOpen(true);
  const handleUpdateClose = () => setUpdateOpen(false);

  const handleChange = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    console.log("Closing...");
    setAnchorEl(null);
  };
  return (
    <>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Truck Type</TableCell>
            <TableCell align="left">Payload</TableCell>
            <TableCell align="left">Wheels</TableCell>
            <TableCell align="left">Length(Ft)</TableCell>
            <TableCell align="left">Height(Ft)</TableCell>
            <TableCell align="left">Breadth(ft)</TableCell>
            <TableCell align="left">Volume(Cuft)</TableCell>
            <TableCell align="left">Body Type</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {console.log(rows)} */}
          {Object.keys(rows).map((row, index) => (
            <TableRow key={index}>
              {/* <TableCell component="th" scope="row">
                {index + 1}
              </TableCell> */}
              <TableCell align="left">{rows[row].TruckType}</TableCell>
              <TableCell align="left">{rows[row].PayLoad}</TableCell>
              <TableCell align="left">{rows[row].Wheels}</TableCell>
              <TableCell align="left">{rows[row].Length}</TableCell>
              <TableCell align="left">{rows[row].Height}</TableCell>
              <TableCell align="left">{rows[row].Breadth}</TableCell>
              <TableCell align="left">{rows[row].Breadth}</TableCell>
              <TableCell align="left">{rows[row].BodyType}</TableCell>
              <TableCell align="right">
                <IconButton component="span" onClick={handleChange}>
                  <MoreVertIcon />
                </IconButton>
                <Edit
                  anchorEl={anchorEl}
                  handleClose={handleClose}
                  handledelopen={handledelopen}
                  handleupdateopen={handleupdateopen}
                />
                <DeleteTruck
                  delopen={delOpen}
                  truckid={rows[row].TruckID}
                  handledelclose={handledelclose}
                  companyid={companyid}
                />
                <UpdateTruckForm
                  truckid={rows[row].TruckID}
                  updateopen={updateOpen}
                  formdat={rows[row]}
                  handleUpdateClose={handleUpdateClose}
                  companyid={companyid}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {Object.keys(rows).length === 0 && <Empty />}
    </>
  );
}

export default TableComp;
