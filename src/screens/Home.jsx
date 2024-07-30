import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setStepper } from "../redux/slices/sharedSlice";

const Home = () => {
  const stepper = useSelector((state) => {
    console.log(state.stepper, "state data---");
    return state.stepper;
  });
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const updateVal = (item) => {
    console.log(item, "update item");

    dispatch(setStepper(item));
  };

  const handleNavigate = () => {
    let newval = count + 1;
    console.log(newval, "new wa;;;");
    setCount(newval);
    // let val = count;

    // console.log(val, "value----");
    // navigate("/contact-us");
    updateVal(newval);
  };
  return (
    <>
      <div>This is the Home page</div>

      <p>Stepper Count: {stepper}</p>
      {/* <p>Stepper Count: {count}</p> */}

      <Button onClick={handleNavigate}>Contact Us</Button>
    </>
  );
};

export default Home;
