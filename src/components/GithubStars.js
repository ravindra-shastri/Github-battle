import React from 'react';
import TotalCard from './TotalCard'

export default class GithubStars extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      category: "all"
    }
  }
  componentDidMount() {
    this.fetchStars(this.state.category);
  };

  handleCategory = ({ target }) => {
    let id = target.dataset.id;
    this.setState(
      {
        data: null,
        category: id
      },
      () => this.fetchStars(this.state.category)
    );
  };

  fetchStars = (category) => {
    fetch("https://api.github.com/search/repositories?q=stars:%3E1+language:${category}&sort=stars&order=desc&type=Repositories")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.items }));
  };

  render() {
    let category = this.state.category
    return (
      <>
        <div>
          <header>
            <nav className="navbar">
              <div>
                <h4 className={category === "all" ? "active" : ""}
                  data-id="all"
                  onClick={(event) => this.handleCategory(event)}
                > All
                </h4>
              </div>
              <h4 className={category === "javascript" ? "active" : ""}
                data-id="javascript"
                onClick={(event) => this.handleCategory(event)}
              >
                JavaScript
              </h4>
              <h4 className={category === "ruby" ? "active" : ""}
                data-id="ruby"
                onClick={(event) => this.handleCategory(event)}
              >
                ruby
              </h4>
              <h4 className={category === "java" ? "active" : ""}
                data-id="java"
                onClick={(event) => this.handleCategory(event)}
              >
                Java
              </h4>
              <h4 className={category === "css" ? "active" : ""}
                data-id="css"
                onClick={(event) => this.handleCategory(event)}
              >
                CSS
              </h4>
              <h4 className={category === "python" ? "active" : ""}
                data-id="python"
                onClick={(event) => this.handleCategory(event)}
              >
                Python
              </h4>
            </nav>
          </header>
          <div>
            {this.state.data ? (
              <TotalCard data={this.state.data} />) : (
              <h5> Fetching Repos ... </h5>
            )}
          </div>
        </div>
      </>
    )
  }
}

