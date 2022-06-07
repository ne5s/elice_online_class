import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList((current) => {
      return [
        ...current,
        {
          id: new Date().getTime(),
          isComepleted: false,
          value: inputValue,
        },
      ];
    });
    setInputValue("");
  };

  const handleCompleteClick = (index) => {
    setTodoList((current) => {
      const newList = [...current];
      newList[index].isComepleted = true;
      return newList;
    });
  };

  return (
    <div>
      <ol id="todo-list">
        {todoList.map((item, index) => (
          <li
            className={item.isComepleted === true ? "competed" : ""}
            key={index}
          >
            <span>{item.value}</span>
            <button onClick={() => handleCompleteClick(index)}>완료</button>
            <button>삭제</button>
          </li>
        ))}
      </ol>
      <form id="create" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default App;
