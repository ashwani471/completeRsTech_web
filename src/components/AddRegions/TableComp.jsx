import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  makeStyles,
  IconButton,
  Input,
} from "@material-ui/core";
import EmptyRow from "./EmptyRow";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// import { Edit } from "@material-ui/icons";
import Edit from "./Edit";
import DeleteRegion from "./UpdateRegion/DeleteRegion";
import UpdateRegion from "./UpdateRegion/UpdateRegion";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TableComp({ rows, companyid, handledelete, handleupdate }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [delOpen, setDelOpen] = useState(false);

  const handledelopen = () => setDelOpen(true);
  const handledelclose = () => setDelOpen(false);
  const handleupdateopen = () => setUpdateOpen(true);
  const handleUpdateClose = () => setUpdateOpen(false);

  const handleChange = (e) => {
    // console.log(e);
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
            <TableCell>S.No</TableCell>
            <TableCell align="left">Name of Region</TableCell>
            <TableCell align="left">Head Name</TableCell>
            <TableCell align="left">Contact Number</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {console.log(rows)} */}
          {Object.keys(rows).map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="left">{rows[row].RegionName}</TableCell>
              <TableCell align="left">{rows[row].Name}</TableCell>
              <TableCell align="left">{rows[row].MobNumber}</TableCell>
              <TableCell align="left">{rows[row].Email}</TableCell>
              <TableCell align="right">
                <IconButton
                  component="span"
                  // value={rows[row]}
                  onClick={handleChange}
                >
                  <MoreVertIcon />
                </IconButton>
                <Edit
                  anchorEl={anchorEl}
                  handleClose={handleClose}
                  handledelopen={handledelopen}
                  handleupdateopen={handleupdateopen}
                />
                <DeleteRegion
                  delopen={delOpen}
                  handledelclose={handledelclose}
                  regionid={rows[row].region_ID}
                  companyid={companyid}
                  handledelete={handledelete}
                />
                <UpdateRegion
                  updateopen={updateOpen}
                  formdat={rows[row]}
                  handleUpdateClose={handleUpdateClose}
                  companyid={companyid}
                  handleupdate={handleupdate}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {Object.keys(rows).length === 0 && <EmptyRow />}
    </>
  );
}

export default TableComp;
