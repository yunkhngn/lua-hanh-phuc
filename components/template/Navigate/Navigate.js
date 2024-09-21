import React from "react";
import styles from "@/styles/Navigate.module.css";
import Image from "next/image";
import IconNav from "./IconNav";
import IconSetting from "./IconSetting";
import Link from "next/link";
import { navRoute } from "../../lib";

const Navigate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
        </Link>
      </div>
      <div className={styles.nav}>
        {navRoute.map((item, index) => (
          <IconNav key={index} name={item.name} route={item.route} />
        ))}
      </div>
      <div className={styles.setting}>
        <IconSetting name="Facebook" />
        <IconSetting name="Menu" />
      </div>
    </div>
  );
};

export default Navigate;
