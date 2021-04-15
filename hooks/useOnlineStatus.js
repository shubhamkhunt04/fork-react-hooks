import { useEffect, useState } from 'react';

const useOnlineStatus = () => {
  const [online, setOnline] = useState(navigator.onLine)

  useEffect(() => {
    setOnline(navigator.onLine)
    window.addEventListener('online',()=>setOnline(true))
    window.addEventListener('offline',()=>setOnline(false))

    return () => {
      // cleanup event listener
      window.removeEventListener('online', setOnline(true));
      window.removeEventListener('offline', setOnline(false));
    };
  }, [])
  return online
};

export default useOnlineStatus;
