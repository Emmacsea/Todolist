import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import axios from 'axios'

import Form from './Components/Form'
import { TodoList } from './Components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const onChange = (e) => setTodo(e.target.value)

  const addToList = (e) => {
    e.preventDefault();
    const newList = {
      userId: "1",
      title: todo,
      completed: false,
    }

    try {
      axios
      .post("https://jsonplaceholder.typicode.com/todos", newList)
      .then(() => setTodos([...todos, newList]))
      
    } catch (error) {
      console.log(error);
      
    }
    setTodo("")

  }

  useEffect (
    () => 
      {
        axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err))
    }, []
  )

  return (
   <div>

    <Form OnChangeName={onChange} onSubmitForm={addToList}/>
    {/* <TodoList todos={todos} /> */}

   </div>
  )
}

export default App
