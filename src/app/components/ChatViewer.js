import React, { useState, useEffect, useRef } from "react";
import { ThemeContext } from "../../index.js";
import ThemeViewer from "./ThemeViewer.js";
import { flushSync } from "react-dom";

const listOfMessages = [
  "This is a first text",
  "This is a second text",
  "This is a third text",
  "This is a fourth text",
  "This is a fifth text",
  "This is a sixth text",
  "This is a seventh text"
];

const ChatViewer = () => {
  const [messages, setMessages] = useState([]);
  const listRef = useRef(null);

  const setScrollToBottom = () => {
    const lastElement = listRef.current.lastElementChild;

    if (listRef.current.scrollHeight < listRef.current.scrollTop + 500) {
      lastElement.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
    }

    // console.log(listRef.current.scrollTop, listRef.current.scrollHeight);

    // listRef.current.scrollTop = listRef.current.scrollHeight
  };

  const addMessage = (message) => {
    flushSync(() => {
      setMessages((messages) => [...messages, message]);
    });
    setScrollToBottom();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      addMessage(
        listOfMessages[Math.floor(Math.random() * listOfMessages.length)]
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div
          ref={listRef}
          style={{ height: 200, overflowY: "auto", margin: "10px" }}
        >
          {messages.map((item, index) => (
            <ThemeViewer key={index} value={item} theme={theme} />
          ))}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default ChatViewer;
