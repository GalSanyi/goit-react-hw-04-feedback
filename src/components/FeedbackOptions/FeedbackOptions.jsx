import React from 'react';
import s from './FeedbackOptions..module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ onLeaveFeedback, buttons }) {
  return Object.keys(buttons).map((button, id) => (
    <button
      key={id}
      name={button}
      type="button"
      className={s.Feedback__button}
      onClick={onLeaveFeedback}
    >
      {button}
    </button>
  ));
}

FeedbackOptions.prototype = {
  onLeaveFeedback: PropTypes.string.isRequired,
  buttons: PropTypes.string.isRequired,
};
