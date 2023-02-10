import React from 'react';
import Section from './section';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';

class App extends React.Component {
  state = {
    good: 0,
    bad: 0,
    neutral: 0,
  };

  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    const PositivePercentage = Math.round(
      (good / (good + bad + neutral)) * 100
    );
    return PositivePercentage;
    // this.setState(prevState => ({
    //   valuePositivePercentage: Math.round(
    //     (prevState.good / prevState.valueTotal) * 100
    //   ),
    // }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  show = () => {
    this.visible = true;
  };

  increment = event => {
    // console.log(event.target.name);
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
    // if (event.target.name === 'good') {
    //   this.setState(prevState => ({
    //     valueGood: prevState.valueGood + 1,
    //   }));
    // } else if (event.target.name === 'bad') {
    //   this.setState(prevState => ({
    //     valueBad: prevState.valueBad + 1,
    //   }));
    // } else if (event.target.name === 'neutral') {
    //   this.setState(prevState => ({
    //     valueNeutral: prevState.valueNeutral + 1,
    //   }));
    // }
  };

  render() {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;
    return (
      <div>
        <Section title="Please lieve feedback">
          <FeedbackOptions setFeedback={this.increment} options={this.state} />

          {total > 0 ? (
            <Statistics
              setTotal={this.countTotalFeedback}
              setPercentage={this.countPositiveFeedbackPercentage}
              good={good}
              bad={bad}
              neutral={neutral}
            />
          ) : (
            <Notification massege="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
export default App;
