import React from "react";
import { Icon, Button } from "atomize";

const IconSetting = ({name, link}) => {

  return (
      <Button
        h="3rem"
        w="100%"
        bg="white"
        rounded="10px"
        m="auto"
        transition
        onClick={() => window.open(link)}
      >
        <Icon name={name} size="25px" color="black500" hoverColor="black900" transition/>
      </Button>
  );
};

export default IconSetting;
