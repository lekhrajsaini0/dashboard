import React from "react";
import styles from "./InvitationTab.module.css";

const tableHeader = ["Requester Name", "Message", "Status"];
const infos = [
  {
    name: "Your Name Here",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    status: "Pending",
  },
  {
    name: "Your Name Here",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    status: "Approved",
  },
  {
    name: "Your Name Here",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    status: "Denied",
  },
];

const InvitationTab = () => {
  return (
    <div className={styles.tab}>
      <table>
        <thead>
          <tr className={styles.tabHeadTr}>
            {tableHeader.map((thead, i) => (
              <th key={i} className={styles.tabHead}>
                {thead}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {infos.map((info, i) => (
            <tr key={i} className={styles.tabRow}>
              <td>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={styles.dataBox}
                />
                {info.name}
              </td>
              <td className={styles.message}>{info.message}</td>
              <td
                className={
                  info.status === "Approved"
                    ? styles.approved
                    : info.status === "Pending"
                    ? styles.pending
                    : styles.denied
                }
              >
                {info.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvitationTab;
