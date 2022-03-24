import PropTypes from 'prop-types';
import s from './Statistic.module.css';
function Statistic({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <ul className={s.Statistic__menu}>
        <li>
          <p>Good:{good}</p>
        </li>
        <li>
          <p>Neutral:{neutral}</p>
        </li>
        <li>
          <p>Bad:{bad}</p>
        </li>
        <li>
          <p>Total:{total}</p>
        </li>
        <li>
          <p>Positive feedback:{positivePercentage}%</p>
        </li>
      </ul>
    </>
  );
}
Statistic.prototype = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistic;
