import s from './Options.module.css';

const Options = ({ onLeaveFeedback, totalFeedback, onReset }) => (
  <div className={s.options}>
    <button onClick={() => onLeaveFeedback('good')}>Good</button>
    <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
    <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
    {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
  </div>
);

export default Options;
