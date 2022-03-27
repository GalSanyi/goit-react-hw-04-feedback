import s from './FeedbackOptions..module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  return options.map((options, id) => (
    <button
      key={id}
      name={options}
      type="button"
      className={s.Feedback__button}
      onClick={onLeaveFeedback}
    >
      {options}
    </button>
  ));
}

FeedbackOptions.prototype = {
  onLeaveFeedback: PropTypes.string.isRequired,
  options: PropTypes.func.isRequired,
};
