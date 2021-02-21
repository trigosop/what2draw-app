import Emojis from '../data/emojis.json';

export default function EmojiList() {
  return (
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
  );
}
