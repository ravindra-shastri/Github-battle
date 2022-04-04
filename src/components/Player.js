import React from 'react';

export default class Player extends React.Component {
  render() {
    let props = this.props;
    let text1 = props.text1;
    let text2 = props.text2
    return (
      <>
        <div className="player-container">
          <div>
            <div>
              <form
                onSubmit={(e) => props.handleSubmit(e)}
                data-id="text1"
                className="page-btn-content"
              >
                <div>
                  <div className="label">
                    <label htmlFor="p-1"> Player One
                    </label>
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="p-1"
                    data-id="text1"
                    value={text1}
                    onChange={(e) => props.handleChange(e)}
                    onKeyDown={(e) => props.handleKey(e)}
                    className="input"
                    placeholder="github username"
                  />
                  <input
                    type="submit"
                    value="SUBMIT"
                    className="input-submit"
                    name="submit" />
                </div>
              </form>
            </div>
            <div className={this.props.closeData1 &&
              !props.form1 ? "hidden" : "visible"}>
              <div className="player-content">
                <img
                  className="player-img"
                  src={props.data1.avatar_url}
                  alt={props.data1.login}
                />
                <h4
                  className="player-name">
                  {props.data1.login}
                </h4>
                <i
                  className="fas fa-times-circle player-delete"
                  data-id="user1"
                  onClick={(e) => props.handleCloseData(e)}
                >
                </i>
              </div>
            </div>
          </div>
          <div>
            <div>
              <form
                onSubmit={(e) =>
                  props.handleSubmit(e)}
                data-id="text2"
                className={props.form2 &&
                  !props.closeData2 ? "hidden" : "visible"}>
                <div>
                  <div className="label">
                    <label htmlFor="p-2">
                      Player Two
                    </label>
                  </div>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    value={text2}
                    data-id="text2"
                    onChange={(e) => props.handleChange(e)}
                    onKeyDown={(e) => props.handleKey(e)}
                    placeholder="github username" id="p-2" />
                  <input
                    type="submit"
                    value="SUBMIT"
                    className="input-submit"
                    name="submit" />
                </div>
              </form>
            </div>
            <div className={props.closeData2 &&
              !props.form2 ? "hidden" : "visible"}>
              <div className="player-content">
                <img
                  className="player-img"
                  src={props.data2.avatar_url}
                  alt={props.data2.login}
                />
                <h4 className="player-name">
                  {props.data2.login}
                </h4>
                <i
                  className="fas fa-times-circle player-delete"
                  data-id="user2"
                  onClick={(e) => props.handleCloseData(e)}
                >
                </i>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}