import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");

  const [container, setContainer] = useState([]);

  const [lastPoint, setLastPoint] = useState("");

  useEffect(() => {
    fetch(
      `https://ai-chatbot.p.rapidapi.com/chat/free?message=${query}&uid=user1`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "ai-chatbot.p.rapidapi.com",
          "x-rapidapi-key":
            "f729371a18msh44910f21e8b478bp1eb1dajsna71e6455e36c",
        },
      }
    )
      .then((response) => {
        console.log(response.json());
      })
      .then((data) => {
        setContainer(data);
      })
      .catch((err) => {
        console.error(err);
      }),
      [lastPoint];
  });

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setLastPoint(query.replaceAll(" ", "%20"));
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

      <div>Message : {container.data.chatbot.message}</div>
    </div>
  );
}

export default App;
