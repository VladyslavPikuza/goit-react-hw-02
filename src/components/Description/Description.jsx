import s from './Description.module.css';

const Description = ({ title, text }) => (
  <div className={s.description}>
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
);

export default Description;
