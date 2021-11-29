import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Main from './components/main';
import './style/patterns.css';
import './style/layout.css';

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
