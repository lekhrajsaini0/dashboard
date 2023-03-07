import TeamAll from "@/components/Team/TeamAll";
import useTitle from "@/hooks/useTitle";
import React from "react";

const team = () => {
  useTitle("Team");
  return (
    <div>
      <TeamAll />
    </div>
  );
};

export default team;
