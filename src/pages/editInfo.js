import Edit from "@/components/Edit/Edit";
import useTitle from "@/hooks/useTitle";
import React, { useState } from "react";

const editInfo = () => {
  useTitle("Team");

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [quote, setQuote] = useState("");
  return (
    <div>
      <Edit />
    </div>
  );
};

export default editInfo;
