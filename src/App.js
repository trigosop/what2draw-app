import './App.css';
import Emojis from './data/emojis.json';

function App() {
  return (
    <>
      <div className="App">
        <h1 className="title">¡What2Draw!</h1>
        <p className="description">
          There are no rules! Just let the emojis inspire you. You can use one
          or all three and find your own way to your next illustration
        </p>
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

        <p className="description">
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
        </p>

        <div id="hint" className="hint">
          Hint!
          <div id="tooltip" role="tooltip" data-popper-placement="bottom">
            Refresh the page to get a new set of emojis, but... that's kinda
            cheating!! 👮‍♂️
            <div id="arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
