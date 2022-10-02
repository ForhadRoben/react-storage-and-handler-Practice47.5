// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Timer></Timer>
      <ExternalTodos></ExternalTodos>
      {/* <Counter></Counter> */}
      {/* <ExternalUsers></ExternalUsers> */}

    </div>
  );
}
/* function ExternalUsers() {
  const [users, setUsers] = useState([]);
  // const myfunc=()=>{}
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setUsers(data))

  }, [])
  return (
    <div>
      <h1>ExternalUsers</h1>
      <p>{users.length}</p>
      {
        users.map(user => <li>{user.name}</li>)
      }
      {
        users.map(user => <Users name={user.name} email={user.email} id={user.id}></Users>)
      }
    </div>
  )
} */
/* function Users(props) {
  return (
    <div style={{ border: '2px solid red', margin: '20px', borderRadius: '50px', padding: '20px' }}>
      <h2>Name:{props.name}</h2>
      <p>Email:{props.email}</p>
      <p><small>Id:{props.id}</small></p>
    </div>
  )
} */

function ExternalTodos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setTodos(data))
  }, [])
  return (
    <div>
      <h2>ExternalTodos</h2>
      <p>Total Todos:{todos.length}</p>
      {
        // todos.map(todo => <li>{todo.id}</li>)
      }
      {
        todos.map(todo => <Todos name={todo.title} id={todo.id}></Todos>)
      }
    </div>
  )
}
function Todos(props) {
  return (
    <div className='todos'>
      <h2>Title:{props.name}</h2>
      <p>Id:{props.id}</p>
    </div>
  )
}


function Timer() {
  const [time, setTime] = useState(50);
  const [time1, setTime1] = useState(100);
  const increaseTime = () => {
    const newTime = time + 1;
    setTime(newTime);
  }
  const decreaseTime = () => setTime1(time1 - 1);
  return (
    <div>
      <h2>Time:{time} seconds   {time1} seconds</h2>
      <button onClick={increaseTime} style={{ padding: '10px', backgroundColor: 'blueviolet', marginRight: '10px' }}>TimeIncrese</button>
      <button onClick={decreaseTime} style={{ padding: '10px', backgroundColor: 'tomato' }}>TimeDecrese</button>
    </div>
  )
}

/* function Counter() {
  const [count, setCount] = useState(33);
  const [count1, setCount1] = useState(55);
  // console.log(abc);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount1(count1 - 1); */

/* const increaseCount = () => {
  const newCount = count + 1;
  setCount(newCount);
}
const decreaseCount = () => {
  const newCount1 = count1 - 1;
  setCount1(newCount1);
} */

/* return (
  <div>
    <h1>Count:{count} {count1}</h1>
    <button onClick={increaseCount}>Increase</button>
    <button onClick={decreaseCount}>Decrease</button>
  </div>
)
} */

export default App;
