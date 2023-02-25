import React from "react";
import styles from "./SubscriptionTab.module.css";

const tableHeader = ["Email ID", "Subscribe/Unsubscribe", "Send Email"];
const infos = [
  {
    email: "youremail@gmail.com",
    subscribe: "why this field?",
    status: "Pending",
  },
];

const SubscriptionTab = () => {
  return (
    <div className={styles.tab}>
      <div>
        <div>
          <div className={styles.tabHeadTr}>
            <div className={styles.tabHead}>
              <input type="checkbox" name="" id="" className={styles.dataBox} />
            </div>
            {tableHeader.map((thead, i) => (
              <h3 key={i} className={styles.tabHead}>
                {thead}
              </h3>
            ))}
          </div>
        </div>
        <div className={styles.tabBody}>
          {infos.map((info, i) => (
            <div key={i} className={styles.tabRow}>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={styles.dataBox}
                />
              </div>
              <p>{info.email}</p>
              <p>{info.subscribe}</p>
              <p
                className={
                  info.status === "Approved"
                    ? styles.approved
                    : info.status === "Pending"
                    ? styles.pending
                    : styles.denied
                }
              >
                {info.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionTab;
