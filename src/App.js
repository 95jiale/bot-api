import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");

  const [container, setContainer] = useState([]);

  const [lastPoint, setLastPoint] = useState("");

  useEffect(() => {
    fetch(
      `https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=mashape&msg=+${query}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "acobot-brainshop-ai-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "f729371a18msh44910f21e8b478bp1eb1dajsna71e6455e36c",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContainer([data]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [lastPoint]);

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setLastPoint(query);
  };
  return (
    <div className="App">
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="input text"
          value={query}
          onChange={onChangeHandler}
        />
        <button type="submit">Subtmit</button>
      </form>

      {container.map((item) => {
        return (
          <div>
            <p>{item.response}</p>
            <p>{item.message}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
