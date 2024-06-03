// eslint-disable-next-line react/prop-types
const Options = ({ updateFeedback, showReset, onReset }) => {
  return (
    <>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {showReset && <button onClick={onReset}>Reset</button>}
    </>
  );
};

export default Options;
