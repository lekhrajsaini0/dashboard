import Notifications from "@/components/Notifications/Notifications";
import useTitle from "@/hooks/useTitle";
import React from "react";

const Notification = () => {
  useTitle("Notification");
  return (
    <div>
      <Notifications />
    </div>
  );
};

export default Notification;
