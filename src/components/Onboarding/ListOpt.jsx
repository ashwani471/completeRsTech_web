import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const Data = [
  {
    heading: "Define Architecture",
    text: "Here you will enter the details of the Regions, Warehouses, Distribution centers, Retailer's location of your network.",
    number: "1",
    link: "/architecture",
  },
  {
    heading: "Define Loads",
    text: "Here You will enter the details of the loads which you are moving.",
    number: "2",
    link: "/load",
  },
  {
    heading: "Define Truck Types",
    text: "Here You will enter the details of the Trucks Type what you are using.",
    number: "3",
    link: "/truck",
  },
  {
    heading: "Define Load families",
    text: "hey  akks akjgks kjgkasdn hkaad kgkad kjgskdhla kjgkdqwh ",
    number: "4",
    link: "/#",
  },
  {
    heading: "Define Architecture",
    text: "hey  akks akjgks kjgkasdn hkaad kgkad kjgskdhla kjgkdqwh ",
    number: "5",
    link: "/#",
  },
];

const ListOpt = () => {
  const history = useHistory();

  const handleclick = (lin) => {
    history.push(lin);
    // console.log(lin);
  };

  return (
    <div id="outerDiv">
      {Data.map((data) => {
        return (
          <div className="components" onClick={() => handleclick(data.link)}>
            <div id="number">{data.number}</div>
            <div>
              <h3>{data.heading}</h3>
              <p>{data.text}</p>
            </div>
            <div id="arrow">
              <i class="fas fa-chevron-right" id="rightArw"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListOpt;
