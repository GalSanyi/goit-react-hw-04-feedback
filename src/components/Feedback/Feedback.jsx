import React from 'react';
import Statistic from 'components/Statistic';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';

class feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChangeStates = event => {
    this.setState(perStates => {
      return {
        [event.target.name]: perStates[event.target.name] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return !this.countTotalFeedback()
      ? '0'
      : Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>

        <FeedbackOptions
          buttons={this.state}
          onLeaveFeedback={this.handleChangeStates}
        />
        <Section title="Statistics" header="Please leave feedback">
          {this.countTotalFeedback() ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
export default feedback;
