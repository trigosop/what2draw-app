import { useState } from 'react';
import './App.css';
import Emojis from './data/emojis.json';

function App() {
  const setValue = useState()[1];

  const refresh = () => {
    setValue({});
  };

  return (
    <>
      <div className="App">
        <h1 className="title">¡What2Draw!</h1>
        <div className="description">
          <p>There are no rules! Just let the emojis inspire you.</p>
          <p>
            You can use one or all three and find your own way to your next
            illustration
          </p>
        </div>
        <div className="Emojis">
          <span>
            {Emojis[Math.floor(Math.random() * Math.floor(Emojis.length))]}
          </span>
          <span>
            {Emojis[Math.floor(Math.random() * Math.floor(Emojis.length))]}
          </span>
          <span>
            {Emojis[Math.floor(Math.random() * Math.floor(Emojis.length))]}
          </span>
        </div>

        <div className="description">
          You can use the hashtag{' '}
          <strong>
            <a
              href="https://www.instagram.com/explore/tags/what2drawapp/"
              target="_blank"
              rel="noreferrer"
            >
              #what2drawapp
            </a>
          </strong>{' '}
          to see other people's artwork 😃
        </div>

        <div id="hint" className="hint">
          <button onClick={refresh} className="refresh">
            ♻
          </button>
          <div id="tooltip" role="tooltip" data-popper-placement="bottom">
            Press this button to get a new set of emojis, but... that's kinda
            cheating!! 👮‍♂️
            <div id="arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
