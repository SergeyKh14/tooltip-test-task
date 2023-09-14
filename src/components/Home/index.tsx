import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Button } from 'antd';
import ScheduleDetailsPopup from './ScheduleDetailsPopup';

const Home = () => {
  const [popupState, setPopupState] = useState(false);

  const handleClick = () => {
    setPopupState(true);
  };

  return (
    <>
      <div className={styles.home_section}>
        {popupState ? (
          <ScheduleDetailsPopup setPopupState={setPopupState} />
        ) : (
          <>
            <div className={styles.open_box}>
              <Button onClick={handleClick}>Open</Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
