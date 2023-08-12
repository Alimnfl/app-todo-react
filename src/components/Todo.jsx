import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="flex flex-row items-center gap-5 justify-between px-4 bg-slate-900 py-2 rounded-md">
      <p onClick={() => toggleComplete(task.id)} className={`cursor-pointer && ${task.completed ? 'completed' : ''}`}>
        {task.task}
      </p>
      <div className="flex gap-4">
        <FontAwesomeIcon className="cursor-pointer" onClick={() => editTodo(task.id)} icon={faPenToSquare} />
        <FontAwesomeIcon className="cursor-pointer" onClick={() => deleteTodo(task.id)} icon={faTrash} />
      </div>
    </div>
  );
};

export default Todo;
