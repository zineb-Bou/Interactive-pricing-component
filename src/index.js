import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style/index.css';

function App() {
  return <h1 className={styles.title}> Hello world </h1>;
}
ReactDOM.render(<App />, document.getElementById('root'));
  