import React from 'react';
import { Link } from "react-router-dom"

export default class PlayerBattle extends React.Component {
  render() {
    console.log(this.props);
    let user1 = this.props.location.state[0];
    let user2 = this.props.location.state[1];
    let winner;
    let looser;
    if (
      user1.public_repos * 20 + user1.followers >
      user2.public_repos * 20 + user2.followers
    ) {
      winner = user1;
      looser = user2;
    } else {
      winner = user2;
      looser = user1;
    }

    return (
      <>
        <div className="battle-card-container">
          <div className="battle-card-content">
            <h4 className="battle-title">
              Winner
            </h4>
            <div>
              <img
                className="battle-img"
                src={winner.avatar_url}
                alt={winner.login} />
            </div>
            <h4 className="battle-score">
              score: {winner.public_repos * 20 + winner.followers}
            </h4>
            <h4 className="battle-player-login">
              {winner.login}
            </h4>
            <div>
              <i className="fas fa-user text-red-400 name-icon">
              </i>
              <span>
                {winner.name}
              </span>
            </div>
            <div>
              <i className="fas fa-compass text-blue-400 location-icon">
              </i>
              <span> {winner.location}
              </span>
            </div>
            <div>
              <i className="fas fa-users text-blue-400 followers-icon">
              </i>
              <span>
                {winner.followers} followers
              </span>
            </div>
            <div>
              <i className="fas fa-users text-green-400 following-icon">
              </i>
              <span> {winner.following} following
              </span>
            </div>
            <div>
              <i className="fas fa-code text-red-500 repo-icon">
              </i>
              <span>
                {winner.public_repos} repositories
              </span>
            </div>
          </div>

          <div className="battle-card-content">
            <h4 className="battle-title">
              Loser
            </h4>
            <div>
              <img
                className="battle-img"
                src={looser.avatar_url}
                alt={looser.login} />
            </div>
            <h4 className="battle-score">
              score: {looser.public_repos * 20 + winner.followers}
            </h4>
            <h4 className="battle-player-login">
              {looser.login}
            </h4>
            <div>
              <i className="fas fa-user text-red-400 name-icon">
              </i>
              <span>{looser.name}
              </span>
            </div>
            <div>
              <i className="fas fa-compass text-blue-400 location-icon">
              </i>
              <span> {looser.location}
              </span>
            </div>
            <div>
              <i className="fas fa-users text-blue-400 followers-icon">
              </i>
              <span>
                {looser.followers} followers
              </span>
            </div>
            <div>
              <i class="fas fa-users text-green-400 following-icon">
              </i>
              <span>
                {looser.following} following
              </span>
            </div>
            <div>
              <i className="fas fa-code text-red-500 repo-icon">
              </i>
              <span>
                {looser.public_repos} repositories
              </span>
            </div>
          </div>
        </div>
        <div>
          <Link className="btn-link" to="/battle">
            <div className="reset-btn">
              <h4 className="btn-link-name">
                RESET
              </h4>
            </div>
          </Link>
        </div>
      </>
    )
  }
}