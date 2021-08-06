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
import EmptyRow from "./EmptyRow";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// import AddWarehouse from "../AddWarehouse/StepperForm/AddWarehouse";
import { useSetRecoilState } from "recoil";
import { City, regionId } from "../GlobalComp/globalstates";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TableComp({ rows, companyid }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  let history = useHistory();

  const handleclose = () => {
    setOpen(false);
  };
  const setRegionId = useSetRecoilState(regionId);
  const setCity = useSetRecoilState(City);

  const handleclick = (region_id, city) => {
    // console.log("Clicked");
    // setOpen(true);
    setRegionId(region_id);
    setCity(city);
    history.push("/warehouse");
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
            <>
              <TableRow
                key={index}
                onClick={() =>
                  handleclick(rows[row].region_ID, rows[row].RegionName)
                }
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{rows[row].RegionName}</TableCell>
                <TableCell align="left">{rows[row].Name}</TableCell>
                <TableCell align="left">{rows[row].MobNumber}</TableCell>
                <TableCell align="left">{rows[row].Email}</TableCell>
                <TableCell align="right">
                  <MoreVertIcon />
                </TableCell>
              </TableRow>
              {/* <AddWarehouse
                open={open}
                city={rows[row].RegionName}
                regionid={rows[row].region_ID}
                companyid={companyid}
                handleclose={handleclose}
              /> */}
            </>
          ))}
        </TableBody>
      </Table>
      {Object.keys(rows).length === 0 && <EmptyRow />};
    </>
  );
}

export default TableComp;
