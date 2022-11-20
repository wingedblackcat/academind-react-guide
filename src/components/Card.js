import './Card.css';

/**
 * @param {{ children: node|node[], className: string }} props  
 */
const Card = ({ children, className }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
