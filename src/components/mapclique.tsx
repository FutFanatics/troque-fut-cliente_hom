import { useEffect, useState } from "react";
import React from 'react';

interface MapCliqueProps{
  updatelocker:(locker:string)=> void;
}

const MapClique: React.FC<MapCliqueProps> = ({
  updatelocker,
}) => {
  const [locker, setLocker] = useState<any>(null);

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data.length > 0) {
        const parsedLocker = JSON.parse(e.data);
        setLocker(parsedLocker.orderNo);
        updatelocker(locker)
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className="container mt-4">
      <iframe
        title="Embedded Map"
        src="https://webview.cliqueretire.com.br/map?tags=MEFDCMG,MEFDC"
        width="100%"
        height="600px" 
        frameBorder={0}
        allowFullScreen
      ></iframe>
    </div>
  );

};

export default MapClique;
