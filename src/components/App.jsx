import Feedback from 'components/Feedback'
export const App = () => {
  return (
    <div>
      <Feedback
        initialGood = {0}
        initialNeutral = {0}
        initialBad = {0}
        initialTotal = {0}
        initialPositiveFeedbackPercentage = {0}
      />
    </div>
  );
};
