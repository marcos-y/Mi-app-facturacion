import '../styles/global.css';

const Button = ({ text, onClick, type }) => {
  return (
    <button className={`custom-btn ${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;