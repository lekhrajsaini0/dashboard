import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./TeamCard.module.css";

const TeamCard = ({ image, name, position }) => {
  return (
    <div className={styles.card}>
      <Image
        priority
        src={image}
        alt="Follow us on Twitter"
        className={styles.img}
      />
      <h1 className={styles.name}>{name}</h1>
      <h4 className={styles.position}>{position}</h4>
      <Link className={styles.edit} href="/editInfo">
        Edit
      </Link>
    </div>
  );
};

export default TeamCard;
