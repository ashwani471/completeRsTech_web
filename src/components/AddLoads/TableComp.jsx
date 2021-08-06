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
import Empty from "./Empty";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// import { Edit } from "@material-ui/icons";
import Edit from "./Edit";
import DeleteLoad from "./DeleteLoad";
import UpdateLoadForm from "./UpdateLoadForm";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TableComp({ rows, companyid, handledelete }) {
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
            <TableCell align="left">Product Name</TableCell>
            <TableCell align="left">Weight(Kg)</TableCell>
            <TableCell align="left">Length(ft</TableCell>
            <TableCell align="left">Height(ft)</TableCell>
            <TableCell align="left">Breadth(ft)</TableCell>
            <TableCell align="left">Volume(Cuft)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {console.log(rows)} */}
          {Object.keys(rows).map((row, index) => (
            <TableRow key={index}>
              {/* <TableCell component="th" scope="row">
                {index + 1}
              </TableCell> */}
              <TableCell align="left">{rows[row].ProductName}</TableCell>
              <TableCell align="left">{rows[row].weight}</TableCell>
              <TableCell align="left">{rows[row].Length}</TableCell>
              <TableCell align="left">{rows[row].Height}</TableCell>
              <TableCell align="left">{rows[row].Breadth}</TableCell>
              <TableCell align="left">{rows[row].volume}</TableCell>
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
                <DeleteLoad
                  delopen={delOpen}
                  loadid={rows[row].LoadID}
                  handledelclose={handledelclose}
                  regionid={rows[row].region_ID}
                  companyid={companyid}
                  handledelete={handledelete}
                />
                <UpdateLoadForm
                  loadid={rows[row].LoadID}
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
