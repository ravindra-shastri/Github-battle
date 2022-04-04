import React from 'react';

export default class Card extends React.Component {

  render() {
    return (
      <>
        <div className="card-containor">
          <div>
            <h3>#{this.props.score}
            </h3>
            <img
              className="img"
              src={this.props.owner.avatar_url}
              alt={this.props.owner.login}
            />
            <a className="login" href={this.props.html_url}>
              <h3>
                {this.props.owner.login}
              </h3>
            </a>
            <p>
              <i className="fas fa-user text-green-300 mr-3 login-icon">
              </i>
              <span>
                {this.props.owner.login}
              </span>
            </p>
            <p>
              <i className="fas fa-star text-yellow-500 mr-3 star-icon">
              </i>
              <span>
                {this.props.stargazers_count} Stars
              </span>
            </p>
            <p>
              <i className="fas fa-code-branch text-blue-500 mr-3 fork-icon">
              </i>
              <span>{this.props.forks} forks
              </span>
            </p>
            <p>
              <i className="fas fa-exclamation-triangle text-red-700 mr-3 issue-icon">
              </i>
              <span> {this.props.open_issues} issues
              </span>
            </p>
          </div>
        </div>
      </>
    );
  }
}