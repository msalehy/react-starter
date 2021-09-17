import React, { useContext } from "react";
import { StateContext } from "../context/AppContext";

const AboutPage = () => {
  const state = useContext(StateContext);
  return (
    <div>
      about page
      <br />
      state context testing :::::::::******
      <strong>{state.testData}</strong> *******
    </div>
  );
};

export default AboutPage;
