import React from "react";
import Link from "next/link";
import { Icon, Button } from "atomize";
import { usePathname } from 'next/navigation'

const IconNav = ({ name, route }) => {
  const pathname = usePathname()

  return (
    <Link href={route} passHref>
      <Button
        h="3rem"
        w="100%"
        bg={pathname === route ? (pathname === "/funding" ? "brand100" : "gray200") : "white"}
        hoverBg={pathname === route ? (pathname === "/funding" ? "brand100" : "gray200") : "gray200"}
        rounded="10px"
        m="1em auto 1em"
        transition
      >
        <Icon name={name} size="25px" color={pathname === route ? (pathname === "/funding" ? "brand800" : "black500") : "gray600"} />
      </Button>
    </Link>
  );
};

export default IconNav;
