import React, { Component} from 'react';

class Statistics extends Component {
        
     render() {
            
        return (
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
        )
    }
}

export default Statistics;