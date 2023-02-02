import { useState } from "react";

function useNetworkStatus() {
  const [online, setOnline] = useState(true);

  function isOnline(){
    return false
  }
  return {
    online,
    setOnline,
    isOnline
  };
}

export default useNetworkStatus;
