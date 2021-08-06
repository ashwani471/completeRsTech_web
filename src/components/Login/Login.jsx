import React, { useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom";

import Form6 from "./Forms/form6";
import Form7 from "./Forms/form7";
import Form8 from "./Forms/form8";
import { useEffect } from "react";
import { useHistory } from "react-router";

const Login = ({ handlesignin, handleUser }) => {
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(0);

  let history = useHistory();

  const InputEvent = (e) => {
    setNumber(e.target.value);
  };

  const onNext = () => {
    setFlag(flag + 1);
  };

  useEffect(() => {
    if (flag == 3) {
      axios
        .get(`http://127.0.0.1:5000/login?MobNo=${number}`)
        .then((res) => {
          console.log(res.data);

          handlesignin();
          handleUser(res.data);

          history.push("/dashboard");
        })
        .catch((err) => console.log(err));
    }
  }, [flag]);

  return (
    <>
      {flag == 0 && (
        <Form6 number={number} onNext={onNext} onChange={InputEvent} />
      )}

      {flag == 1 && <Form7 number={number} onNext={onNext} />}

      {flag == 2 && <Form8 onNext={onNext} />}
      {/* {flag == 3 && <Form10 onNext={onNext} />} */}
      {/* <Form /> */}
    </>
  );
};

export default Login;
