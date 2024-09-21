import React from "react";
import { Icon, Button } from "atomize";

const IconSetting = ({name, func}) => {

  return (
      <Button
        h="3rem"
        w="100%"
        bg="white"
        rounded="10px"
        m="auto"
        transition
        onClick={func}
      >
        <Icon name={name} size="25px" color="black500" hoverColor="black900" transition/>
      </Button>
  );
};

export default IconSetting;
