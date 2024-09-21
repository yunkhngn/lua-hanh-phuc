import React from "react";
import styles from "@/styles/Navigate.module.css";

import IconNavBottom from "./IconNavBottom";

import { navRoute } from "../../lib";

const NavBottom = () => {
  return (
    <nav className={styles.containerBottom}>
        {navRoute.map((item, index) => (
          <IconNavBottom key={index} name={item.name} route={item.route} />
        ))}
    </nav>
  );
};

export default NavBottom;
