import React, { useEffect, useState } from "react";

const useCheckMobileScreen = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width <= 1000;
};

export default useCheckMobileScreen;
