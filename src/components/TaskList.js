import React from "react";

export default function TaskList(props) {
  //  const list = [
  //    {
  //      id: 1,
  //      text: "Прийти на урок реату",
  //      isComplete: false,
  //    },
  //    {
  //      id: 2,
  //      text: "Поїсти",
  //      isComplete: false,
  //    },
  //  ];
  return (
    <ul className="list">
      {props.list.map((item) => (
        <li className="task" key={item.id}>
          <p
            onClick={() => props.completeTask(item.id)}
            className={item.isComplete ? "complete" : "notcomplete"}
          >
            {item.text}
          </p>
          <button
            type="button"
            className="btn"
            onClick={() => props.deleteTask(item.id)}
          >
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
}
