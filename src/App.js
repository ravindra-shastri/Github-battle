import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import GithubStars from './components/GithubStars';
import GithubBattle from './components/GithubBattle';
import PlayerBattle from './components/PlayerBattle';

function App() {
  return (
    <div className="App">
      <h1> Github-Battle</h1>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={GithubStars} />
        <Route path="/battle" exact component={GithubBattle} />
        <Route path="/playerbattle" component={PlayerBattle} />
      </BrowserRouter>
    </div>
  );
}

export default App;
