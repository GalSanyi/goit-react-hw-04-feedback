import { useState } from 'react';
import Statistic from 'components/Statistic';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import React from 'react';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNatural] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChangeStates = event => {
    const name = event.target.name;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNatural(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return !countTotalFeedback()
      ? '0'
      : Math.round((good / countTotalFeedback()) * 100);
  };
  const keys = Object.keys({ good, neutral, bad });
  return (
    <div>
      <h1>Please leave feedback</h1>

      <FeedbackOptions options={keys} onLeaveFeedback={handleChangeStates} />
      <Section title="Statistics" header="Please leave feedback">
        {countTotalFeedback() ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
