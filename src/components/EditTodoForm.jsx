import React, { useState } from 'react';

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue('');
  };

  return (
    <form className="flex flex-row  h-[40px]" onSubmit={handleSubmit}>
      <input value={value} text="text" className="bg-slate-800 text-white rounded-l-lg w-[380px] font-semibold px-4 border-slate-900 border" placeholder="Edit this task" onChange={(e) => setValue(e.target.value)} />
      <button className="rounded-r-lg bg-slate-900 w-[120px]">Edit Task</button>
    </form>
  );
};

export default EditTodoForm;
