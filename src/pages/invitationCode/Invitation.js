import InvitationCode from "@/components/InvitationCode/InvitationCode";
import useTitle from "@/hooks/useTitle";
import React from "react";

const Invitation = () => {
  useTitle('Invitation Code')
  return (
    <div>
      <InvitationCode></InvitationCode>
    </div>
  );
};

export default Invitation;
