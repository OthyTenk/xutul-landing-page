import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    if (window.location.href.includes("guide/")) {
      window.location.href = window.location.href.replace("guide/", "guide");
    }
  }, []);
  return <div>Таны хайсан зүйл олдсонгүй ..</div>;
};

export default NotFound;
