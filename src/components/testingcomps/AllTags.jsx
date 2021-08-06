import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  tags: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#424242",
    fontSize: "14px",
    // padding: "6px 12px",
    fontWeight: 400,
    borderRadius: "50px",
    // background: "#eee",
    border: "1px solid grey",
    height: "3rem",
    marginBottom: "10px",
    marginRight: "5px",
    cursor: "Pointer",
    // cursor: pointer;
    // text-decoration: none;
  },
  selectd_tags: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    background: "blue",
    fontSize: "14px",
    // padding: "6px 12px",
    height: "3rem",
    fontWeight: 400,
    borderRadius: "50px",
    border: "1px solid grey",

    marginBottom: "10px",
    marginRight: "5px",
    cursor: "Pointer",
  },
  tagscontain: {
    border: "1px solid #e8e8e8",
    borderRadius: "10px",
    padding: "15px",
  },
});

const tags = [
  "Aerospace",
  "Agriculture",
  "Construction",
  "Defense",
  "Education",
  "energy",
  "Aerospace",
  "Agriculture",
  "Construction",
  "Defense",
  "Education",
  "Energy",
];

function AllTags({ formhandlechange }) {
  const [selectedtags, setSelectedtags] = useState([]);
  const classes = useStyles();

  const handlechange = (e) => {
    // setSelectedtags(Array.isArray(e) ? e.map((x) => x.value) : []);
    let filt_arr = [];
    let temp_tag = e.target.innerHTML;
    if (!selectedtags.includes(temp_tag)) {
      setSelectedtags((selectedtags) => [...selectedtags, temp_tag]);
      // console.log("Arbaz");
    } else {
      filt_arr = selectedtags.filter((e) => e !== temp_tag);
      setSelectedtags(filt_arr);
      //   console.log(selectedtags);
    }
  };
  useEffect(() => {
    formhandlechange("industry_tags", selectedtags);
  }, [selectedtags]);

  return (
    <Grid container style={{ marginTop: "-20px" }}>
      <Grid item xs={12} style={{ marginBottom: "10px" }}>
        <Typography variant="p">
          Please select one or more of your Industry Verticals
        </Typography>
      </Grid>
      <Grid container className={classes.tagscontain}>
        {tags.map((tag, index) => {
          let className = classes["tags"];
          if (selectedtags.includes(tag)) {
            className = classes["selectd_tags"];
          }
          return (
            <Grid
              item
              xs={6}
              md={3}
              key={index}
              className={className}
              component="div"
              onClick={handlechange}
            >
              {tag}
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default AllTags;
