import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
// import Statistics from 'components/Statistics'


export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));          
    };

    handleNeutral =() => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };

  
    handleBad = () => {
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = () => {
        return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
    } 

    render() {
        const totalFeedback = this.countTotalFeedback();
    
        const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

        return (
            <section>
                <h1>Please leave feedback</h1>

                <FeedbackOptions 
                    onHandleGood={this.handleGood} 
                    onHandleNeutral={this.handleNeutral}
                    onHandleBad={this.handleBad}
                />
                
                <div>
                    <h2>Statistics</h2>
                    <ul>
                        <li>Good: {this.state.good}</li>
                        <li>Neutral: {this.state.neutral}</li>
                        <li>Bad: {this.state.bad}</li>
                        <li>Total:{totalFeedback}</li>
                        <li>Positive feedback:{totalFeedback===0 ? 0 : positiveFeedbackPercentage}%</li>
                    </ul>
                </div>                
            </section>
        )
}
};
