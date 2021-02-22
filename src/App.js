import EmojiList from './components/EmojiList';
import './App.css';
import { useState } from 'react';

export default function App() {
  const setValue = useState({})[1];

  const refresh = () => {
    setValue({});
  };

  return (
    <>
      <div className="App">
        <div className="social">
          <a
            href="https://www.instagram.com/what2drawapp/"
            target="_blank"
            title="What2Draw on Instagram"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
        <h1 className="title">¡What2Draw!</h1>
        <div className="description">
          <p>There are no rules! Just let the emojis inspire you.</p>
          <p>
            You can use one or all three and find your own way to your next
            illustration.
          </p>
        </div>

        <EmojiList></EmojiList>

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
          <button
            onClick={refresh}
            className="refresh"
            aria-label="refresh emojis"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="currentColor"
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
