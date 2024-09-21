import React from "react";
import { useState } from "react";
import { Icon, Button, Div } from "atomize";
import Link from "next/link";

const NavMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        h="3rem"
        w="100%"
        bg="white"
        rounded="10px"
        m="auto"
        onClick={() => setOpen(!open)}
        transition
      >
        <Icon
          name={open ? "Cross" : "Menu"}
          size="25px"
          color="black500"
          hoverColor="black900"
          transition
        />
      </Button>
      <Div
        pos="fixed"
        w="50vw"
        m={{ t: "1.5em", r: "0.5em" }}
        right="0"
        d={{ xs: open ? "flex" : "none", md: "none" }}
        flexDir="column"
        textAlign="center"
        p="10px"
        border="1px solid"
        borderColor="gray300"
        rounded="xl"
      >
        <Button
          bg="white"
          textColor="black500"
          m="0.5em"
          w="100%"
          transition
          justify="flex-start"
          onClick={() => window.open("https://www.facebook.com/yun.khngn/")}
        >
          <Icon
            name="Facebook"
            color="black500"
            size="20px"
            m={{ r: "1.5em" }}
          />
          <p>Facebook</p>
        </Button>
        <Button
          bg="white"
          textColor="black500"
          m="0.5em"
          w="100%"
          transition
          justify="flex-start"
          onClick={() => window.location.href = "mailto:suoiam.project@gmail.com"}
        >
          <Icon
            name="Email"
            color="black500"
            size="20px"
            m={{ r: "1.5em" }}
          />
          <p>Mail</p>
        </Button>
      </Div>
    </div>
  );
};

export default NavMobile;
