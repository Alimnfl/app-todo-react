import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <form className="flex flex-row h-[40px] " onSubmit={handleSubmit}>
      <input value={value} text="text" className="bg-slate-800 text-white font-semibold rounded-l-lg w-[380px] px-4 border-slate-900 border" placeholder="Add your to do for this day" onChange={(e) => setValue(e.target.value)} />
      <button className="rounded-r-lg bg-slate-900 w-[120px]">Add Task</button>
    </form>
  );
};

export default TodoForm;
