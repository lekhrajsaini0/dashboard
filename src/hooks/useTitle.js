import React, { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    const nav = document.getElementById("navTitle");
    nav.innerText = title;
  }, [title]);
};

export default useTitle;
