import React from 'react';

const MapClique: React.FC = () => {
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
