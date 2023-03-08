import Edit from "@/components/Edit/Edit";
import useTitle from "@/hooks/useTitle";
import { useRouter } from "next/router";
import React from "react";

const editInfo = () => {
  useTitle("Team");
  const router = useRouter();

  const data = router.query;

  return (
    <div>
      <Edit data={data} />
    </div>
  );
};

export default editInfo;
