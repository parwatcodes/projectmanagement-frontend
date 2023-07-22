import React from 'react';

import BulbIcon from '../images/icons/bulb.svg';
import EclipseIcon from '../images/icons/eclipse.svg';

const Widget = () => {

  return (
    <div style={{
      position: 'absolute',
      maxWidth: '238px',
      bottom: 20
    }}>
      <div className='widget-main'>
        <div className='bulb-wrap'>
          {/* <img id='eclipse' src={EclipseIcon} alt=''/> */}
          <img id='bulb' src={BulbIcon} alt='' />
        </div>
        <div className='widget-wrapper'>
          <div className='widget-h2'>Thoughts Time</div>
          <div className='widget-description'>
            We don’t have any notice for you, till then you can share your thoughts with your peers.
          </div>
          <div className='widget-action'>
            Write a message
          </div>
        </div>
      </div>
    </div>

  );
};

export default Widget;
