/* eslint-disable react/prop-types */
import {} from 'react';
import '../styles/Player.css';

const Player = ({ picture, ...data }) => {
  // console.log(picture);
  return (
    <div className="player">
        <img src={picture} alt="Photo du joueur" />
        {
            Object.entries(data).map(([param, value]) => (
                // console.log(`${param}: ${data[param]}`)
                <p key={param} className={param}>{value}</p>
            ))
        }
    </div>
  )
}

export default Player;