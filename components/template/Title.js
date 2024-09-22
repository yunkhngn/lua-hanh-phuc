import React from "react";
import { Div, Text } from "atomize";

const Title = ({ children, label }) => {
  return (
    <Div w="70%" m="5em auto 0">
      <Text textSize="display3" m={{ b: "20px" }} textWeight="550">{children}</Text>
      <Text textSize="subheader" w="70%" m={{ b: "5em" }}>
        {label}
      </Text>
    </Div>
  );
};

export default Title;
