import React from 'react';

const FeedbackOptions = ( {onHandleGood, onHandleNeutral, onHandleBad}) => (
    <div>
        <button type="button" onClick={onHandleGood}>Good</button>
        <button type="button" onClick={onHandleNeutral}>Neutral</button>
        <button type="button" onClick={onHandleBad}>Bad</button>
    </div>
);

export default FeedbackOptions