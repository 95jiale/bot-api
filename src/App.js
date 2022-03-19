import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");

  const [container, setContainer] = useState(null);

  const [lastPoint, setLastPoint] = useState("");

  const useEffectFunction = () => {
    if (query != "") {
      console.log("sending query now");
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
        .then((response) => response.json())
        .then((data) => setContainer(data))
        .catch((err) => console.error(err));
    } else {
      const tempContainer = {
        chatbot: {
          response: "Please type something in the textbox",
        },
      };
      setContainer(tempContainer);
    }
  };

  useEffect(useEffectFunction, [lastPoint]);

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

      {container != null && <div>Message : {container.chatbot.response}</div>}
    </div>
  );
}

export default App;
