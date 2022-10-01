// import logo from './logo.svg';
import './App.css';
/* const number = 5555;
const singer = { name: 'MAhfuz', job: 'singer' }
const singer2 = { name: 'Eva apa', job: 'singer' }
const singerStyle = {
  color: 'red',
  backgroundColor: 'blue'
} */

function App() {
  return (
    <div className="App">
      <Person name="rubel" nayika="mousumi"></Person>
      <Person name="sakib" nayika="shisir"></Person>
      <Person name="kuber" nayika="kapila"></Person>
      <h5>Ekhane o lekha jay</h5>
      <Friend name="tamim" phone="0170"></Friend>
      <Friend name="mushfiq" phone="0180"></Friend>

      {/* <h1>JSX</h1>
        <div className="container">
          <h3>Hello dude,React is coming..</h3>
        </div>
        <div className="music">
          <p> Name:{2222 + number}</p>
          <p style={singerStyle}> Name:{singer.name} Job:{singer.job}</p>
          <p style={{ color: 'blue', backgroundColor: 'yellow' }}> Name:{singer2.name} Job:{singer2.job}</p>
        </div> */}
    </div>
  );
}
function Person(props) {
  // console.log(props);
  return (
    <div className='person'>
      <h1>Hero:{props.name}</h1>
      <p>Name:{props.nayika}</p>
      {/* <h1>sakib al hasan</h1>
      <p>cricket</p> */}
    </div>
  )
}

function Friend(props) {
  // console.log(props)
  return (
    <div className='container'>
      <h1>{props.name}</h1>
      <p>{props.phone}</p>
      {/* <h1>Name:Ajay Dev gun</h1>
      <p>work:singum</p> */}
    </div>

  )
}

export default App;
