import React, { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      alert("Поле не повинно бути порожнім");
      return;
    }

    if (task.length > 30) {
      alert("Поле не повинно бути більше 12 символів");
      return;
    }

    // console.log(task);
    props.addTask(task);
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        type="text"
        placeholder="Напишіть здачу"
        onChange={(event) => setTask(event.target.value)}
      />
      <button className="btn" type="submit">
        Додати
      </button>
    </form>
  );
}
