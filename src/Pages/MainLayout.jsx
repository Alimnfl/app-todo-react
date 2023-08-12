import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../components/Todo';
import EditTodoForm from '../components/EditTodoForm';
uuidv4();

const MainLayout = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
  };

  const editTask = (task, id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)));
  };

  return (
    <div className="bg-slate-900 flex flex-col w-screen h-screen items-center justify-center text-white">
      <div className="bg-slate-700 w-[550px] pt-[40px] pb-[200px] rounded-lg px-7 mx-auto flex flex-col gap-5">
        <h1 className="flex mx-auto items-center font-sans font-bold text-[30px] py-5">Just Do It!</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (todo.isEditing ? <EditTodoForm editTodo={editTask} task={todo} /> : <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />))}
      </div>
    </div>
  );
};

export default MainLayout;
