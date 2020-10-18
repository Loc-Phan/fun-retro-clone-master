import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Login from './components/Login/Login';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Login></Login>
      </Container>

    </div>
  );
}

export default App;
