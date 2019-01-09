import React from 'react';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Header />
  </div>
);

const Header = () => (
  <header>
    <h1>My Contact</h1>
    <Route exact path="/" component={Welcome} />
    <Route path="/contacts" component={Contacts} />
  </header>
);

const Welcome = () => (
  <h1>welcome!!</h1>
);

const Contacts = () => (
  <ul>
    <li>강아지</li>
    <li>고양이</li>
    <li>코끼리</li>
  </ul>
);



export default App;
