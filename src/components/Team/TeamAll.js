import React from "react";
import img from "../../assets/image/AK_2022_11_08_309.png";
import TeamCard from "../TeamCard/TeamCard";
import styles from "./TeamAll.module.css";

const members = [
  {
    name: "Aanchal Kalra",
    image: img,
    position: "Founder",
  },
  {
    name: "Aanchal Kalra",
    image: img,
    position: "Founder",
  },
  {
    name: "Aanchal Kalra",
    image: img,
    position: "Web Developer",
  },
  {
    name: "Aanchal Kalra",
    image: img,
    position: "App developer",
  },
  {
    name: "Aanchal Kalra",
    image: img,
    position: "HR",
  },
  {
    name: "Aanchal Kalra",
    image: img,
    position: "Founder",
  },
  {
    name: "Aanchal Kalra",
    image: img,
    position: "Founder",
  },
  {
    name: "Aanchal Kalra",
    image: img,
    position: "Founder",
  },
];

const TeamAll = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.members}>{members.length} Members</h1>
      <div className={styles.teamGrid}>
        {members.map((member, i) => (
          <div key={i} className={styles.gridItem}>
            <TeamCard
              image={member.image}
              name={member.name}
              position={member.position}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamAll;
