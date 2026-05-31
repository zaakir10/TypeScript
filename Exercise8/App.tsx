import { useState } from "react";


// User Interface
interface User {
  username: string;
  email: string;
}


// Todo Interface
interface Todo {
  id: number;
  task: string;
  done: boolean;
}


export default function App() {

  // 1. Counter State
  const [count, setCount] = useState<number>(0);


  // 2. User State
  const [user, setUser] = useState<User | null>(null);


  // 3. Todo List State
  const [todos, setTodos] = useState<Todo[]>([]);


  // Add Todo Function
  function addTodo() {
    const newTodo: Todo = {
      id: Date.now(),
      task: "Learn TypeScript",
      done: false,
    };

    setTodos([...todos, newTodo]);
  }


  return (
    <div style={{ padding: "20px" }}>

      {/* Counter */}
      <h2>Counter</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>


      <hr />


      {/* User State */}
      <h2>User</h2>

      <button
        onClick={() =>
          setUser({
            username: "Zakir",
            email: "zakir@gmail.com",
          })
        }
      >
        Load User
      </button>

      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )}


      <hr />


      {/* Todo List */}
      <h2>Todos</h2>

      <button onClick={addTodo}>
        Add Todo
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} - {todo.done ? "Done" : "Pending"}
          </li>
        ))}
      </ul>


      <hr />


   
    </div>
  );
}