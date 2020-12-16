import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from 'terra-date-time-picker/lib/DateTimePicker';
import DateTimeUtils from '../../DateTimeUtils';

const propTypes = {
  /**
   * The current entered date time. Use for the selected date message.
   */
  value: PropTypes.string,
};

const defaultProps = {
  value: '',
};

const DatePickerExample = (props) => {
  let dateTimeDisplay = props.value;
  const safeDateTime = DateTimeUtils.createSafeDate(dateTimeDisplay);

  if (safeDateTime && safeDateTime.isValid()) {
    dateTimeDisplay = safeDateTime.format();
  }

  const [dateTime, setDateTime] = useState(dateTimeDisplay);

  const handleDateTimeChange = (event, dateTimeValue) => {
    setDateTime(dateTimeValue);
  };

  return (
    <div>
      <p>
        Selected ISO Date Time:
        <span id="date-time-value">{dateTime}</span>
      </p>
      <DateTimePicker
        name="date-time-picker-example"
        onChange={handleDateTimeChange}
        {...props}
      />
    </div>
  );
};

DatePickerExample.propTypes = propTypes;
DatePickerExample.defaultProps = defaultProps;

export default DatePickerExample;
