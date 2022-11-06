import Statistics from 'components/Statistics'
export const App = () => {
  return (
    <div>
      <Statistics
        initialGood = {0}
        initialNeutral = {0}
        initialBad = {0}
        initialTotal = {0}
        initialPositiveFeedbackPercentage = {0}
      />
    </div>
  );
};
