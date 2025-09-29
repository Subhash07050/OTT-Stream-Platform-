import React from 'react';
import './Player.css';
import back_arrow from '../../assets/back_arrow_icon.png';
import { useParams, useNavigate } from 'react-router-dom';

const Player = () => {
  const { trailer } = useParams();
  const navigate = useNavigate();
  const decodedTrailer = decodeURIComponent(trailer);

  return (
    <div className='player'>
      <img className="player-back-arrow" src={back_arrow} alt="Back" onClick={() => navigate(-1)} />
      <iframe width="90%" height="90%" src={decodedTrailer} title='Trailer' frameBorder="0" allowFullScreen ></iframe>

    </div>
  );
};

export default Player;
