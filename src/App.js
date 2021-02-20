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
            illustration.
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
          Use the hashtag{' '}
          <strong>
            <a
              href="https://www.instagram.com/explore/tags/what2drawapp/"
              target="_blank"
              rel="noreferrer"
              title="Look for #what2drawapp posts on Instagram!"
            >
              #what2drawapp
            </a>
          </strong>{' '}
          to see other people's artwork or share your own! 😃
        </div>

        <div id="hint" className="hint">
          <button onClick={refresh} className="refresh" aria-label="refresh emojis">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#ff1493"
            >
              <path d="M9 12l-4.463 4.969-4.537-4.969h3c0-4.97 4.03-9 9-9 2.395 0 4.565.942 6.179 2.468l-2.004 2.231c-1.081-1.05-2.553-1.699-4.175-1.699-3.309 0-6 2.691-6 6h3zm10.463-4.969l-4.463 4.969h3c0 3.309-2.691 6-6 6-1.623 0-3.094-.65-4.175-1.699l-2.004 2.231c1.613 1.526 3.784 2.468 6.179 2.468 4.97 0 9-4.03 9-9h3l-4.537-4.969z" />
            </svg>
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
