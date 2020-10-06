import React from 'react';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
import { injectIntl, intlShape } from 'react-intl';
import DateTimeUtils from './DateTimeUtils';

import DateTimePicker from './DateTimePicker';

const propTypes = {
  /**
   * Custom input attributes to apply to the date input. Use the name prop to set the name for the date input.
   * Do not set the name in inputAttribute as it will be ignored.
   */
  dateInputAttributes: PropTypes.object,
  /**
   * The DatePicker identifier. Links the htmlFor of the field to the select identifier.
   */
  dateTimePickerId: PropTypes.string.isRequired,
  /**
   * Whether the date and time inputs should be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Error message for when the input is invalid. This will only be displayed if isInvalid is true.
   */
  error: PropTypes.node,
  /**
   * An array of ISO 8601 string representation of the dates to disable in the picker. The values must be in the `YYYY-MM-DDThh:mm:ss` format.
   */
  excludeDates: PropTypes.arrayOf(PropTypes.string),
  /**
   * A function that gets called for each date in the picker to evaluate which date should be disabled.
   * A return value of true will be enabled and false will be disabled.
   */
  filterDate: PropTypes.func,
  /**
   * Help element to display with the input.
   */
  help: PropTypes.node,
  /**
   * Whether or not to hide the required indicator on the label.
   */
  hideRequired: PropTypes.bool,
  /**
   * Custom input attributes to apply to the hour input
   */
  hourAttributes: PropTypes.object,
  /**
   * The htmlFor attribute on the field label.
   */
  htmlFor: PropTypes.string,
  /**
   * An array of ISO 8601 string representation of the dates to enable in the picker. The values must be in the `YYYY-MM-DDThh:mm:ss` format.
   * All Other dates will be disabled.
   */
  includeDates: PropTypes.arrayOf(PropTypes.string),
  /**
   * @private
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: intlShape.isRequired,
  /**
  * Whether the input displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.
  */
  isIncomplete: PropTypes.bool,
  /**
   * Whether or not the field is an inline field.
   */
  isInline: PropTypes.bool,
  /**
  * Whether the input displays as Invalid. Use when value does not meet validation pattern.
  */
  isInvalid: PropTypes.bool,
  /**
  * Whether the selected meridiem displays as Invalid. Use when value does not meet validation pattern.
  */
  isInvalidMeridiem: PropTypes.bool,
  /**
   * Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility.
   */
  isLabelHidden: PropTypes.bool,
  /**
   * The label of the form control children.
   */
  label: PropTypes.string.isRequired,
  /**
   * Attributes to attach to the label.
   */
  // eslint-disable-next-line react/forbid-prop-types
  labelAttrs: PropTypes.object,
  /**
   * An ISO 8601 string representation of the maximum date that can be selected in the date picker. The value must be in the `YYYY-MM-DD` format. Must be on or before `12/31/2100`.
   * The time portion in this value is ignored because this is strictly used in the date picker.
   */
  maxDate: PropTypes.string,
  /**
  * Set the max-width of a field using `length` or `%`.  Best practice recommendation to never exceed
  * a rendered value of 1020px. _(Note: Providing custom inline styles will take precedence.)_
  */
  maxWidth: PropTypes.string,
  /**
   * An ISO 8601 string representation of the minimum date that can be selected in the date picker. The value must be in the `YYYY-MM-DD` format. Must be on or after `01/01/1900`.
   * The time portion in this value is ignored because this is strictly used in the date picker.
   */
  minDate: PropTypes.string,
  /**
   * Custom input attributes to apply to the minutes input
   */
  minuteAttributes: PropTypes.object,
  /**
   * Name of the date input. The name should be unique.
   */
  name: PropTypes.string.isRequired,
  /**
   * A callback function triggered when the entire date time picker component loses focus.
   * This event does not get triggered when the focus is moved from the date input to the time input because the focus is still within the main date time picker component.
   * The first parameter is the event. The second parameter is the metadata to describe the current state of the input value at the time when the onBlur callback is triggered.
   */
  onBlur: PropTypes.func,
  /**
   * A callback function to execute when a valid date is selected or entered.
   * The first parameter is the event. The second parameter is the changed input value. The third parameter is the metadata to describe the current state of the input value at the time when the onChange callback is triggered.
   */
  onChange: PropTypes.func,
  /**
   * A callback function to execute when a change is made in the date or time input.
   * The first parameter is the event. The second parameter is the changed input value. The third parameter is the metadata to describe the current state of the input value at the time when the onChangeRaw callback is triggered
   */
  onChangeRaw: PropTypes.func,
  /**
   * **Deprecated**, A callback function to execute when clicking outside of the picker to dismiss it. Resolves to `onRequestClose`.
   */
  onClickOutside: PropTypes.func,
  /**
   * A callback function to execute when picker is dismissed. onRequestClose(event)
   */
  onRequestClose: PropTypes.func,
  /**
   * A callback function triggered when the date input, hour input, or minute input receives focus.
   */
  onFocus: PropTypes.func,
  /**
   * A callback function to execute when a selection is made in the date picker.
   * The first parameter is the event. The second parameter is the selected input value in ISO format.
   */
  onSelect: PropTypes.func,
  /**
   * Whether or not the date is required.
   */
  required: PropTypes.bool,
  /**
   * Custom input attributes to apply to the seconds input
   */
  secondAttributes: PropTypes.object,
  /**
   * Whether or not to append the 'optional' label to a non-required field label.
   */
  showOptional: PropTypes.bool,
  /**
   * Whether an input field for seconds should be shown or not. If true then the second field must have a valid
   * number for the overall input to be considered valid.
   */
  showSeconds: PropTypes.bool,
  /**
   * An ISO 8601 string representation of the initial value to show in the date and time inputs. The value must be in the `YYYY-MM-DDThh:mm:ss` format.
   */
  value: PropTypes.string,
  /**
   * Type of time input to initialize. Must be `24-hour` or `12-hour`.
   * The `de`, `es-ES`, `es`, `fr-FR`, `fr`, `nl-BE`, `nl`, `pt-BR`, `pt`, `sv-SE` and `sv` locales do not use the 12-hour time notation.
   * If the `variant` prop if set to `12-hour` for one of these supported locales, the variant will be ignored and defaults to `24-hour`.
   */
  timeVariant: PropTypes.oneOf([DateTimeUtils.FORMAT_12_HOUR, DateTimeUtils.FORMAT_24_HOUR]),
};

const defaultProps = {
  dateInputAttributes: undefined,
  disabled: false,
  error: null,
  excludeDates: undefined,
  filterDate: undefined,
  help: null,
  hideRequired: false,
  hourAttributes: {},
  htmlFor: undefined,
  includeDates: undefined,
  isIncomplete: false,
  isInline: false,
  isInvalid: false,
  isInvalidMeridiem: false,
  isLabelHidden: false,
  labelAttrs: {},
  maxDate: '2100-12-31',
  maxWidth: undefined,
  minDate: '1900-01-01',
  minuteAttributes: {},
  onBlur: undefined,
  onChange: undefined,
  onChangeRaw: undefined,
  onClickOutside: undefined,
  onFocus: undefined,
  onSelect: undefined,
  required: false,
  secondAttributes: {},
  showOptional: false,
  showSeconds: false,
  value: undefined,
  timeVariant: DateTimeUtils.FORMAT_24_HOUR,
};

const DateTimePickerField = (props) => {
  const {
    dateInputAttributes,
    dateTimePickerId,
    disabled,
    error,
    excludeDates,
    filterDate,
    help,
    hideRequired,
    hourAttributes,
    htmlFor,
    includeDates,
    intl,
    isIncomplete,
    isInline,
    isInvalid,
    isInvalidMeridiem,
    isLabelHidden,
    label,
    labelAttrs,
    maxDate,
    maxWidth,
    minDate,
    minuteAttributes,
    name,
    onBlur,
    onChange,
    onChangeRaw,
    onClickOutside,
    onFocus,
    onRequestClose,
    onSelect,
    required,
    secondAttributes,
    showOptional,
    showSeconds,
    value,
    timeVariant,
    ...customProps
  } = props;

  let ariaDescriptionIds = `${dateTimePickerId}-help`;

  if (error && isInvalid) {
    ariaDescriptionIds = `${dateTimePickerId}-error ${dateTimePickerId}-help`;
  }

  const customDateInputAriaDescribedById = dateInputAttributes && dateInputAttributes['aria-describedby'];
  const customHourAriaDescribedById = hourAttributes && hourAttributes['aria-describedby'];
  const customMinuteAriaDescribedById = minuteAttributes && minuteAttributes['aria-describedby'];
  const customSecondAriaDescribedById = secondAttributes && secondAttributes['aria-describedby'];

  const DateInputAriaDescribedByIds = customDateInputAriaDescribedById ? `${ariaDescriptionIds} ${customDateInputAriaDescribedById}` : ariaDescriptionIds;
  const hourAriaDescriptionIds = customHourAriaDescribedById ? `${ariaDescriptionIds} ${customHourAriaDescribedById}` : ariaDescriptionIds;
  const minuteAriaDescriptionIds = customMinuteAriaDescribedById ? `${ariaDescriptionIds} ${customMinuteAriaDescribedById}` : ariaDescriptionIds;
  const secondAriaDescriptionIds = customSecondAriaDescribedById ? `${ariaDescriptionIds} ${customSecondAriaDescribedById}` : ariaDescriptionIds;

  const dateFormat = intl.formatMessage({ id: 'Terra.dateTimePicker.dateFormat' });
  const timeFormat = showSeconds
    ? `${intl.formatMessage({ id: 'Terra.dateTimePicker.hh' })}:${intl.formatMessage({ id: 'Terra.dateTimePicker.mm' })}:${intl.formatMessage({ id: 'Terra.dateTimePicker.ss' })}`
    : `${intl.formatMessage({ id: 'Terra.dateTimePicker.hh' })}:${intl.formatMessage({ id: 'Terra.dateTimePicker.mm' })}`;

  const helpLabel = help ? (
    <div aria-label={`${intl.formatMessage({ id: 'Terra.dateTimePicker.dateFormatLabel' })} (${dateFormat}), ${intl.formatMessage({ id: 'Terra.dateTimePicker.timeFormatLabel' })} (${timeFormat}), ${help}`}>
      {`(${dateFormat}`}
      &nbsp;
      {`${timeFormat})`}
      &nbsp;
      {help}
    </div>
  ) : (
    <div aria-label={`${intl.formatMessage({ id: 'Terra.dateTimePicker.dateFormatLabel' })} (${dateFormat}), ${intl.formatMessage({ id: 'Terra.dateTimePicker.timeFormatLabel' })} (${timeFormat})`}>
      {`(${dateFormat}`}
      &nbsp;
      {`${timeFormat})`}
    </div>
  );

  return (
    <Field
      {...customProps}
      label={label}
      labelAttrs={labelAttrs}
      error={error}
      help={helpLabel}
      hideRequired={hideRequired}
      required={required}
      showOptional={showOptional}
      isInvalid={isInvalid}
      isInline={isInline}
      isLabelHidden={isLabelHidden}
      htmlFor={dateTimePickerId}
      maxWidth={maxWidth}
    >
      <DateTimePicker
        dateInputAttributes={{ ...dateInputAttributes, 'aria-describedby': DateInputAriaDescribedByIds, 'aria-label': label }}
        disabled={disabled}
        excludeDates={excludeDates}
        filterDate={filterDate}
        hourAttributes={{ ...hourAttributes, 'aria-describedby': hourAriaDescriptionIds, 'aria-label': label }}
        id={dateTimePickerId}
        includeDates={includeDates}
        isIncomplete={isIncomplete}
        isInvalid={isInvalid}
        isInvalidMeridiem={isInvalidMeridiem}
        maxDate={maxDate}
        minuteAttributes={{ ...minuteAttributes, 'aria-describedby': minuteAriaDescriptionIds, 'aria-label': label }}
        minDate={minDate}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onChangeRaw={onChangeRaw}
        onClickOutside={onClickOutside}
        onFocus={onFocus}
        onRequestClose={onRequestClose}
        onSelect={onSelect}
        required={required}
        secondAttributes={{ ...secondAttributes, 'aria-describedby': secondAriaDescriptionIds, 'aria-label': label }}
        showSeconds={showSeconds}
        timeVariant={timeVariant}
        value={value}
        useExternalFormatMask
      />
    </Field>

  );
};

DateTimePickerField.propTypes = propTypes;
DateTimePickerField.defaultProps = defaultProps;

export default injectIntl(DateTimePickerField);
