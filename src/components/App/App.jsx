import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import { Container, Section, TitleSection } from './App.styled';

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
            <Section>
                <TitleSection>Please leave feedback</TitleSection>
                <Container>
                    <FeedbackOptions 
                        onHandleGood={this.handleGood} 
                        onHandleNeutral={this.handleNeutral}
                        onHandleBad={this.handleBad}
                    />

                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={totalFeedback}
                        positivePercentage={positiveFeedbackPercentage}
                    />
                </Container>
                            
            </Section>
        )
}
};
