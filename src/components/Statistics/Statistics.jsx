import React from 'react';
// import { Container, StatisticsList, StatisticsItem } from './Statistics.styled';

const Statistics = ( {good, neutral, bad, total, positivePercentage} ) => (
    <div>
        <h2>Statistics</h2>
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total:{total}</p>
            <p>Positive feedback:{total===0 ? 0 : positivePercentage}%</p>
        </div>
    </div>
);

export default Statistics;