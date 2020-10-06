import React, { useState } from 'react';
import classNames from 'classNames/bind';
import DateTimePickerField from '../../../DateTimePickerField';
import styles from './DateTimePicker.test.module.scss';

const cx = classNames.bind(styles);

const DateTimePickerFieldDefault = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [isIncomplete, setIsIncomplete] = useState(false);
  const [required, setRequired] = useState(false);

  const handleInvalidButtonClick = () => {
    setIsInvalid(!isInvalid);
  };

  const handleIncompleteButtonClick = () => {
    setIsIncomplete(!isIncomplete);
    setRequired(!required);
  };

  return (
    <div className={cx('content-wrapper')}>
      <button type="button" id="validity-toggle" onClick={handleInvalidButtonClick}>Toggle Validity</button>
      <button type="button" id="incomplete-toggle" onClick={handleIncompleteButtonClick}>Toggle Incomplete</button>
      <DateTimePickerField
        dateTimePickerId="dateTimePicker"
        name="date-time-picker"
        label="Enter Date and Time"
        isInvalid={isInvalid}
        isIncomplete={isIncomplete}
        required={required}
        error="Error message."
        help="Help Message."
      />
    </div>
  );
};

export default DateTimePickerFieldDefault;
