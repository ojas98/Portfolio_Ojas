import React from 'react';

const Loader: React.FC<{ onLoaderEnd: () => void }> = ({ onLoaderEnd }) => {
        const handleVideoEnd = () => {
          // Call the onLoaderEnd function when the video ends
          onLoaderEnd();
        };
    
  return (
    <div className="loader">
    <video autoPlay muted onEnded={handleVideoEnd}>
      <source src="/videoload.mp4" type="video/mp4" />
    </video>
  </div>
  );
};

export default Loader;
