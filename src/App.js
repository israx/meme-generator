import React, { useState, useEffect } from "react";
import Header from "./header";
import "./App.css";
import Pedobear from "./pedobear.jpg";
import { render } from "@testing-library/react";

function App() {
  const [top, setTop] = useState("");
  const [bottom, setBottom] = useState("");
  const [memes, setMemes] = useState("");
  const [memeUrl, setUrl] = useState(Pedobear);
  function handleChange(e) {
    const { value, name } = e.target;

    if (name === "top") setTop(value);
    if (name === "bottom") setBottom(value);
  }

  function handleClick() {}

  useEffect(() => {
    const memes = fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((value) => {
        setMemes(value.data.memes);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * memes.length);
    const randomUrl = memes[randomIndex].url;

    setUrl(randomUrl);
  }
  return (
    <div>
      <Header />
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Top"
          onChange={handleChange}
          value={top}
          name="top"
        />
        <input
          type="text"
          placeholder="Bottom"
          onChange={handleChange}
          value={bottom}
          name="bottom"
        />
        <button onClick={handleClick}>MEME</button>
      </form>
      <div className="meme-container">
        <h1 className="title top">{top}</h1>
        <img src={memeUrl} />
        <h1 className="title bottom">{bottom}</h1>
      </div>
    </div>
  );
}

export default App;
