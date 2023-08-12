import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="flex font-semibold flex-row items-center w-[500px] h-[40px] gap-5 mx-auto justify-between px-4 bg-slate-900 py-2 rounded-md">
      <p onClick={() => toggleComplete(task.id)} className={`cursor-pointer  && ${task.completed ? 'line-through text-red-600' : ''}`}>
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
