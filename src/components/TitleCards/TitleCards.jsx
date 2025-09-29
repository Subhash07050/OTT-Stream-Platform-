import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular Shows"}</h2>
      <div className="card-list">
        {cards_data.map((card, index) => (
          <Link
            to={`/player/${encodeURIComponent(card.trailer)}`}
            className="card"
            key={index}
          >
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
