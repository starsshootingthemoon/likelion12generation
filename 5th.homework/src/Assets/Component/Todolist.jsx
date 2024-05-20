import React, { useState } from 'react';
import '../Component/Main.css';
import delete_icon from '../img/delete.svg';
import plus_icon from '../img/plus.svg';

const Todolist = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    if (todo.trim() === '') {
      alert('내용을 입력해 주세요');
      return;
    }

    setTodoList([...todoList, { text: todo, checked: false }]);
    setTodo('');
  };

  const handleDeleteTodo = (index) => {
    const newList = todoList.filter((_, i) => i !== index);
    setTodoList(newList);
  };

  const handleCheckboxChange = (index) => {
    const newList = todoList.map((item, i) => {
      if (i === index) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setTodoList(newList);
  };

  return (
    <div id="wrap">
      <header id="header">
        <h1>To do list</h1>
        <div className="add">
          <input
            type="text"
            placeholder="오늘 할 일을 입력해 주세요."
            className="addvalue"
            id="input_todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button id="addbtn" onClick={handleAddTodo}>
            <img src={plus_icon} alt="add list" />
          </button>
        </div>
      </header>
      <main id="main">
        {todoList.map((item, index) => (
          <div className="list" key={index}>
            <div className="box">
              <input
                type="checkbox"
                id={`checkbox${index}`}
                checked={item.checked}
                onChange={() => handleCheckboxChange(index)}
              />
              <label htmlFor={`checkbox${index}`}></label>
              <p style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
                {item.text}
              </p>
              <button onClick={() => handleDeleteTodo(index)}>
                <img src={delete_icon} alt="delete" />
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Todolist;