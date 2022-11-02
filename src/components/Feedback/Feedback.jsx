import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Feedback extends Component {
    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0,
        initialTotal: 0,
        initialPositiveFeedbackPercentage: 0,
    }
    
    static propTypes = {
        initialGood: PropTypes.number.isRequired,
        initialNeutral: PropTypes.number.isRequired,
        initialBad: PropTypes.number.isRequired,
        initialTotal: PropTypes.number.isRequired,
        initialPositiveFeedbackPercentage: PropTypes.number.isRequired,
    }

    state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad,
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
        const total = this.initialTotal + 3;
        console.log("total", total);
    }
    // countPositiveFeedbackPercentage = () => {

    // }

    render() {
        return (
            <section>
                <h1>Please leave feedback</h1>
                <div>
                    <button type="button" onClick={this.handleGood}>Good</button>
                    <button type="button" onClick={this.handleNeutral}>Neutral</button>
                    <button type="button" onClick={this.handleBad}>Bad</button>
                </div>
                <div>
                    <h2>Statistics</h2>
                    <ul>
                        <li>Good: {this.state.good}</li>
                        <li>Neutral: {this.state.neutral}</li>
                        <li>Bad: {this.state.bad}</li>
                        <li>Total:{0}</li>
                        <li>Positive feedback:{0}</li>
                    </ul>
                </div>                
            </section>
        )
    }
}



export default Feedback;