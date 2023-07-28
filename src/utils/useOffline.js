import { useEffect, useState } from "react";

 const Offline = () => {
  const [isOnline, setIsOnline] = useState(true);

useEffect(() => {
    const LoadOnline = () => {
      setIsOnline(true);
    }
    const LoadOffline = () => {
      setIsOnline(false);
    }
    window.addEventListener("Online", LoadOnline);
    window.addEventListener("Offline", LoadOffline);

    return () => {
      window.removeEventListener("online", LoadOnline);
      window.removeEventListener("offline", LoadOffline);
    }
  }, []);
  return isOnline;
}

export default Offline;