import React from 'react';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <Header />
  </div>
);

const Header = () => (
  <header>
    <h1>My Contact</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contacts">Contact</Link></li>
      </ul>
    </nav>
    <Route exact path="/" component={Welcome} />
    <Route path="/contacts" component={Contacts} />
  </header>
);

const Welcome = () => (
  <h1>welcome!!</h1>
);

const Contacts = ({ match }) => (
  <div>
    <ul>
      <li><Link to={`${match.url}/dog`}>강아지</Link></li>
      <li><Link to={`${match.url}/cat`}>고양이</Link></li>
      <li><Link to={`${match.url}/elephant`}>코끼리</Link></li>
    </ul>
    <Route path={`${match.path}/:contactName`} component={Contact} />
    <Route
      exact
      path={match.path}
      render={() => <p>Please select a contact.</p>}
    />
  </div>
);

const Contact = ({ match }) => (
  <div>
    <div>contact detail for {match.params.contactName}</div>
  </div>
);

export default App;