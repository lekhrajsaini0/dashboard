import React from "react";
import styles from "./ResTable.module.css";

const tableHeader = ["Type", "Name", "Email", "Status", "Reply", "Date"];
const infos = [
  {
    type: "Subscriber",
    name: "Your name",
    email: "youremail@gmail.com",
    date: "23-01-2023",
  },
  {
    type: "Code Requester",
    name: "Your name",
    email: "youremail@gmail.com",
    status: "Pending",
    reply: "Pending",
    date: "23-01-2023",
  },
  {
    type: "Subscriber",
    name: "Your name",
    email: "youremail@gmail.com",
    date: "23-01-2023",
  },
  {
    type: "Subscriber",
    name: "Your name",
    email: "youremail@gmail.com",
    status: "Approved",
    reply: "Pending",
    date: "23-01-2023",
  },
  {
    type: "Subscriber",
    name: "Your name",
    email: "youremail@gmail.com",
    status: "Approved",
    reply: "Sent",
    date: "23-01-2023",
  },
];

const ResTable = () => {
  return (
    <div>
      <table className={styles.resTable}>
        <thead>
          <tr>
            {tableHeader.map((thead, i) => (
              <th key={i} className={styles.tabHead}>
                {thead}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {infos.map((info, i) => (
            <tr key={i}>
              <td className={styles.data}>{info.type}</td>
              <td className={styles.data}>{info.name}</td>
              <td className={styles.data}>{info.email}</td>
              <td
                className={
                  info.status === "Approved" ? styles.approve : styles.data
                }
              >
                {info.status ? info.status : "--"}
              </td>
              <td
                className={
                  info.reply === "Pending" ? styles.pending : styles.data
                }
              >
                {info.reply ? info.reply : "--"}
              </td>
              <td className={styles.data}>{info.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResTable;
