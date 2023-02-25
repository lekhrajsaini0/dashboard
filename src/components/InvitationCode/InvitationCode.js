import React from "react";
import styles from "./InvitationCode.module.css";
import Image from "next/image";
import icon from "../../assets/icons/Group 1000002332.svg";
import InvitationTab from "./InvitationTab";

const InvitationCode = () => {
  return (
    <div className={styles.invitation}>
      <div className={styles.approve}>
        <input type="checkbox" name="approve" id="approve" />
        <h4>Approve</h4>
        <Image
          priority
          src={icon}
          height={15}
          width={15}
          alt="Follow us on Twitter"
        />
      </div>
      <InvitationTab />
    </div>
  );
};

export default InvitationCode;
