import React from 'react';
import Player from './Player';
import { Link } from 'react-router-dom';

export default class GithubBattle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: '',
      text2: '',
      form1: false,
      form2: false,
      data1: '',
      data2: '',
      closeData1: true,
      closeData2: true
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let id = event.target.dataset.id;
    if (this.state[id]) {
      fetch(`https://api.github.com/users/${this.state[id]}`)
        .then((res) => res.json())
        .then((data) => {
          if (id === "text1") {
            this.setState({
              [id]: "",
              data1: data,
              form1: true,
              closeData1: false,
            });
          } else {
            this.setState({
              [id]: "",
              data2: data,
              form2: true,
              closeData2: false
            });
          }
        });
    }
  };

  handleChange = ({ target }) => {
    let { value } = target;
    let id = target.dataset.id;
    this.setState({ [id]: value });
  };

  handleKey = (event) => {
    if (event.target === 13) {
      this.handleSubmit(event);
    }
  };

  handleCloseData = ({ target }) => {
    let id = target.dataset.id;
    if (id === "user1") {
      this.setState((prevState) => ({
        form1: !prevState.form1,
        closeData1: !prevState.closeData1,
        data1: "",
      }));
    } else {
      this.setState((prevState) => ({
        form2: !prevState.form2,
        closeData2: !prevState.closeData2,
        data2: "",
      }));
    }
  };

  render() {
    return (
      <>
        <div>
          <h2>
            Instructions
          </h2>
        </div>
        <div className="page-btn-content">
          <div>
            <h3>
              Enter two Github users
            </h3>
            <i className="fa-solid fa-user-group battle-icon-one">
            </i>
          </div>
          <div>
            <h3>
              Battle
            </h3>
            <i className="fa-solid fa-jet-fighter battle-icon-two">
            </i>
          </div>
          <div>
            <h3> See the winner
            </h3>
            <i className="fa-solid fa-trophy battle-icon-three">
            </i>
          </div>
        </div>
        <div>
          <h4> Players
          </h4>
          <Player
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleKey={this.handleKey}
            handleCloseData={this.handleCloseData}
          />
          <div>
            <Link className="btn-link"
              to={{
                pathname: "/playerbattle",
                state: [this.state.data1, this.state.data2],
              }}
            >
              <h4
                className={!this.state.closeData1 &&
                  !this.state.closeData2 ? "visible" : "hidden"}
              > <span
                className="btn-link-name">
                  BATTLE
                </span>
              </h4>
            </Link>
          </div>
        </div>
      </>
    )
  }
}
