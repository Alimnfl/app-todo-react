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
      <input value={value} text="text" className="rounded-l-lg w-[380px] text-black px-4 border-slate-900 border" placeholder="Silahkan isi apa saja" onChange={(e) => setValue(e.target.value)} />
      <button className="rounded-r-lg bg-slate-900 w-[120px]">Add Task</button>
    </form>
  );
};

export default EditTodoForm;
