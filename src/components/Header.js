import React from 'react';
import { NavLink } from 'react-router-dom';
export default class App extends React.Component {

  render() {
    return (
      <>
        <div className="page-btn-content">
          <div>
            <button className="page-btn">
              <NavLink to="/" className="page-btn-link">
                Popular
              </NavLink>
            </button>
            <button className="page-btn">
              <NavLink to="/battle" className="page-btn-link">
                Battle
              </NavLink>
            </button>
          </div>
          <div>
            <button className="page-btn-icon">🔦</button>
          </div>
        </div>
      </>
    )
  }
}
// 💡