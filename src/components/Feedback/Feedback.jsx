import s from './Feedback.module.css'; 

const Feedback = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={s.feedback}>
    <h2>Feedback Statistics</h2>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive: {positivePercentage}%</p>
  </div>
);

export default Feedback;
