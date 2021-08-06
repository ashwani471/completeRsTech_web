import React from "react";
import Home from "../Home";
import { Dialog, DialogContent } from "@material-ui/core";
import { useRecoilValue } from "recoil";
import { City, companyId, regionId } from "../../../GlobalComp/globalstates";

const AddWarehouse = ({ open, handleclose }) => {
  const regionid = useRecoilValue(regionId);
  const companyid = useRecoilValue(companyId);
  const city = useRecoilValue(City);

  return (
    <>
      <Dialog
        open={open}
        onClose={handleclose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullScreen={true}
        fullWidth={true}
      >
        <DialogContent>
          <Home
            city={city}
            regionid={regionid}
            companyid={companyid}
            handleclose={handleclose}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddWarehouse;
