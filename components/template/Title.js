import React from "react";
import { Div, Text } from "atomize";

const Title = ({ children, label, pre, size }) => {
  return (
    <Div m={{ t: "5em" }}>
      <div className="path">
        <Text textSize="subheader" textWeight="500">
          {pre}
        </Text>
      </div>
      <Text textSize={size} m={{ b: "20px", t: "20px" }} textWeight="550">
        {children}
      </Text>
      <Text textSize="subheader" w={{xs: "90%", md:"50%"}} m={{ b: "2em" }}>
        {label}
      </Text>
      <hr className="seperate"/>
    </Div>
  );
};

export default Title;
