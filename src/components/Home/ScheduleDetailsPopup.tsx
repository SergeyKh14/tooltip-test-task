/* eslint-disable camelcase */
import React, { FC } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { DatePicker, TimePicker } from 'antd';
import dayjs from 'dayjs';

type ScheduleDetailsPopupInterface = {
  setPopupState: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleDetailsPopup: FC<ScheduleDetailsPopupInterface> = ({ setPopupState }) => {
  return (
    <>
      <div className={styles.schedule_details_popup}>
        <div className={styles.popup_section}>
          <Image
            onClick={() => setPopupState(false)}
            className={styles.close_icon}
            src="/img/close-icon.svg"
            width={41}
            height={41}
            unoptimized
            alt="Picture of the author"
          />{' '}
          <p>Schedule Details</p>
          <div className={styles.empty_div}></div>
        </div>
        <div className={styles.schedule_box}>
          <div className={styles.schedule_child_box}>
            <p className={styles.schedule_text}>Starts</p>
            <div>
              <DatePicker
                className={styles.picker_box}
                allowClear={false}
                defaultValue={dayjs()}
                suffixIcon={null}
                format={'MMM DD, YYYY'}
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M21.029 11.6929L14.9502 17.7717C14.5017 18.2202 13.7745 18.2202 13.326 17.7717L7.24723 11.6929"
                  stroke="#C9C9C9"
                  strokeWidth="2.58407"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className={styles.line}>-</p>
            <div>
              <TimePicker allowClear={false} suffixIcon={null} placeholder="Set Time" />
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M21.029 11.6929L14.9502 17.7717C14.5017 18.2202 13.7745 18.2202 13.326 17.7717L7.24723 11.6929"
                  stroke="#C9C9C9"
                  strokeWidth="2.58407"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className={styles.schedule_child_box}>
            <p className={styles.schedule_text}>End</p>
            <div>
              <DatePicker
                className={styles.picker_box}
                allowClear={false}
                defaultValue={dayjs()}
                suffixIcon={null}
                format={'MMM DD, YYYY'}
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M21.029 11.6929L14.9502 17.7717C14.5017 18.2202 13.7745 18.2202 13.326 17.7717L7.24723 11.6929"
                  stroke="#C9C9C9"
                  strokeWidth="2.58407"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className={styles.line}>-</p>
            <div>
              <TimePicker allowClear={false} suffixIcon={null} placeholder="Set Time" />
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M21.029 11.6929L14.9502 17.7717C14.5017 18.2202 13.7745 18.2202 13.326 17.7717L7.24723 11.6929"
                  stroke="#C9C9C9"
                  strokeWidth="2.58407"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <textarea placeholder="Notes" />
          <button onClick={() => setPopupState(false)}>Save</button>
        </div>
      </div>
    </>
  );
};

export default ScheduleDetailsPopup;
