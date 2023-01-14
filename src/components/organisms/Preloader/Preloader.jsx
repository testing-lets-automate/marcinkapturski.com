import React, { useState, useEffect } from 'react';

export default function Preloader({children}) {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1600)
  }, []);

  return(
    <div id='mainpreloader'>
    {loading
      ? <div className='preloader fadeOut'>
          <div className="mainpreloader">
            <span></span>
          </div>
        </div>
      : children}
    </div>
  );
}