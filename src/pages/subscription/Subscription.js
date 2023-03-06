import SubscriptionTab from "@/components/SubscriptionTab/SubscriptionTab";
import useTitle from "@/hooks/useTitle";
import React from "react";

const Subscription = () => {
  useTitle("Subscription");
  return (
    <div>
      <SubscriptionTab></SubscriptionTab>
    </div>
  );
};

export default Subscription;
