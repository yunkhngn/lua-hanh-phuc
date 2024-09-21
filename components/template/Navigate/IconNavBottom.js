import React from "react";
import Link from "next/link";
import { Icon, Button } from "atomize";
import { usePathname } from 'next/navigation'

const IconNavBottom = ({ name, route }) => {
  const pathname = usePathname()

  return (
    <Link href={route} passHref>
      <Button
        h="3rem"
        w="100%"
        bg="transparent"
        rounded="10px"
        transition
      >
        <Icon name={name} size="25px" color={pathname === route ? "black500" : "gray600"} />
      </Button>
    </Link>
  );
};

export default IconNavBottom;
